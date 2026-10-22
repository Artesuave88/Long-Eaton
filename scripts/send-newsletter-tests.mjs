import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtemp, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const recipient = 'Lovelongeatonwebsite@gmail.com';
const send = process.argv.includes('--send');
// Supply a fresh ID for an intentional resend; reuse it when retrying that send.
const resendId = process.argv.find((arg) => arg.startsWith('--resend-id='))?.slice(12);
if (resendId) assert.match(resendId, /^[a-zA-Z0-9-]{1,80}$/);
const dateArg = process.argv.find((arg) => arg.startsWith('--date='))?.slice(7);
const now = dateArg ? new Date(`${dateArg}T12:00:00Z`) : new Date();
assert.ok(Number.isFinite(now.getTime()), 'Invalid preview date');
const src = fileURLToPath(new URL('../src/lib/', import.meta.url));
const server = await createServer({
  configFile: false,
  resolve: { alias: { $data: `${src}data`, $utils: `${src}utils`, $types: `${src}types` } },
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
  appType: 'custom',
});
let drafts;
try {
  const { buildWeeklyEmail, getNextWeek } = await server.ssrLoadModule('/src/lib/server/weekly-email.ts');
  const sunday = new Date(getNextWeek(now).startDate);
  sunday.setUTCDate(sunday.getUTCDate() - 1);
  drafts = [
    { campaign: 'week-ahead', label: 'SUNDAY', email: buildWeeklyEmail(sunday, 'week-ahead') },
    { campaign: 'weekend', label: 'THURSDAY', email: buildWeeklyEmail(now, 'weekend') },
  ];
} finally {
  await server.close();
}
const messages = drafts.map(({ label, email }) => ({
  from: 'Love Long Eaton <info@midasweb.org>',
  to: [recipient],
  reply_to: recipient,
  subject: `[TEST — ${label}] ${email.subject}`,
  html: email.html.replace(/<a href="\{\{\{RESEND_UNSUBSCRIBE_URL\}\}\}"[^>]*>Unsubscribe<\/a>/g, '<span>Unsubscribe (disabled in this test copy)</span>'),
  text: email.text.replace('Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}', 'Unsubscribe: disabled in this test copy.'),
}));
const previews = await mkdtemp(join(tmpdir(), 'love-long-eaton-newsletter-tests-'));
for (const [index, message] of messages.entries()) {
  assert.deepEqual(message.to, [recipient]);
  assert.ok(!message.html.includes('RESEND_UNSUBSCRIBE_URL'));
  assert.ok(!message.text.includes('RESEND_UNSUBSCRIBE_URL'));
  await writeFile(join(previews, `${drafts[index].campaign}.html`), message.html);
  console.log(`${drafts[index].label}: ${drafts[index].email.weekend.start} to ${drafts[index].email.weekend.end}; ${drafts[index].email.eventCount} events`);
}
console.log(`HTML previews: ${previews}`);
if (!send) process.exit(0);
const apiKey = process.env.RESEND_API_KEY;
assert.ok(apiKey && apiKey !== '[SENSITIVE]', 'RESEND_API_KEY is unavailable');
const digest = createHash('sha256').update(JSON.stringify(messages)).digest('hex').slice(0, 24);
const response = await fetch('https://api.resend.com/emails/batch', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'Idempotency-Key': `newsletter-tests-${digest}${resendId ? `-${resendId}` : ''}`,
  },
  body: JSON.stringify(messages),
});
const result = await response.json();
if (!response.ok) throw new Error(`Resend rejected the test emails: ${result.message ?? response.status}`);
assert.equal(result.data?.length, messages.length, 'Unexpected batch response; inspect before retrying');
const log = drafts.map(({ campaign, email }, index) => ({
  campaign,
  to: recipient,
  subject: messages[index].subject,
  start: email.weekend.start,
  end: email.weekend.end,
  eventCount: email.eventCount,
  resendId: result.data[index].id,
  acceptedAt: new Date().toISOString(),
}));
await writeFile('outreach/newsletter-test-send-log.json', `${JSON.stringify(log, null, 2)}\n`);
console.log(`Resend accepted both newsletter test emails to ${recipient}.`);
