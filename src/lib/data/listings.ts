import type { BusinessItem, DiscoverPlace, EventItem } from "$types/content";
import { slugMatches } from "$utils/format";
import { matchesBusinessBrowseGroup } from "$data/businesses";

export const ALL_CATEGORIES = "All";
const UNKNOWN_DATE_SORT_VALUE = Number.MAX_SAFE_INTEGER;
const DAY_INDEX: Record<NonNullable<EventItem["dayOfWeek"]>, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

function getLondonCalendarDate(value: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(value);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((item) => item.type === type)?.value ?? "";

  return `${part("year")}-${part("month")}-${part("day")}`;
}

function getRecurringDays(event: Pick<EventItem, "dayOfWeek" | "daysOfWeek">) {
  if (event.daysOfWeek?.length) {
    return event.daysOfWeek;
  }

  return event.dayOfWeek ? [event.dayOfWeek] : [];
}

function getNextRecurringDate(
  event: Pick<EventItem, "recurrence" | "dayOfWeek" | "daysOfWeek">,
  today = new Date(),
) {
  if (!event.recurrence) {
    return null;
  }

  const comparisonDate = new Date(`${getLondonCalendarDate(today)}T12:00:00Z`);

  const recurringDays = getRecurringDays(event);

  if (!recurringDays.length) {
    return null;
  }

  const nextDate = recurringDays
    .map((day) => {
      const targetDay = DAY_INDEX[day];
      const currentDay = comparisonDate.getUTCDay();
      const daysUntilNext = (targetDay - currentDay + 7) % 7;
      const candidate = new Date(comparisonDate);
      candidate.setUTCDate(comparisonDate.getUTCDate() + daysUntilNext);
      return candidate;
    })
    .sort((left, right) => left.getTime() - right.getTime())[0];

  return nextDate ?? null;
}

export function getEventSortValue(
  event: Pick<
    EventItem,
    | "date"
    | "dateLabel"
    | "recurrence"
    | "dayOfWeek"
    | "daysOfWeek"
    | "ongoing"
  >,
  today = new Date(),
) {
  if (event.date) {
    return new Date(event.date).getTime();
  }

  const recurringDate = getNextRecurringDate(event, today);

  if (recurringDate) {
    return recurringDate.getTime();
  }

  if (event.ongoing) {
    const comparisonDate = new Date(`${getLondonCalendarDate(today)}T12:00:00Z`);
    return comparisonDate.getTime();
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
  const categories = new Set(
    items.flatMap((item) => getCategoryFacets(item.category)),
  );

  return [
    ALL_CATEGORIES,
    ...[...categories].sort((left, right) => left.localeCompare(right)),
  ];
}

function getCategoryFacets(category: string) {
  return category
    .split("/")
    .map((facet) => facet.trim())
    .filter(Boolean);
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
      slugMatches(event.location ?? "", query);
    const matchesCategory =
      category === ALL_CATEGORIES ||
      getCategoryFacets(event.category).includes(category);

    return matchesQuery && matchesCategory;
  });
}

export function isUpcomingEvent(
  event: Pick<
    EventItem,
    "date" | "endDate" | "recurrence" | "dayOfWeek" | "daysOfWeek" | "ongoing"
  >,
  today = new Date(),
) {
  if (event.ongoing || getNextRecurringDate(event, today)) {
    return true;
  }

  if (!event.date) {
    return false;
  }

  const londonDate = getLondonCalendarDate(today);

  return (event.endDate ?? event.date).slice(0, 10) >= londonDate;
}

export function getUpcomingEvents(events: EventItem[], today = new Date()) {
  return events.filter((event) => isUpcomingEvent(event, today));
}

export function isRepeatedEventText(text: string | undefined, title: string) {
  const normalise = (value: string) =>
    value.toLocaleLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

  return Boolean(text && normalise(text) === normalise(title));
}

function includesName(value: string | undefined, name: string) {
  return value?.toLocaleLowerCase().includes(name.toLocaleLowerCase()) ?? false;
}

export function getEventsForBusiness(
  events: EventItem[],
  business: Pick<BusinessItem, "name">,
) {
  return getUpcomingEvents(events).filter(
    (event) =>
      includesName(event.organiser, business.name) ||
      includesName(event.location, business.name),
  );
}

export function getEventsForPlace(
  events: EventItem[],
  place: Pick<DiscoverPlace, "title">,
) {
  return getUpcomingEvents(events).filter(
    (event) =>
      includesName(event.location, place.title) ||
      event.tags?.some(
        (tag) => tag.toLocaleLowerCase() === place.title.toLocaleLowerCase(),
      ),
  );
}

export function getEventsForTopics(events: EventItem[], topics: string[]) {
  const normalisedTopics = topics.map((topic) => topic.toLocaleLowerCase());

  return getUpcomingEvents(events).filter((event) => {
    const searchable = [
      event.title,
      event.category,
      event.excerpt,
      ...(event.tags ?? []),
    ].join(" ").toLocaleLowerCase();

    return normalisedTopics.some((topic) => searchable.includes(topic));
  });
}

export function isRegularEvent(
  event: Pick<EventItem, "recurrence" | "ongoing" | "dayOfWeek" | "daysOfWeek">,
) {
  return Boolean(event.ongoing || getRecurringDays(event).length || event.recurrence);
}

export function getRegularEvents(events: EventItem[]) {
  return events.filter((event) => isRegularEvent(event));
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
