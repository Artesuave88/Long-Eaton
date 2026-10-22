# Outreach preferences

Updated 22 October 2026: the user explicitly requested both Sunday and Thursday newsletter test copies at Lovelongeatonwebsite@gmail.com. Newsletter tests use this address, superseding the older review-address instruction for these copies. Run `node --env-file=.env scripts/send-newsletter-tests.mjs --date=YYYY-MM-DD --send`; omit `--send` to generate local HTML previews only. The Sunday preview covers the following Monday–Sunday, and the Thursday preview covers the next Friday–Sunday. Delivery records are in `newsletter-test-send-log.json`.

Always send draft/review copies to the user first at info@midasweb.org, using the established review-email address. Do not send organiser or other external outreach emails until the user approves the reviewed messages and recipients. This preference was explicitly requested on 16 October 2026. The user confirmed info@midasweb.org as the review recipient. Outreach emails must use the existing Love Long Eaton HTML branding (logo, blue header and button, white card and footer), as used in `business-listing-partnership.html`; include a plain-text alternative.

Event review drafts are in `event-listing-drafts.json` and `event-listing-drafts.md`. Run `node --env-file=.env scripts/send-event-listing-reviews.mjs` to send the three review copies only to info@midasweb.org. Verify publication before sending the eventual organiser messages.

Never include the user’s personal email address. Updated 19 October 2026: the public site contact and campaign reply-to is Lovelongeatonwebsite@gmail.com. The verified Resend sender is Love Long Eaton <info@midasweb.org>; review copies still go only to info@midasweb.org. This supersedes the earlier info@midasweb.org reply-to preference. The user approved the three branded event emails for organiser delivery on 16 October 2026; deployment and public-link verification are still required before sending.

Featured Business launch price: £15 per month, cancel anytime, no minimum term. Keep standard listings free. Draft personalised branded emails for the existing business contacts, excluding Long Eaton BJJ. Send user review copies first; no business campaign delivery until approved. Drafts: `featured-business-campaign.json`; HTML: `featured-business-template.html`.

The user approved sending the 13 Featured Business campaign emails after removing the sentence about advertisement labels from email copy and changing the reply button to "I'm interested". These copy changes do not alter site placement labelling. Send the approved campaign with `node --env-file=.env scripts/send-featured-business-reviews.mjs --businesses --send`.

Generated Featured Business HTML previews are written to a temporary directory outside the repository. Keep campaign data, reusable templates/scripts and send logs; do not commit generated preview copies.
