import { createNewsletterHandler } from "$lib/server/newsletter-campaign";

export const prerender = false;
export const GET = createNewsletterHandler("week-ahead");
