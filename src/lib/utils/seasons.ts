import { isUpcomingEvent, sortEvents } from "$data/listings";
import type { EventItem } from "$types/content";

export type Season = "spring" | "summer" | "autumn" | "winter";

export const seasonMonths: Record<Season, readonly number[]> = {
  spring: [3, 4, 5],
  summer: [6, 7, 8],
  autumn: [9, 10, 11],
  winter: [12, 1, 2],
};

export function getSeasonFromDate(date: Date): Season {
  const month = date.getMonth() + 1;

  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}

function getEventStartMonth(event: Pick<EventItem, "date">): number | null {
  if (!event.date) return null;

  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(event.date);
  if (!match) return null;

  const month = Number(match[2]);
  return month >= 1 && month <= 12 ? month : null;
}

export function getEventsForSeason(
  events: EventItem[],
  season: Season,
): EventItem[] {
  const months = seasonMonths[season];

  return sortEvents(
    events.filter((event) => {
      const month = getEventStartMonth(event);
      return month !== null && months.includes(month);
    }),
  );
}

export function getCurrentSeasonEvents(
  events: EventItem[],
  now = new Date(),
): EventItem[] {
  return getEventsForSeason(
    events.filter((event) => isUpcomingEvent(event, now)),
    getSeasonFromDate(now),
  );
}
