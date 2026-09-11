import { error, redirect } from "@sveltejs/kit";
import { guides, type SearchGuide } from "$data/guides";
import { sortedEvents } from "$data/events";
import { businesses } from "$data/businesses";
import { getEventsForTopics, getUpcomingEvents } from "$data/listings";

export const load = ({ params }) => {
  const guide = guides.find((item) => item.slug === params.slug);
  if (!guide) throw error(404, "Guide not found");
  if ("season" in guide) throw redirect(308, `/guides#${guide.season}`);
  const upcomingEvents = getUpcomingEvents(sortedEvents);
  const matchingEventsForGuide = getEventsForTopics(upcomingEvents, guide.eventTopics);
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
        .filter((item): item is SearchGuide => item !== undefined && !("season" in item))
    : [];
  return { guide, events, hasMoreEvents: matchingEvents.length > events.length, businesses: guideBusinesses, relatedGuides };
};
