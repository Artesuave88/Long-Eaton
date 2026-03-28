import type { BusinessItem, EventItem } from "$types/content";
import { slugMatches } from "$utils/format";
import { matchesBusinessBrowseGroup } from "$data/businesses";

export const ALL_CATEGORIES = "All";
const UNKNOWN_DATE_SORT_VALUE = Number.MAX_SAFE_INTEGER;

export function getEventSortValue(
  event: Pick<EventItem, "date" | "dateLabel">,
) {
  if (event.date) {
    return new Date(event.date).getTime();
  }

  if (event.dateLabel?.includes("October 2026")) {
    return new Date("2026-10-01").getTime();
  }

  return UNKNOWN_DATE_SORT_VALUE;
}

export function sortEvents(events: EventItem[]) {
  return [...events].sort(
    (left, right) => getEventSortValue(left) - getEventSortValue(right),
  );
}

export function getCategories<T extends { category: string }>(items: T[]) {
  return [ALL_CATEGORIES, ...new Set(items.map((item) => item.category))];
}

export function filterEvents(
  events: EventItem[],
  filters: { query?: string; category?: string } = {},
) {
  const { query = "", category = ALL_CATEGORIES } = filters;

  return events.filter((event) => {
    const matchesQuery =
      slugMatches(event.title, query) ||
      slugMatches(event.excerpt, query) ||
      slugMatches(event.location, query);
    const matchesCategory =
      category === ALL_CATEGORIES || event.category === category;

    return matchesQuery && matchesCategory;
  });
}

export function isUpcomingEvent(
  event: Pick<EventItem, "date" | "endDate">,
  today = new Date(),
) {
  if (!event.date) {
    return false;
  }

  const comparisonDate = new Date(today);
  comparisonDate.setHours(0, 0, 0, 0);

  const eventDate = new Date(event.endDate ?? event.date);
  eventDate.setHours(0, 0, 0, 0);

  return eventDate >= comparisonDate;
}

export function getUpcomingEvents(events: EventItem[], today = new Date()) {
  return events.filter((event) => isUpcomingEvent(event, today));
}

export function getHomepageEventSelection(events: EventItem[]) {
  const upcomingEvents = getUpcomingEvents(events);
  const featuredEvents = upcomingEvents.filter((event) => event.featured);
  const heroEvents = (
    featuredEvents.length ? featuredEvents : upcomingEvents
  ).slice(0, 5);
  const featuredEvent = featuredEvents[0] ?? upcomingEvents[0];

  return {
    featuredEvent,
    heroEvents,
    upcomingEvents,
  };
}

export function filterBusinesses(
  businesses: BusinessItem[],
  filters: {
    category?: string;
    group?: string | null;
    letter?: string;
    query?: string;
  } = {},
) {
  const {
    category = ALL_CATEGORIES,
    group = null,
    letter = "",
    query = "",
  } = filters;

  return businesses.filter((business) => {
    const matchesQuery =
      slugMatches(business.name, query) ||
      slugMatches(business.description, query) ||
      slugMatches(business.location, query);
    const matchesCategory =
      category === ALL_CATEGORIES || business.category === category;
    const matchesGroup = matchesBusinessBrowseGroup(business, group);
    const matchesLetter =
      !letter ||
      business.name.trim().toUpperCase().startsWith(letter.toUpperCase());

    return matchesQuery && matchesCategory && matchesGroup && matchesLetter;
  });
}

export function getFeaturedBusiness(businesses: BusinessItem[]) {
  return businesses.find((business) => business.featured) ?? businesses[0];
}
