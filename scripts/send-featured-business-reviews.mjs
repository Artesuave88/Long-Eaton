import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { tmpdir } from "node:os";
import { join } from "node:path";
import assert from "node:assert/strict";

const send = process.argv.includes("--send");
const businessDelivery = process.argv.includes("--businesses");
const reviewAddress = "info@midasweb.org";
const replyAddress = "Lovelongeatonwebsite@gmail.com";
const drafts = JSON.parse(await readFile("outreach/featured-business-campaign.json", "utf8"));
const template = await readFile("outreach/featured-business-template.html", "utf8");
assert.equal(drafts.length, 13);
assert.equal(new Set(drafts.map((draft) => draft.email.toLowerCase())).size, drafts.length);
assert.ok(drafts.every((draft) => draft.slug !== "long-eaton-bjj" && draft.status === "approved-for-business-delivery"));

const escapeHtml = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
const paragraph = (text) => `<p style="margin:0 0 18px;font-size:16px;line-height:1.65;">${escapeHtml(text)}</p>`;
const emails = drafts.map((draft) => {
  const parts = draft.text.trim().split("\n\n");
  assert.equal(parts.length, 10);
  const values = {
    REVIEW_NOTE: businessDelivery ? "" : `<div style="margin:0 0 24px;padding:14px 16px;background:#f1f5f9;border-left:4px solid #073dff;font-size:13px;line-height:1.6;color:#475569;"><strong>Review copy — not sent to the business</strong><br />For: ${escapeHtml(draft.businessName)}<br />Intended recipient: ${escapeHtml(draft.email)}<br />Reply-to: ${replyAddress}<br />The featured placements are proposed and need implementing before activation.</div>`,
    GREETING: paragraph(parts[0]),
    INTRODUCTION: [parts[1], parts[3]].map(paragraph).join("\n"),
    DETAILS: [parts[4], parts[5], parts[7]].map(paragraph).join("\n"),
    REPLY_URL: escapeHtml(`mailto:${replyAddress}?subject=${encodeURIComponent(`Featured Business enquiry — ${draft.businessName}`)}`),
    LISTING_URL: escapeHtml(draft.listingUrl),
  };
  const html = template.replace(/{{([A-Z_]+)}}/g, (_, key) => {
    assert.ok(key in values, `Unknown placeholder ${key}`);
    return values[key];
  });
  assert.ok(!/{{[A-Z_]+}}/.test(html));
  assert.ok(html.includes("le-logo-header.png") && html.includes("£15") && html.includes("Cancel anytime"));
  assert.ok(html.includes(">I'm interested</a>"));
  assert.ok(!html.includes("Paid placements will be clearly labelled as advertisements.") && !draft.text.includes("Paid placements will be clearly labelled as advertisements."));
  const text = businessDelivery ? draft.text : `REVIEW COPY — not sent to the business\nFor: ${draft.businessName}\nIntended recipient: ${draft.email}\nReply-to: ${replyAddress}\nThe featured placements are proposed and need implementing before activation.\n\n----- DRAFT -----\n\n${draft.text}`;
  if (businessDelivery) {
    assert.ok(!html.includes("Review copy") && !text.includes("REVIEW COPY"));
    const addresses = `${html} ${text}`.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [];
    assert.ok(addresses.every((address) => address === replyAddress));
  }
  return {
    from: "Love Long Eaton <info@midasweb.org>",
    to: [businessDelivery ? draft.email : reviewAddress],
    reply_to: replyAddress,
    subject: businessDelivery ? draft.subject : `[TEST — £15 FEATURED] ${draft.subject}`,
    html,
    text,
  };
});

const previewDirectory = await mkdtemp(join(tmpdir(), "love-long-eaton-featured-"));
for (const [index, email] of emails.entries()) {
  await writeFile(`${previewDirectory}/${drafts[index].slug}.html`, email.html);
}
if (!send) {
  console.log(`Validated and rendered ${emails.length} branded ${businessDelivery ? "business emails" : "reviews"}. BJJ excluded; delivery disabled.`);
  console.log(`Previews: ${previewDirectory}`);
  process.exit(0);
}
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey || apiKey === "[SENSITIVE]") throw new Error("RESEND_API_KEY is unavailable.");

// Each message goes only to its intended recipient; no CC or BCC.
for (const [index, email] of emails.entries()) {
  assert.deepEqual(email.to, [businessDelivery ? drafts[index].email : reviewAddress]);
  assert.equal(email.reply_to, replyAddress);
  assert.equal(email.from, "Love Long Eaton <info@midasweb.org>");
}
const digest = createHash("sha256").update(JSON.stringify(emails)).digest("hex").slice(0, 24);
const response = await fetch("https://api.resend.com/emails/batch", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    "Idempotency-Key": `featured-business-${businessDelivery ? "approved" : "reviews"}-2026-10-19-${digest}`,
  },
  body: JSON.stringify(emails),
});
const result = await response.json();
if (!response.ok) throw new Error(`Resend rejected review delivery: ${result.message ?? response.status}`);
assert.equal(result.data?.length, emails.length, "Unexpected batch response; inspect before retrying.");
const log = drafts.map((draft, index) => ({
  businessName: draft.businessName,
  slug: draft.slug,
  to: emails[index].to[0],
  from: emails[index].from,
  replyTo: replyAddress,
  resendId: result.data[index].id,
  acceptedAt: new Date().toISOString(),
}));
const logPath = businessDelivery ? "outreach/featured-business-send-log.json" : "outreach/featured-business-review-send-log.json";
await writeFile(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log(`Resend accepted ${log.length} branded ${businessDelivery ? "business emails" : `review emails to ${reviewAddress}`}. Reply-to: ${replyAddress}.`);
