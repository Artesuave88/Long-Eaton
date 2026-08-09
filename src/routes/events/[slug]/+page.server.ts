import { subscribeToNewsletter } from '$lib/server/newsletter';
import type { Actions } from './$types';

export const actions = {
	subscribe: subscribeToNewsletter
} satisfies Actions;
