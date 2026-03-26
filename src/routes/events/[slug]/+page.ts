import { error } from '@sveltejs/kit';
import { events } from '$data/events';

export const load = ({ params }) => {
	const event = events.find((item) => item.slug === params.slug);

	if (!event) {
		throw error(404, 'Event not found');
	}

	return { event };
};
