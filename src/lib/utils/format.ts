import type { EventItem } from "$types/content";

export const formatDisplayDate = (value: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));

export const formatEventDate = (
  event: Pick<EventItem, "date" | "dateLabel" | "isTbc">,
) => {
  if (event.date) {
    return formatDisplayDate(event.date);
  }

  if (event.dateLabel) {
    return event.isTbc ? `${event.dateLabel} (TBC)` : event.dateLabel;
  }

  return "Date to be confirmed";
};

export const slugMatches = (value: string, query: string) =>
  value.toLowerCase().includes(query.trim().toLowerCase());
