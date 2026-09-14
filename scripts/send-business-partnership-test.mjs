import { readFile } from "node:fs/promises";

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey || apiKey === "[SENSITIVE]") {
  throw new Error("RESEND_API_KEY is unavailable.");
}

const examples = {
  "books-on-the-bridge": {
    contactName: "Books on the Bridge team",
    businessName: "Books on the Bridge",
    personalisedNote:
      "Your independent book recommendations are a lovely fit for a guide that helps Long Eaton residents discover local places and organisations.",
  },
  "dudl-coffee": {
    contactName: "DÜDL team",
    businessName: "DÜDL",
    personalisedNote:
      "Your independent coffee shop is exactly the kind of local place we want residents and visitors to discover when they explore Long Eaton.",
  },
};

const slug = process.argv[2] ?? "books-on-the-bridge";
const example = examples[slug];
if (!example) {
  throw new Error(`Unknown test example: ${slug}`);
}

const values = {
  "{{CONTACT_NAME}}": example.contactName,
  "{{BUSINESS_NAME}}": example.businessName,
  "{{PERSONALISED_NOTE}}": example.personalisedNote,
  "{{LISTING_URL}}": `https://www.lovelongeaton.com/businesses/${slug}?utm_source=email&utm_medium=partner_outreach&utm_campaign=business_listing`,
};

const personalise = (template) =>
  Object.entries(values).reduce(
    (output, [placeholder, value]) => output.replaceAll(placeholder, value),
    template,
  );

const [htmlTemplate, textTemplate] = await Promise.all([
  readFile("outreach/business-listing-partnership.html", "utf8"),
  readFile("outreach/business-listing-partnership.txt", "utf8"),
]);

const response = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    from: "Love Long Eaton <website@midasweb.org>",
    to: ["info@midasweb.org"],
    reply_to: "info@midasweb.org",
    subject: `[TEST] Your free Love Long Eaton listing — ${example.businessName}`,
    html: personalise(htmlTemplate),
    text: personalise(textTemplate),
  }),
});

const result = await response.json();
if (!response.ok) {
  throw new Error(`Resend rejected the test email: ${result.message ?? response.status}`);
}

console.log(`Test email accepted by Resend: ${result.id}`);
