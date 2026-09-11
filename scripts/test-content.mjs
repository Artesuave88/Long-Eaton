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
  const { isUpcomingEvent, getRegularEvents, getUpcomingEvents, getEventHref } =
    await server.ssrLoadModule('/src/lib/data/listings.ts');
  const { getCurrentSeasonEvents } = await server.ssrLoadModule('/src/lib/utils/seasons.ts');
  const at = (value) => new Date(value);
  const club = events.find((event) => event.slug === 'dudl-summer-art-club-tuesdays-2026');
  assert.ok(club, 'The finite holiday club fixture exists');
  assert.equal(isUpcomingEvent(club, at('2026-09-01T22:59:00Z')), true, 'Club remains current on its final London date');
  assert.equal(isUpcomingEvent(club, at('2026-09-01T23:00:00Z')), false, 'Club expires at London midnight, including during BST');
  assert.equal(isUpcomingEvent({ ...club, ongoing: true }, at('2026-09-11T12:00:00Z')), false, 'An explicit end date wins over an ongoing flag');

  const now = at('2026-09-11T12:00:00Z');
  const expiredClubs = (items) => items.some((event) => event.slug.startsWith('dudl-summer-art-club'));
  assert.equal(expiredClubs(getUpcomingEvents(events, now)), false, 'Expired clubs are absent from upcoming listings');
  assert.equal(expiredClubs(getRegularEvents(events, now)), false, 'Expired clubs are absent from regular listings');
  assert.equal(expiredClubs(getCurrentSeasonEvents(events, now)), false, 'Expired clubs are absent from seasonal selections');
  assert.ok(getRegularEvents(events, at('2027-02-01T12:00:00Z')).some((event) => event.slug === 'long-eaton-parkrun'), 'A weekly event without an end date remains available');

  const show = events.find((event) => event.slug === 'duchess-theatre-the-great-british-bake-off-musical');
  assert.equal(show?.endDate, '2026-09-19', 'The imported production keeps its final performance date');
  assert.equal(isUpcomingEvent(show, at('2026-09-18T12:00:00Z')), true, 'A multi-day production stays visible after opening night');
  assert.equal(isUpcomingEvent(show, at('2026-09-20T12:00:00Z')), false, 'A production expires after its final performance');
  assert.equal(getEventHref(show), show.ticketUrl, 'A title-only import links directly to official booking information');
  assert.equal(getEventHref(club), `/events/${club.slug}`, 'An editorial listing retains its detail URL');
  console.log('Content regression checks passed: expiry, London midnight, recurring events, multi-day imports and booking links.');
} finally {
  await server.close();
}
