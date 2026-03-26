import { error } from "@sveltejs/kit";
import { e as events } from "../../../../chunks/events.js";
const load = ({ params }) => {
  const event = events.find((item) => item.slug === params.slug);
  if (!event) {
    throw error(404, "Event not found");
  }
  return { event };
};
export {
  load
};
