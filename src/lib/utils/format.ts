import type { EventItem } from "$types/content";

export const formatDisplayDate = (value: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));

const isSameMonthAndYear = (start: Date, end: Date) =>
  start.getMonth() === end.getMonth() &&
  start.getFullYear() === end.getFullYear();

const isSameYear = (start: Date, end: Date) =>
  start.getFullYear() === end.getFullYear();

function joinDays(days: string[]) {
  if (days.length === 1) {
    return days[0];
  }

  if (days.length === 2) {
    return `${days[0]} and ${days[1]}`;
  }

  return `${days.slice(0, -1).join(", ")} and ${days.at(-1)}`;
}

export const formatRecurringLabel = (
  event: Pick<
    EventItem,
    "dayOfWeek" | "daysOfWeek" | "recurrence" | "recurrenceLabel"
  >,
) => {
  if (event.recurrenceLabel) {
    return event.recurrenceLabel;
  }

  const days = event.daysOfWeek?.length
    ? event.daysOfWeek
    : event.dayOfWeek
      ? [event.dayOfWeek]
      : [];

  if (event.recurrence === "weekly" && days.length) {
    return `Every ${joinDays(days)}`;
  }

  return "Ongoing";
};

export const formatEventDate = (
  event: Pick<
    EventItem,
    | "date"
    | "endDate"
    | "dateLabel"
    | "isTbc"
    | "recurrence"
    | "recurrenceLabel"
    | "dayOfWeek"
    | "daysOfWeek"
  >,
) => {
  if (
    event.recurrenceLabel ||
    (event.recurrence === "weekly" && (event.dayOfWeek || event.daysOfWeek?.length))
  ) {
    return formatRecurringLabel(event);
  }

  if (event.date && event.endDate) {
    const start = new Date(event.date);
    const end = new Date(event.endDate);

    if (isSameMonthAndYear(start, end)) {
      return `${start.getDate()} to ${formatDisplayDate(event.endDate)}`;
    }

    if (isSameYear(start, end)) {
      return `${start.getDate()} ${start.toLocaleString("en-GB", { month: "long" })} to ${formatDisplayDate(event.endDate)}`;
    }

    return `${formatDisplayDate(event.date)} to ${formatDisplayDate(event.endDate)}`;
  }

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
