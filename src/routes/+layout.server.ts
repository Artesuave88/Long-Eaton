import { env } from '$env/dynamic/private';

export const load = () => ({ googleSiteVerification: env.GOOGLE_SITE_VERIFICATION ?? '' });
