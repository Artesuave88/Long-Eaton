import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

// Load the real TypeScript data and helpers with the same aliases as the app.
const src = fileURLToPath(new URL('../src/lib/', import.meta.url));
const server = await createServer({
  configFile: false,
  resolve: { alias: { $data: `${src}data`, $utils: `${src}utils`, $types: `${src}types` } },
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
  appType: 'custom',
});

try {
  const { events } = await server.ssrLoadModule('/src/lib/data/events.ts');
  const { newsItems, newsDrafts, isNewsExpired, getCurrentNews } = await server.ssrLoadModule('/src/lib/data/news.ts');
  const { outdoorPlans, filterVisitPlans } = await server.ssrLoadModule('/src/lib/data/visit-plans.ts');
  const { searchGuides, getCurrentSearchGuides } = await server.ssrLoadModule('/src/lib/data/guides.ts');
  const { isUpcomingEvent, getRegularEvents, getUpcomingEvents, getEventHref } =
    await server.ssrLoadModule('/src/lib/data/listings.ts');
  const { getCurrentSeasonEvents } = await server.ssrLoadModule('/src/lib/utils/seasons.ts');
  const at = (value) => new Date(value);
  const club = { slug: 'finite-club', date: '2026-08-01', endDate: '2026-09-01', recurrence: 'weekly', dayOfWeek: 'Tuesday' };
  assert.equal(isUpcomingEvent(club, at('2026-09-01T22:59:00Z')), true, 'Club remains current on its final London date');
  assert.equal(isUpcomingEvent(club, at('2026-09-01T23:00:00Z')), false, 'Club expires at London midnight, including during BST');
  assert.equal(isUpcomingEvent({ ...club, ongoing: true }, at('2026-09-11T12:00:00Z')), false, 'An explicit end date wins over an ongoing flag');

  const now = at('2026-09-11T12:00:00Z');
  const expiredClubs = (items) => items.some((event) => event.slug === club.slug);
  const clubEvents = [...events, club];
  assert.equal(expiredClubs(getUpcomingEvents(clubEvents, now)), false, 'Expired clubs are absent from upcoming listings');
  assert.equal(expiredClubs(getRegularEvents(clubEvents, now)), false, 'Expired clubs are absent from regular listings');
  assert.equal(expiredClubs(getCurrentSeasonEvents(clubEvents, now)), false, 'Expired clubs are absent from seasonal selections');
  assert.ok(getRegularEvents(events, at('2027-02-01T12:00:00Z')).some((event) => event.slug === 'long-eaton-parkrun'), 'A weekly event without an end date remains available');

  const show = events.find((event) => event.slug === 'duchess-theatre-blood-brothers');
  assert.equal(show?.endDate, '2026-11-07', 'The imported production keeps its final performance date');
  assert.equal(isUpcomingEvent(show, at('2026-11-06T12:00:00Z')), true, 'A multi-day production stays visible after opening night');
  assert.equal(isUpcomingEvent(show, at('2026-11-08T12:00:00Z')), false, 'A production expires after its final performance');
  assert.equal(getEventHref(show), show.ticketUrl, 'A title-only import links directly to official booking information');
  assert.equal(getEventHref(club), `/events/${club.slug}`, 'An editorial listing retains its detail URL');
  for (const item of newsItems) {
    assert.ok(item.originalContent === true || (item.sourceUrl && new URL(item.sourceUrl).protocol === 'https:'), `Published news is original content or has a source: ${item.id}`);
    assert.notEqual(item.publicationStatus, 'draft', 'Drafts do not appear in the public feed');
    assert.ok(!newsDrafts.some((draft) => draft.id === item.id), 'A held story stays out of published data');
  }
  const offer = { validUntil: '2026-08-31' };
  assert.equal(isNewsExpired(offer, at('2026-08-31T22:59:00Z')), false, 'Offer is valid through its final London day');
  assert.equal(isNewsExpired(offer, at('2026-08-31T23:00:00Z')), true, 'Offer expires at London midnight');
  assert.equal(isNewsExpired(newsItems.find((item) => !item.validUntil), at('2027-01-01T12:00:00Z')), false, 'An undated announcement does not become an expired offer');
  assert.equal(filterVisitPlans(outdoorPlans, 'all').length, 3, 'All suggested outings are available without filtering');
  assert.deepEqual(filterVisitPlans(outdoorPlans, 'park').map((plan) => plan.id), ['west-park'], 'Park preference selects the park outing');
  assert.deepEqual(filterVisitPlans(outdoorPlans, 'water').map((plan) => plan.id), ['erewash-canal', 'trent-lock'], 'Water preference preserves both kinds of waterside outing');
  const outdoorGuide = searchGuides.find((guide) => guide.slug === 'outdoor-days-out-in-long-eaton');
  for (const plan of outdoorGuide.visitPlans) {
    assert.ok(outdoorGuide.sources.some((source) => source.href === plan.href), 'Every outing links to a checked source in its guide');
  }
  const cleanupDate = at('2026-10-28T20:00:00Z');
  assert.ok(events.every((event) => !event.date && !event.endDate || isUpcomingEvent(event, cleanupDate)), 'Expired dated events have been deleted from source data');
  assert.equal(getCurrentNews(cleanupDate).length, newsItems.length, 'Expired news offers have been deleted from source data');
  const session = { date: '2026-10-28', endTime: '12:30' };
  assert.equal(isUpcomingEvent(session, at('2026-10-28T12:29:00Z')), true, 'A session stays visible until its finish time');
  assert.equal(isUpcomingEvent(session, at('2026-10-28T12:30:00Z')), false, 'A finished same-day session expires');
  assert.equal(isUpcomingEvent({ date: '2026-10-25', endTime: '09:00' }, at('2026-10-25T08:59:00Z')), true, 'Finish times use London time after the clocks change');
  assert.equal(isUpcomingEvent({ date: '2026-10-24', endTime: '09:00' }, at('2026-10-24T08:00:00Z')), false, 'Finish times use London time during BST');
  const halfTerm = getCurrentSearchGuides(cleanupDate).find((guide) => guide.slug === 'things-to-do-this-half-term');
  assert.equal(halfTerm.sections.length, 7, 'The finished library card has been deleted');
  assert.ok(!getCurrentSearchGuides(at('2026-11-04T00:00:00Z')).some((guide) => guide.slug === halfTerm.slug), 'The dated half-term guide expires after its last day');
  assert.ok(!getCurrentSearchGuides(at('2026-10-30T14:00:00Z')).find((guide) => guide.slug === halfTerm.slug).sections.some((section) => section.title === 'Free Halloween Fun Day'), 'Dated guide cards expire when their session finishes');
  console.log('Content regression checks passed: events, publication sources, draft isolation, offer expiry and visit planning.');
} finally {
  await server.close();
}
