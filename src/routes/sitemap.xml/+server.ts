import { businesses } from '$data/businesses';
import { sortedEvents } from '$data/events';
import { getUpcomingEvents } from '$data/listings';
import { guides } from '$data/guides';
import { site } from '$data/site';

export const prerender = true;
const fixed = [
	'',
	'/things-to-do',
	'/events',
	'/whats-on-this-weekend',
	'/businesses',
	'/discover-long-eaton',
	'/guides',
	'/jobs',
	'/news',
	'/about',
	'/contact',
	'/donate'
];
const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;');

export const GET = () => {
	const paths = [...fixed, ...getUpcomingEvents(sortedEvents).map((event) => `/events/${event.slug}`), ...businesses.map((business) => `/businesses/${business.slug}`), ...guides.map((guide) => `/guides/${guide.slug}`)];
	const urls = [...new Set(paths)].map((path) => `  <url><loc>${escapeXml(`${site.url}${path}`)}</loc></url>`).join('\n');
	return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, { headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'no-cache, must-revalidate' } });
};
