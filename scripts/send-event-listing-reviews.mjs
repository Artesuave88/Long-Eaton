import { mkdir, readFile, writeFile } from "node:fs/promises";

const apiKey = process.env.RESEND_API_KEY;
const previewOnly = process.argv.includes("--preview");
if (!previewOnly && (!apiKey || apiKey === "[SENSITIVE]")) throw new Error("RESEND_API_KEY is unavailable.");

// Review delivery only. Organiser addresses are deliberately not accepted.
const reviewAddress = "info@midasweb.org";
const drafts = JSON.parse(await readFile("outreach/event-listing-drafts.json", "utf8"));
if (drafts.length !== 3 || drafts.some((draft) => draft.status !== "review-only")) {
  throw new Error("Expected three review-only event drafts.");
}

const template = await readFile("outreach/event-listing-template.html", "utf8");
const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
const paragraph = (text) => `<p style="margin:0 0 18px;font-size:16px;line-height:1.65;">${escapeHtml(text)}</p>`;
const render = (draft) => {
  const paragraphs = draft.text.trim().split("\n\n");
  const linkIndex = paragraphs.findIndex((text) => text.startsWith("You can see the listing here:"));
  if (linkIndex < 2) throw new Error(`Missing event link in ${draft.id}`);
  const values = {
    REVIEW_NOTE: `<div style="margin:0 0 24px;padding:14px 16px;background:#f1f5f9;border-left:4px solid #073dff;color:#475569;font-size:13px;line-height:1.6;"><strong>Review copy — for you only</strong><br />Intended organiser: ${escapeHtml(draft.intendedOrganiser)}<br />${escapeHtml(draft.publicationNote)}<br />No organiser has been contacted.</div>`,
    GREETING: paragraph(paragraphs[0]),
    INTRODUCTION: paragraphs.slice(1, linkIndex).map(paragraph).join("\n"),
    LISTING_URL: escapeHtml(draft.listingUrl),
    DETAILS: paragraphs.slice(linkIndex + 1, -1).map(paragraph).join("\n"),
  };
  const html = template.replace(/{{([A-Z_]+)}}/g, (_, key) => {
    if (!(key in values)) throw new Error(`Unknown placeholder: ${key}`);
    return values[key];
  });
  return html;
};
const emails = drafts.map((draft) => ({
  from: "Love Long Eaton <info@midasweb.org>",
  to: [reviewAddress],
  reply_to: reviewAddress,
  subject: `[DRAFT FOR REVIEW] ${draft.subject}`,
  html: render(draft),
  text: `REVIEW COPY — for you only\nIntended organiser: ${draft.intendedOrganiser}\n${draft.publicationNote}\nNo organiser has been contacted.\n\n----- DRAFT -----\n\n${draft.text}`,
}));

await mkdir("outreach/event-email-previews", { recursive: true });
for (const [index, email] of emails.entries()) {
  await writeFile(`outreach/event-email-previews/${drafts[index].id}.html`, email.html);
}
if (previewOnly) {
  console.log("Rendered three branded review previews; no emails sent.");
  process.exit(0);
}

const response = await fetch("https://api.resend.com/emails/batch", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    "Idempotency-Key": "love-long-eaton-event-reviews-2026-10-16-branded-v2",
  },
  body: JSON.stringify(emails),
});
const result = await response.json();
if (!response.ok) throw new Error(`Review delivery rejected: ${result.message ?? response.status}`);
const deliveries = drafts.map((draft, index) => ({
  draftId: draft.id,
  to: reviewAddress,
  version: "branded-v2",
  acceptedAt: new Date().toISOString(),
  resendId: result.data?.[index]?.id ?? null,
}));
await writeFile("outreach/event-listing-review-send-log.json", `${JSON.stringify(deliveries, null, 2)}\n`);
console.log(`Resend accepted ${deliveries.length} review copies to ${reviewAddress}.`);
for (const delivery of deliveries) console.log(`${delivery.draftId}: ${delivery.resendId}`);
