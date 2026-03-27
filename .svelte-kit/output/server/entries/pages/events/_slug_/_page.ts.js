import { error } from "@sveltejs/kit";
import { s as sortedEvents } from "../../../../chunks/events.js";
const load = ({ params }) => {
  const event = sortedEvents.find((item) => item.slug === params.slug);
  if (!event) {
    throw error(404, "Event not found");
  }
  return { event };
};
export {
  load
};
