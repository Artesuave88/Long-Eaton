# Maintaining Love Long Eaton

The content improvements made on 10 October 2026 add a sourced outdoor guide,
three suggested visit plans, practical context on council notices, and visible
expiry labels for dated news offers. They do not establish an audience or
guarantee advertising approval.

## Weekly editorial review

- Check the current weekend page and recurring activities against organiser
  information. A recurring event can remain in the calendar indefinitely without
  an end date; remove or amend it when its organiser changes the schedule.
- Check prices, service times and access details in guides against their linked
  sources. Change a checked date only after actually reviewing the information.
- Review corrections received through the contact form, including the affected
  page and the source supporting a change.
- Add useful local comparisons or practical information when verified. More
  pages or longer descriptions alone do not make a guide more useful.

## Publishing news

Published stories live in `src/lib/data/news.ts` under `newsItems`. Each must
have an HTTPS source link. Keep unverified stories in `newsDrafts`; these are
excluded from public routes, the homepage and the sitemap. The motorway story
is retained there pending verification of its support and appraisal claims.

Use an ISO `validUntil` date for time-limited offers. Expiry labels and exclusion
from homepage featured news follow the London calendar date automatically.
Historical articles remain available. A `checkedOn` date records review of the
source, not confirmation of the current state of construction or a personal visit.

## Before an advertising resubmission

1. Deploy the reviewed changes and check the public guide, planner, news pages
   and contact form.
2. Run `pnpm test`. This checks types, event and offer expiry, publication source
   requirements, the production build, metadata, sitemap membership and links.
3. Check real audience evidence in Search Console and analytics: search clicks,
   returning visitors and which guides readers use. No audience figures have
   been verified as part of these changes.
4. Continue updating the useful pages and addressing reader corrections. Submit
   once the public site and its actual audience support the application, rather
   than assuming these code changes alone satisfy the review.

Google's guidance: https://support.google.com/adsense/answer/7299563

## Automated subscriber emails

The existing newsletter segment receives two branded campaigns:

- Thursday at 18:00 Europe/London: the Friday–Sunday weekend guide.
- Sunday at 18:00 Europe/London: “Coming up this week”, covering the following
  Monday–Friday, with up to eight dated events and weekly activities.

Both use `RESEND_API_KEY`, `RESEND_SEGMENT_ID`, `CONTACT_FROM_EMAIL` and
`CRON_SECRET`. Each endpoint has 17:00 and 18:00 UTC cron entries; its London
weekday/hour check permits only the matching local 18:00 invocation through BST
and GMT. Production deployment activates changes to these schedules.

`/api/cron/weekly-email` and `/api/cron/week-ahead-email` require the cron bearer
secret. The existing `?send=now` override sends immediately, so use it only for
an intentional subscriber send. Campaign names and HTML markers include the
campaign type and date range to distinguish the two emails and detect repeats.

Unknown dates, TBC listings and monthly activities without explicit occurrence
dates are omitted. Keep dated listings and weekly series start/end dates current.
In the Thursday weekend email, Long Eaton parkrun and junior parkrun are fallback
listings: include them only when no other eligible weekend events are available.
Run `pnpm test:newsletter` to check calendar selection, branding, timezone gates,
authorization and duplicate handling without sending real emails.
