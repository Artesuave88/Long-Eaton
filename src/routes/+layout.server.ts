import { env } from '$env/dynamic/private';

export const load = ({ setHeaders }) => {
  setHeaders({ "cache-control": "no-cache, must-revalidate" });
  return { googleSiteVerification: env.GOOGLE_SITE_VERIFICATION ?? "" };
};
