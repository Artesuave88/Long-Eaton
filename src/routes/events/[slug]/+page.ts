import { error } from "@sveltejs/kit";
import { sortedEvents } from "$data/events";
import { getUpcomingEvents } from "$data/listings";

export const load = ({ params }) => {
  const event = getUpcomingEvents(sortedEvents).find((item) => item.slug === params.slug);

  if (!event) {
    throw error(404, "Event not found");
  }

  return { event };
};
