import { error, redirect } from "@sveltejs/kit";
import { sortedEvents } from "$data/events";
import { getUpcomingEvents } from "$data/listings";

export const load = ({ params }) => {
  const event = sortedEvents.find(
    (item) =>
      item.slug === params.slug &&
      (item.retainAfterEvent || getUpcomingEvents([item]).length > 0),
  );

  if (!event) {
    throw error(404, "Event not found");
  }

  if (event.listingOnly) {
    throw redirect(308, "/businesses/duchess-theatre-chatsworth-arts-centre#events");
  }

  const eventEnd = event.date
    ? new Date(`${event.endDate ?? event.date}T${event.endTime ?? "23:59"}:59`)
    : null;
  const isPast = Boolean(eventEnd && eventEnd.getTime() < Date.now());

  return { event, isPast };
};
