# Outreach preferences

Always send draft/review copies to the user first at info@midasweb.org, using the established review-email address. Do not send organiser or other external outreach emails until the user approves the reviewed messages and recipients. This preference was explicitly requested on 16 October 2026. The user confirmed info@midasweb.org as the review recipient. Outreach emails must use the existing Love Long Eaton HTML branding (logo, blue header and button, white card and footer), as used in `business-listing-partnership.html`; include a plain-text alternative.

Event review drafts are in `event-listing-drafts.json` and `event-listing-drafts.md`. Run `node --env-file=.env scripts/send-event-listing-reviews.mjs` to send the three review copies only to info@midasweb.org. Verify publication before sending the eventual organiser messages.

Use only info@midasweb.org for the user’s email identity: sender, reply-to, review destination and any contact details in the message. Never include a personal email address. The user approved the three branded event emails for organiser delivery on 16 October 2026; deployment and public-link verification are still required before sending.
