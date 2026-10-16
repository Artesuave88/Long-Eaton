import { mkdir, readFile, writeFile } from "node:fs/promises";

const apiKey = process.env.RESEND_API_KEY;
const previewOnly = !process.argv.includes("--send");
if (!previewOnly && (!apiKey || apiKey === "[SENSITIVE]")) throw new Error("RESEND_API_KEY is unavailable.");

// Organiser delivery was approved after branded review copies on 16 October 2026.
const replyAddress = "info@midasweb.org";
const contacts = JSON.parse(await readFile("outreach/event-organiser-contacts.json", "utf8"));
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
    REVIEW_NOTE: "",
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
const emails = drafts.map((draft) => {
  const contact = contacts.find((item) => item.draftId === draft.id);
  if (!contact?.email || !contact.sourceUrl) throw new Error(`Missing verified contact: ${draft.id}`);
  return ({
  from: "Love Long Eaton <info@midasweb.org>",
  to: [contact.email],
  reply_to: replyAddress,
  subject: draft.subject,
  html: render(draft),
  text: draft.text,
});
});

await mkdir("outreach/event-organiser-previews", { recursive: true });
for (const [index, email] of emails.entries()) {
  await writeFile(`outreach/event-organiser-previews/${drafts[index].id}.html`, email.html);
}
if (previewOnly) {
  console.log("Rendered three branded organiser previews; no emails sent. Use --send only after public links are verified.");
  process.exit(0);
}

// Never announce a listing that the recipient cannot open.
for (const draft of drafts) {
  const page = await fetch(draft.listingUrl);
  if (!page.ok) throw new Error(`Not sent: event page returned ${page.status}: ${draft.listingUrl}`);
  const html = await page.text();
  if (!html.includes(draft.eventTitle) && !html.includes(draft.eventTitle.replaceAll("&", "&amp;"))) {
    throw new Error(`Not sent: expected event title missing: ${draft.listingUrl}`);
  }
}
for (const email of emails) {
  const addresses = `${email.html} ${email.text}`.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [];
  if (email.from !== "Love Long Eaton <info@midasweb.org>" || email.reply_to !== "info@midasweb.org" || addresses.some((value) => value !== "info@midasweb.org")) {
    throw new Error("Unexpected sender, reply-to or email address in message content.");
  }
}

const response = await fetch("https://api.resend.com/emails/batch", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    "Idempotency-Key": "love-long-eaton-event-organisers-2026-10-16-v1",
  },
  body: JSON.stringify(emails),
});
const result = await response.json();
if (!response.ok) throw new Error(`Organiser delivery rejected: ${result.message ?? response.status}`);
const deliveries = drafts.map((draft, index) => ({
  draftId: draft.id,
  to: emails[index].to[0],
  from: emails[index].from,
  replyTo: replyAddress,
  version: "branded-v2",
  acceptedAt: new Date().toISOString(),
  resendId: result.data?.[index]?.id ?? null,
}));
await writeFile("outreach/event-listing-organiser-send-log.json", `${JSON.stringify(deliveries, null, 2)}\n`);
console.log(`Resend accepted ${deliveries.length} organiser emails.`);
for (const delivery of deliveries) console.log(`${delivery.draftId}: ${delivery.resendId}`);
