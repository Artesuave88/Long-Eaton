import { site } from '$data/site';
import type { EventItem } from '$types/content';
import type { BusinessItem } from '$types/content';

const safeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

export function websiteJsonLd() {
	return safeJsonLd({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${site.url}/#organization`,
				name: site.name,
				url: site.url,
				logo: { '@type': 'ImageObject', url: `${site.url}/le-logo.png` },
				description: site.tagline
			},
			{
				'@type': 'WebSite',
				'@id': `${site.url}/#website`,
				url: site.url,
				name: site.name,
				description: site.tagline,
				publisher: { '@id': `${site.url}/#organization` },
				inLanguage: 'en-GB'
			}
		]
	});
}

export function businessJsonLd(business: BusinessItem) {
	return safeJsonLd({
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: business.name,
		description: business.description,
		url: `${site.url}/businesses/${business.slug}`,
		...(business.website || business.instagram
			? { sameAs: [business.website, business.instagram].filter(Boolean) }
			: {}),
		...(business.imageSrc
			? { image: business.imageSrc.startsWith('http') ? business.imageSrc : `${site.url}${business.imageSrc}` }
			: {}),
		address: {
			'@type': 'PostalAddress',
			streetAddress: business.location,
			addressLocality: 'Long Eaton',
			addressRegion: 'Derbyshire',
			addressCountry: 'GB'
		}
	});
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
	return safeJsonLd({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: `${site.url}${item.path}`
		}))
	});
}

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

export function eventJsonLd(event: EventItem, isPast = false) {
	if (!event.date || event.ongoing || event.recurrence) return null;
	const data: Record<string, unknown> = {
		'@context': 'https://schema.org', '@type': 'Event', name: event.heading ?? event.title,
		startDate: toIsoDateTime(event.date, event.startTime ?? event.time),
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		description: event.metaDescription ?? (event.description.join(' ') || event.excerpt),
		url: `${site.url}/events/${event.slug}`
	};
	data.endDate = toIsoDateTime(event.endDate ?? event.date, event.endTime);
	if (event.location) data.location = {
		'@type': 'Place', name: event.location.split(',')[0],
		address: { '@type': 'PostalAddress', streetAddress: event.location, addressLocality: 'Long Eaton', addressRegion: 'Derbyshire', addressCountry: 'GB' }
	};
	if (event.imageSrc) data.image = [event.imageSrc.startsWith('http') ? event.imageSrc : `${site.url}${event.imageSrc}`];
	if (event.organiser) data.organizer = {
		'@type': 'Organization',
		name: event.organiser,
		url: event.organiserUrl ?? event.sourceUrl ?? `${site.url}/events/${event.slug}`
	};
	const offerPrice = getOfferPrice(event.price);
	if (!isPast && offerPrice !== null) data.offers = {
		'@type': 'Offer',
		price: offerPrice,
		priceCurrency: 'GBP',
		url: event.ticketUrl ?? `${site.url}/events/${event.slug}`,
		availability: 'https://schema.org/InStock',
		...(event.offerValidFrom ? { validFrom: event.offerValidFrom } : {})
	};
	if (event.performer) {
		const performers = Array.isArray(event.performer) ? event.performer : [event.performer];
		data.performer = performers.map((name) => ({ '@type': 'PerformingGroup', name }));
	}
	return safeJsonLd(data);
}
