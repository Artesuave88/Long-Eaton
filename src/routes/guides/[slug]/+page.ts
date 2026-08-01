import { error } from "@sveltejs/kit";
import { seasonalGuides } from "$data/guides";
import { upcomingEvents } from "$data/events";
import { getEventsForSeason } from "$utils/seasons";

export const load = ({ params }) => {
  const guide = seasonalGuides.find((item) => item.slug === params.slug);
  if (!guide) throw error(404, "Guide not found");
  const events = getEventsForSeason(upcomingEvents, guide.season).slice(0, 9);
  return { guide, events };
};
