import { error } from "@sveltejs/kit";
import { guides } from "$data/guides";
import { sortedEvents } from "$data/events";
import { businesses } from "$data/businesses";
import { getEventsForTopics, getUpcomingEvents } from "$data/listings";
import { getEventsForSeason } from "$utils/seasons";

export const load = ({ params }) => {
  const guide = guides.find((item) => item.slug === params.slug);
  if (!guide) throw error(404, "Guide not found");
  const upcomingEvents = getUpcomingEvents(sortedEvents);
  const matchingEventsForGuide = "season" in guide
    ? getEventsForSeason(upcomingEvents, guide.season)
    : getEventsForTopics(upcomingEvents, guide.eventTopics);
  const featuredEventSlugs = new Set(
    guide.sections
      .map((section) => /^\/events\/([^/]+)$/.exec(section.href ?? "")?.[1])
      .filter((slug) => slug !== undefined),
  );
  const matchingEvents = matchingEventsForGuide.filter(
    (event) => !featuredEventSlugs.has(event.slug),
  );
  const events = matchingEvents.slice(0, 3);
  const guideBusinesses = "eventTopics" in guide
    ? guide.sections
        .map((section) => /^\/businesses\/([^/]+)$/.exec(section.href)?.[1])
        .map((slug) => businesses.find((business) => business.slug === slug))
        .filter((business) => business !== undefined)
    : [];
  const relatedGuides = "relatedSlugs" in guide
    ? guide.relatedSlugs
        .map((slug) => guides.find((item) => item.slug === slug))
        .filter((item) => item !== undefined)
    : [];
  return { guide, events, hasMoreEvents: matchingEvents.length > events.length, businesses: guideBusinesses, relatedGuides };
};
