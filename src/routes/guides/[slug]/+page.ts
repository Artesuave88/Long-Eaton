import { error } from '@sveltejs/kit';
import { seasonalGuides } from '$data/guides';
import { upcomingEvents } from '$data/events';

export const load = ({ params }) => {
	const guide = seasonalGuides.find((item) => item.slug === params.slug);
	if (!guide) throw error(404, 'Guide not found');
	const events = upcomingEvents.filter((event) => event.date && guide.months.includes(Number(event.date.slice(5, 7)))).slice(0, 9);
	return { guide, events };
};
