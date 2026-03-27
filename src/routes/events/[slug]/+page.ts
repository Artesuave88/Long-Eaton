import { error } from "@sveltejs/kit";
import { sortedEvents } from "$data/events";

export const load = ({ params }) => {
  const event = sortedEvents.find((item) => item.slug === params.slug);

  if (!event) {
    throw error(404, "Event not found");
  }

  return { event };
};
