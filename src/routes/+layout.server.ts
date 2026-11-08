import { env } from '$env/dynamic/private';
import { sortedEvents } from '$data/events';
import { businesses } from '$data/businesses';
import { getHomepageEventSelection, getUpcomingEvents, isRegularEvent } from '$data/listings';
import { getNewsSections } from '$data/news';

export const load = ({ setHeaders, url }) => {
  setHeaders({ "cache-control": "no-cache, must-revalidate" });
  const upcoming = getUpcomingEvents(sortedEvents).filter(event => !isRegularEvent(event));
  const { latest, archived } = getNewsSections();
  const pageImages: Record<string, { imageSrc?: string; imageAlt?: string } | undefined> = {
    '/': getHomepageEventSelection(sortedEvents).heroEvents[0],
    '/events': upcoming.find(event => event.imageSrc),
    '/things-to-do': upcoming.find(event => event.imageSrc),
    '/businesses': businesses.find(business => business.imageSrc),
    '/news': latest.find(article => article.imageSrc),
    '/news/archive': archived.find(article => article.imageSrc),
    '/about': { imageSrc: '/band-camp.jpg', imageAlt: 'Community music in Long Eaton' },
    '/guides': { imageSrc: '/west-park.jpg', imageAlt: 'West Park in Long Eaton' },
    '/discover': { imageSrc: '/west-park.jpg', imageAlt: 'West Park in Long Eaton' },
    '/discover-long-eaton': { imageSrc: '/west-park.jpg', imageAlt: 'West Park in Long Eaton' }
  };
  return {
    googleSiteVerification: env.GOOGLE_SITE_VERIFICATION ?? "",
    pageImage: pageImages[url.pathname] ?? null
  };
};
