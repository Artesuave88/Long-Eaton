import { readFile, writeFile } from "node:fs/promises";

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey || apiKey === "[SENSITIVE]") {
  throw new Error("RESEND_API_KEY is unavailable.");
}

if (process.argv[2] !== "--send") {
  throw new Error("Live sending requires the explicit --send argument.");
}

const [recipientsJson, htmlTemplate, textTemplate] = await Promise.all([
  readFile("outreach/business-outreach-batch.json", "utf8"),
  readFile("outreach/business-listing-partnership.html", "utf8"),
  readFile("outreach/business-listing-partnership.txt", "utf8"),
]);

const recipients = JSON.parse(recipientsJson);
if (!Array.isArray(recipients) || recipients.length === 0 || recipients.length > 100) {
  throw new Error("The recipient manifest must contain between 1 and 100 records.");
}

const required = ["businessName", "slug", "email", "contactName", "personalisedNote"];
const seenEmails = new Set();
for (const recipient of recipients) {
  for (const field of required) {
    if (!recipient[field]?.trim()) throw new Error(`Missing ${field} in recipient manifest.`);
  }
  const email = recipient.email.toLowerCase();
  if (seenEmails.has(email)) throw new Error(`Duplicate recipient: ${recipient.email}`);
  seenEmails.add(email);
}

const render = (template, recipient) => {
  const values = {
    "{{CONTACT_NAME}}": recipient.contactName,
    "{{BUSINESS_NAME}}": recipient.businessName,
    "{{PERSONALISED_NOTE}}": recipient.personalisedNote,
    "{{LISTING_URL}}": `https://www.lovelongeaton.com/businesses/${recipient.slug}?utm_source=email&utm_medium=partner_outreach&utm_campaign=business_listing`,
  };

  const output = Object.entries(values).reduce(
    (result, [placeholder, value]) => result.replaceAll(placeholder, value),
    template,
  );
  if (/{{[A-Z_]+}}/.test(output)) throw new Error(`Unfilled placeholder for ${recipient.businessName}.`);
  return output;
};

const emails = recipients.map((recipient) => ({
  from: "Love Long Eaton <website@midasweb.org>",
  to: [recipient.email],
  reply_to: "info@midasweb.org",
  subject: `Your free Love Long Eaton listing — ${recipient.businessName}`,
  html: render(htmlTemplate, recipient),
  text: render(textTemplate, recipient),
}));

const response = await fetch("https://api.resend.com/emails/batch", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    "Idempotency-Key": "love-long-eaton-business-outreach-2026-09-11-v1",
  },
  body: JSON.stringify(emails),
});

const result = await response.json();
if (!response.ok) {
  throw new Error(`Resend rejected the outreach batch: ${result.message ?? response.status}`);
}

const sentAt = new Date().toISOString();
const deliveryLog = recipients.map((recipient, index) => ({
  sentAt,
  businessName: recipient.businessName,
  email: recipient.email,
  resendId: result.data?.[index]?.id ?? null,
}));
await writeFile(
  "outreach/business-outreach-send-log.json",
  `${JSON.stringify(deliveryLog, null, 2)}\n`,
  { flag: "wx" },
);

console.log(`Resend accepted ${deliveryLog.length} personalised emails.`);
for (const delivery of deliveryLog) {
  console.log(`${delivery.businessName}: ${delivery.resendId}`);
}
