import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';
import Stripe from 'stripe';
import type { Actions } from './$types';

export const prerender = false;

export const actions = {
	checkout: async ({ request, url }) => {
		if (!env.STRIPE_SECRET_KEY) {
			return fail(503, {
				message: 'Donations are temporarily unavailable. Please try again later.'
			});
		}

		const formData = await request.formData();
		const amount = Number(formData.get('amount'));
		const amountInPence = Math.round(amount * 100);

		if (!Number.isFinite(amount) || amountInPence < 100 || amountInPence > 1_000_000) {
			return fail(400, { message: 'Please enter a donation between £1 and £10,000.' });
		}

		const stripe = new Stripe(env.STRIPE_SECRET_KEY);
		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			line_items: [
				{
					price_data: {
						currency: 'gbp',
						product_data: { name: 'Donation to Love Long Eaton' },
						unit_amount: amountInPence
					},
					quantity: 1
				}
			],
			payment_intent_data: {
				description: 'Donation to Love Long Eaton',
				metadata: { source: 'love-long-eaton-website' }
			},
			success_url: `${url.origin}/donate/thank-you?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${url.origin}/donate?cancelled=1`
		});

		if (!session.url) {
			return fail(502, { message: 'Stripe could not start checkout. Please try again.' });
		}

		redirect(303, session.url);
	}
} satisfies Actions;
