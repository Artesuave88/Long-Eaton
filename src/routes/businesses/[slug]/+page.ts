import { error } from "@sveltejs/kit";
import { businesses } from "$data/businesses";
import { sortedEvents } from "$data/events";
import { getEventsForBusiness } from "$data/listings";

export const load = ({ params }) => {
  const business = businesses.find((item) => item.slug === params.slug);

  if (!business) {
    throw error(404, "Business not found");
  }

  return {
    business,
    events: getEventsForBusiness(sortedEvents, business).slice(0, 6),
  };
};
