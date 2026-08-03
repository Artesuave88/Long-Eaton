import { sortedEvents } from "$data/events";
import { site } from "$data/site";
import type { EventItem } from "$types/content";

const londonDate = (date: Date) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const weekendDays = new Set(["Friday", "Saturday", "Sunday"]);

function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

export function getNextWeekend(now = new Date()) {
  const today = new Date(`${londonDate(now)}T12:00:00Z`);
  const daysUntilFriday = (5 - today.getUTCDay() + 7) % 7;
  const startDate = addDays(today, daysUntilFriday);
  const endDate = addDays(startDate, 2);

  return {
    start: londonDate(startDate),
    end: londonDate(endDate),
    startDate,
    endDate,
  };
}

function occursDuringWeekend(event: EventItem, start: string, end: string) {
  if (event.date) {
    return event.date <= end && (event.endDate ?? event.date) >= start;
  }

  const days = event.daysOfWeek?.length
    ? event.daysOfWeek
    : event.dayOfWeek
      ? [event.dayOfWeek]
      : [];

  return Boolean(event.ongoing && days.some((day) => weekendDays.has(day)));
}

function eventDate(event: EventItem, startDate: Date) {
  if (event.date) return new Date(`${event.date}T12:00:00Z`);

  const dayIndex: Record<string, number> = {
    Friday: 5,
    Saturday: 6,
    Sunday: 0,
  };
  const day = event.dayOfWeek ?? event.daysOfWeek?.[0] ?? "Friday";
  return addDays(startDate, (dayIndex[day] - 5 + 7) % 7);
}

function displayDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/London",
  }).format(date);
}

function rangeLabel(start: Date, end: Date) {
  const startDay = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    timeZone: "Europe/London",
  }).format(start);
  const endLabel = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/London",
  }).format(end);
  return `${startDay}–${endLabel}`;
}

function absoluteImage(source?: string) {
  if (!source) return null;
  if (source.startsWith("http://") || source.startsWith("https://")) return source;
  return `${site.url}${source.startsWith("/") ? source : `/${source}`}`;
}

function eventCard(event: EventItem, startDate: Date, featured: boolean) {
  const url = `${site.url}/events/${event.slug}`;
  const image = absoluteImage(event.imageSrc);
  const date = displayDate(eventDate(event, startDate));
  const details = [date, event.time, event.location, event.price].filter(
    (value): value is string => Boolean(value),
  );
  const headingSize = featured ? 25 : 23;

  return `
    <div style="padding:26px 28px">
      ${image ? `<a href="${url}"><img src="${escapeHtml(image)}" width="564" alt="${escapeHtml(event.imageAlt ?? event.title)}" style="display:block;width:100%;max-width:564px;height:auto;border:0;border-radius:10px"></a>` : ""}
      ${featured ? '<p style="margin:18px 0 5px;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#238bc1">Weekend highlight</p>' : ""}
      <h2 style="margin:${image && !featured ? "18px" : "0"} 0 7px;font-size:${headingSize}px;line-height:1.25;color:#102d55">${escapeHtml(event.title)}</h2>
      <p style="color:#526477;margin:0 0 12px;line-height:1.5"><strong>${details.map(escapeHtml).join(" · ")}</strong></p>
      <p style="line-height:1.6;margin:0 0 18px;color:#263c52">${escapeHtml(event.excerpt)}</p>
      <a href="${url}" style="${featured ? "display:inline-block;background:#ed6c4d;color:#ffffff;text-decoration:none;padding:12px 19px;border-radius:7px;" : "color:#d85237;"}font-weight:bold">See event details${featured ? "" : " →"}</a>
    </div>`;
}

export function buildWeeklyEmail(now = new Date()) {
  const weekend = getNextWeekend(now);
  const events = sortedEvents
    .filter((event) => occursDuringWeekend(event, weekend.start, weekend.end))
    .sort((left, right) => {
      if (left.featured !== right.featured) return left.featured ? -1 : 1;
      return eventDate(left, weekend.startDate).getTime() - eventDate(right, weekend.startDate).getTime();
    })
    .slice(0, 8);
  const dates = rangeLabel(weekend.startDate, weekend.endDate);
  const campaignName = `Automated Love Long Eaton Weekend — ${weekend.start}–${weekend.end}`;
  const cards = events.length
    ? events.map((event, index) => eventCard(event, weekend.startDate, index === 0)).join('<div style="height:8px;background:#eef6fb"></div>')
    : '<div style="padding:28px"><p style="font-size:17px;line-height:1.6">There are no featured listings yet, but you can check the website for the latest additions.</p></div>';
  const subjects = events.slice(0, 2).map((event) => event.title);
  const subject = subjects.length
    ? `This weekend in Long Eaton: ${subjects.join(" & ")}`
    : "What’s on this weekend in Long Eaton";

  const html = `<!-- ${campaignName} --><div style="margin:0;background:#eef6fb;padding:24px 10px;font-family:Arial,Helvetica,sans-serif;color:#102d55"><div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(16,45,85,.10)"><div style="padding:20px 28px 14px;text-align:center;background:#ffffff"><a href="${site.url}"><img src="${site.url}/le-logo.png" width="360" alt="We Love Long Eaton" style="display:block;width:100%;max-width:360px;height:auto;margin:0 auto;border:0"></a></div><div style="background:#102d55;color:#ffffff;padding:24px 28px;text-align:center"><p style="margin:0 0 7px;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;color:#63c7f3">Your local weekend guide</p><h1 style="margin:0;font-size:30px;line-height:1.18">What’s on this weekend</h1><p style="margin:10px 0 0;font-size:17px">${dates}</p></div>${cards}<div style="padding:28px;background:#102d55;text-align:center;color:#ffffff"><h2 style="margin:0 0 8px;font-size:22px;color:#ffffff">There’s more to discover</h2><p style="margin:0 0 18px;color:#dcebf7;line-height:1.5">Browse the complete weekend guide on Love Long Eaton.</p><a href="${site.url}/whats-on-this-weekend" style="display:inline-block;background:#63c7f3;color:#102d55;text-decoration:none;font-weight:bold;padding:13px 20px;border-radius:7px">See everything happening</a></div><div style="padding:22px 28px;background:#f5f8fa;text-align:center"><p style="font-size:12px;color:#647486;line-height:1.5;margin:0 0 10px">Event details can change, so please check with the organiser before travelling.</p><p style="font-size:12px;color:#647486;line-height:1.5;margin:0">You’re receiving this because you subscribed to Love Long Eaton’s weekend email.<br><a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#526477;text-decoration:underline">Unsubscribe</a></p></div></div></div>`;

  const text = [
    `LOVE LONG EATON — WHAT'S ON THIS WEEKEND`,
    dates,
    "",
    ...events.flatMap((event) => [
      event.title.toUpperCase(),
      [displayDate(eventDate(event, weekend.startDate)), event.time, event.location, event.price].filter(Boolean).join(" · "),
      event.excerpt,
      `${site.url}/events/${event.slug}`,
      "",
    ]),
    `Full list: ${site.url}/whats-on-this-weekend`,
    "",
    "Event details can change, so please check with the organiser before travelling.",
    "Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}",
  ].join("\n");

  return {
    campaignName,
    subject,
    previewText: events.length
      ? `${events.length} local pick${events.length === 1 ? "" : "s"} for ${dates}.`
      : `Your local weekend guide for ${dates}.`,
    html,
    text,
    eventCount: events.length,
    weekend,
  };
}
