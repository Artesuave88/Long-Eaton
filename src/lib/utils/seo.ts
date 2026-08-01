import { site } from '$data/site';
import type { EventItem } from '$types/content';

function toIsoDateTime(date: string, time?: string) {
	if (!time) return date;
	const match = time.match(/^(\d{1,2}):(\d{2})/);
	return match ? `${date}T${match[1].padStart(2, '0')}:${match[2]}:00` : date;
}

export function eventJsonLd(event: EventItem) {
	if (!event.date || event.ongoing || event.recurrence) return null;
	const data: Record<string, unknown> = {
		'@context': 'https://schema.org', '@type': 'Event', name: event.title,
		startDate: toIsoDateTime(event.date, event.startTime ?? event.time),
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		description: event.description.join(' ') || event.excerpt,
		url: `${site.url}/events/${event.slug}`
	};
	if (event.endDate) data.endDate = toIsoDateTime(event.endDate, event.endTime);
	else if (event.endTime) data.endDate = toIsoDateTime(event.date, event.endTime);
	if (event.location) data.location = {
		'@type': 'Place', name: event.location.split(',')[0],
		address: { '@type': 'PostalAddress', streetAddress: event.location, addressLocality: 'Long Eaton', addressRegion: 'Derbyshire', addressCountry: 'GB' }
	};
	if (event.imageSrc) data.image = [`${site.url}${event.imageSrc}`];
	if (event.organiser) data.organizer = { '@type': 'Organization', name: event.organiser };
	return JSON.stringify(data).replace(/</g, '\\u003c');
}
