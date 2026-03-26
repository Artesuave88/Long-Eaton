import { error } from '@sveltejs/kit';
import { businesses } from '$data/businesses';

export const load = ({ params }) => {
	const business = businesses.find((item) => item.slug === params.slug);

	if (!business) {
		throw error(404, 'Business not found');
	}

	return { business };
};
