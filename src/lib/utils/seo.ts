import { site } from '$data/site';
import type { EventItem } from '$types/content';

function toIsoDateTime(date: string, time?: string) {
	if (!time) return date;
	const match = time.match(/^(\d{1,2}):(\d{2})/);
	return match ? `${date}T${match[1].padStart(2, '0')}:${match[2]}:00` : date;
}

function getOfferPrice(price?: string) {
	if (!price) return null;
	const amount = price.match(/£\s*(\d+(?:\.\d{1,2})?)/)?.[1];
	if (amount) return amount;
	return /^free(?:\s|$)/i.test(price.trim()) ? '0' : null;
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
	data.endDate = toIsoDateTime(event.endDate ?? event.date, event.endTime);
	if (event.location) data.location = {
		'@type': 'Place', name: event.location.split(',')[0],
		address: { '@type': 'PostalAddress', streetAddress: event.location, addressLocality: 'Long Eaton', addressRegion: 'Derbyshire', addressCountry: 'GB' }
	};
	if (event.imageSrc) data.image = [`${site.url}${event.imageSrc}`];
	if (event.organiser) data.organizer = {
		'@type': 'Organization',
		name: event.organiser,
		url: event.organiserUrl ?? event.sourceUrl ?? `${site.url}/events/${event.slug}`
	};
	const offerPrice = getOfferPrice(event.price);
	if (offerPrice !== null) data.offers = {
		'@type': 'Offer',
		price: offerPrice,
		priceCurrency: 'GBP',
		url: event.ticketUrl ?? `${site.url}/events/${event.slug}`,
		availability: 'https://schema.org/InStock'
	};
	if (event.performer) {
		const performers = Array.isArray(event.performer) ? event.performer : [event.performer];
		data.performer = performers.map((name) => ({ '@type': 'PerformingGroup', name }));
	}
	return JSON.stringify(data).replace(/</g, '\\u003c');
}
