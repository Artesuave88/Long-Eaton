import { sortedEvents } from '$data/events';
import type { EventItem } from '$types/content';

export const prerender = false;
const weekendDays = new Set(['Friday', 'Saturday', 'Sunday']);

function localToday() {
	const value = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
	return new Date(`${value}T12:00:00Z`);
}
const iso = (date: Date) => date.toISOString().slice(0, 10);

function weekendRange(today = localToday()) {
	const start = new Date(today);
	start.setUTCDate(start.getUTCDate() + (5 - start.getUTCDay()));
	const end = new Date(start);
	end.setUTCDate(start.getUTCDate() + 2);
	return { start, end };
}

function occursThisWeekend(event: EventItem, start: string, end: string) {
	if (event.date) return event.date <= end && (event.endDate ?? event.date) >= start;
	const days = event.daysOfWeek?.length ? event.daysOfWeek : event.dayOfWeek ? [event.dayOfWeek] : [];
	return Boolean(event.ongoing && days.some((day) => weekendDays.has(day)));
}

export const load = () => {
	const range = weekendRange();
	const start = iso(range.start);
	const end = iso(range.end);
	return { start, end, events: sortedEvents.filter((event) => occursThisWeekend(event, start, end)) };
};
