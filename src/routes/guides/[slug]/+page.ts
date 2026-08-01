import { error } from "@sveltejs/kit";
import { guides } from "$data/guides";
import { upcomingEvents } from "$data/events";
import { businesses } from "$data/businesses";
import { getEventsForBusiness } from "$data/listings";
import { getEventsForSeason } from "$utils/seasons";

export const load = ({ params }) => {
  const guide = guides.find((item) => item.slug === params.slug);
  if (!guide) throw error(404, "Guide not found");
  const events = "season" in guide
    ? getEventsForSeason(upcomingEvents, guide.season).slice(0, 9)
    : [
        ...new Map(
          guide.sections
            .map((section) => /^\/businesses\/([^/]+)$/.exec(section.href)?.[1])
            .filter((slug) => slug !== undefined)
            .map((slug) => businesses.find((business) => business.slug === slug))
            .filter((business) => business !== undefined)
            .flatMap((business) => getEventsForBusiness(upcomingEvents, business))
            .map((event) => [event.id, event]),
        ).values(),
      ].slice(0, 9);
  const relatedGuides = "relatedSlugs" in guide
    ? guide.relatedSlugs
        .map((slug) => guides.find((item) => item.slug === slug))
        .filter((item) => item !== undefined)
    : [];
  return { guide, events, relatedGuides };
};
