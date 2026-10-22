import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const src = fileURLToPath(new URL('../src/lib/', import.meta.url));
const server = await createServer({
  configFile: false,
  resolve: { alias: { $lib: src, $data: `${src}data`, $utils: `${src}utils`, $types: `${src}types` } },
  plugins: [{
    name: 'newsletter-test-env',
    resolveId(id) { if (id === '$env/dynamic/private') return '\0newsletter-test-env'; },
    load(id) {
      if (id === '\0newsletter-test-env') return 'export const env = { CRON_SECRET: "test-secret", RESEND_API_KEY: "test-key", RESEND_SEGMENT_ID: "test-segment" };';
    },
  }],
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
  appType: 'custom',
});
const RealDate = Date;
const realFetch = globalThis.fetch;
try {
  const { getNextWeek, getEmailEventDates, buildWeeklyEmail } = await server.ssrLoadModule('/src/lib/server/weekly-email.ts');
  const { createNewsletterHandler } = await server.ssrLoadModule('/src/lib/server/newsletter-campaign.ts');
  const now = new Date('2026-10-25T18:00:00Z');
  const week = getNextWeek(now);
  assert.equal(week.start, '2026-10-26');
  assert.equal(week.end, '2026-10-30');
  assert.equal(getNextWeek(new Date('2026-12-27T18:00:00Z')).end, '2027-01-01');
  const base = { id: 'test', slug: 'test', title: 'Test & music', category: 'Music', excerpt: 'Local <music>', description: [], imageLabel: '', imageStyle: '' };
  const occurrences = (event) => getEmailEventDates({ ...base, ...event }, week.startDate, week.endDate).map((date) => date.toISOString().slice(0, 10));
  assert.deepEqual(occurrences({ date: '2026-10-25' }), []);
  assert.deepEqual(occurrences({ date: '2026-11-02' }), []);
  assert.deepEqual(occurrences({ date: '2026-10-26' }), ['2026-10-26']);
  assert.deepEqual(occurrences({ date: '2026-10-30' }), ['2026-10-30']);
  assert.deepEqual(occurrences({ date: '2026-10-31' }), []);
  assert.deepEqual(occurrences({ date: '2026-11-01' }), []);
  assert.deepEqual(occurrences({ recurrence: 'weekly', dayOfWeek: 'Saturday' }), []);
  assert.deepEqual(occurrences({ recurrence: 'weekly', dayOfWeek: 'Sunday' }), []);
  assert.deepEqual(occurrences({ recurrence: 'weekly', dayOfWeek: 'Friday' }), ['2026-10-30']);
  assert.deepEqual(occurrences({ date: '2026-10-24', endDate: '2026-10-27' }), ['2026-10-26']);
  assert.deepEqual(occurrences({ recurrence: 'weekly', daysOfWeek: ['Wednesday', 'Monday'] }), ['2026-10-26', '2026-10-28']);
  assert.deepEqual(occurrences({ recurrence: 'weekly', dayOfWeek: 'Monday', date: '2026-10-27' }), []);
  assert.deepEqual(occurrences({ recurrence: 'weekly', dayOfWeek: 'Friday', endDate: '2026-10-29' }), []);
  assert.deepEqual(occurrences({ recurrence: 'monthly', ongoing: true, dayOfWeek: 'Monday' }), []);
  assert.deepEqual(occurrences({ date: '2026-10-26', isTbc: true }), []);
  const email = buildWeeklyEmail(now, 'week-ahead', [{ ...base, date: '2026-10-26' }]);
  assert.match(email.subject, /^Coming up this week in Long Eaton:/);
  assert.match(email.html, /Test &amp; music/);
  assert.match(email.html, /Local &lt;music&gt;/);
  assert.match(email.html, /26–30 October 2026/);
  assert.match(email.html, /RESEND_UNSUBSCRIBE_URL/);
  assert.match(email.text, /Monday 26 October/);
  assert.match(email.text, /\/events/);
  assert.notEqual(email.campaignName, buildWeeklyEmail(now).campaignName);
  assert.equal(buildWeeklyEmail(now, 'week-ahead', []).eventCount, 0);
  assert.match(buildWeeklyEmail(now).subject, /weekend/);

  const thursday = new Date('2026-10-22T17:00:00Z');
  const parkruns = [
    { ...base, slug: 'long-eaton-parkrun', title: 'Long Eaton parkrun', recurrence: 'weekly', dayOfWeek: 'Saturday', featured: true },
    { ...base, slug: 'long-eaton-junior-parkrun', title: 'Long Eaton junior parkrun', recurrence: 'weekly', dayOfWeek: 'Sunday' },
  ];
  const concert = { ...base, slug: 'local-concert', title: 'Local concert', date: '2026-10-24' };
  const busyWeekend = buildWeeklyEmail(thursday, 'weekend', [...parkruns, concert]);
  assert.equal(busyWeekend.eventCount, 1, 'Even a single alternative excludes both parkruns');
  for (const content of [busyWeekend.subject, busyWeekend.html, busyWeekend.text]) {
    assert.doesNotMatch(content, /parkrun/i, 'Parkruns are absent from the subject and both email formats');
    assert.match(content, /local concert/i);
  }
  const quietWeekend = buildWeeklyEmail(thursday, 'weekend', [
    ...parkruns,
    { ...concert, date: '2026-10-26' },
    { ...concert, date: '2026-10-24', isTbc: true },
  ]);
  assert.equal(quietWeekend.eventCount, 2, 'Ineligible alternatives do not suppress the parkrun fallback');
  assert.match(quietWeekend.html, /Long Eaton parkrun/);
  assert.match(quietWeekend.text, /LONG EATON JUNIOR PARKRUN/);
  assert.equal(buildWeeklyEmail(thursday, 'week-ahead', [
    ...parkruns, { ...concert, date: '2026-10-28' },
  ]).eventCount, 1, 'Sunday week ahead email excludes weekend parkruns');

  let calls = [];
  let existing = [];
  globalThis.fetch = async (url, options = {}) => {
    calls.push({ url, ...options });
    return Response.json(options.method === 'POST' ? { id: 'test-broadcast' } : { data: existing });
  };
  const run = async (instant, campaign = 'week-ahead', auth = 'Bearer test-secret') => {
    globalThis.Date = class extends RealDate {
      constructor(...args) { super(...(args.length ? args : [instant])); }
      static now() { return new RealDate(instant).getTime(); }
    };
    calls = [];
    const request = new Request('https://example.com/api/cron/test', { headers: { authorization: auth } });
    return createNewsletterHandler(campaign)({ request, url: new URL(request.url) });
  };
  await assert.rejects(run('2026-10-25T18:00:00Z', 'week-ahead', 'invalid'), (error) => error.status === 401);
  assert.equal(calls.length, 0);
  for (const instant of ['2026-07-19T17:00:00Z', '2026-10-25T18:00:00Z', '2027-03-28T17:00:00Z']) {
    assert.equal((await (await run(instant)).json()).sent, true, instant);
    const payload = JSON.parse(calls.find((call) => call.method === 'POST').body);
    assert.equal(payload.segment_id, 'test-segment');
    assert.equal(payload.send, true);
    assert.match(payload.name, /Week Ahead/);
  }
  for (const instant of ['2026-07-19T18:00:00Z', '2026-10-25T17:00:00Z', '2027-03-28T18:00:00Z', '2026-10-22T18:00:00Z']) {
    assert.equal((await (await run(instant)).json()).skipped, true, instant);
    assert.equal(calls.length, 0);
  }
  assert.equal((await (await run('2026-10-22T17:00:00Z', 'weekend')).json()).sent, true);
  existing = [{ id: 'already-created', name: email.campaignName }];
  assert.equal((await (await run('2026-10-25T18:00:00Z')).json()).skipped, true);
  assert.equal(calls.some((call) => call.method === 'POST'), false);
  console.log('Newsletter checks passed: dates, content, UK schedules, authorization and duplicate detection.');
} finally {
  globalThis.Date = RealDate;
  globalThis.fetch = realFetch;
  await server.close();
}
