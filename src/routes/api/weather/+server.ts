import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const CACHE_SECONDS = 30 * 60;
const LONG_EATON = '52.8986,-1.2711';

export const GET: RequestHandler = async ({ fetch }) => {
	const apiKey = env.WEATHERAPI_KEY;

	if (!apiKey) {
		return json({ available: false }, { status: 503 });
	}

	try {
		const url = new URL('https://api.weatherapi.com/v1/current.json');
		url.searchParams.set('key', apiKey);
		url.searchParams.set('q', LONG_EATON);
		url.searchParams.set('aqi', 'no');

		const response = await fetch(url);
		if (!response.ok) {
			return json({ available: false }, { status: 502 });
		}

		const weather = await response.json();
		const condition = weather?.current?.condition;

		if (typeof weather?.current?.temp_c !== 'number' || typeof condition?.text !== 'string') {
			return json({ available: false }, { status: 502 });
		}

		return json(
			{
				available: true,
				temperature: Math.round(weather.current.temp_c),
				condition: condition.text,
				icon: typeof condition.icon === 'string' ? `https:${condition.icon}` : null,
				updatedAt: weather.current.last_updated_epoch
			},
			{
				headers: {
					'cache-control': `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`
				}
			}
		);
	} catch {
		return json({ available: false }, { status: 502 });
	}
};
