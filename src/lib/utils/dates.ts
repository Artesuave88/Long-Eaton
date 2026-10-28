export function getLondonCalendarDate(value = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(value);
}

// Date-only content stays available through its final London calendar day.
// A published finish time also removes sessions that have finished today.
export function hasDeadlinePassed(date?: string, now = new Date(), endTime?: string) {
  if (!date) return false;
  const today = getLondonCalendarDate(now);
  const finalDate = date.slice(0, 10);
  if (finalDate !== today) return finalDate < today;
  if (!endTime || !/^\d{2}:\d{2}$/.test(endTime)) return false;
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  }).format(now);
  return time >= endTime;
}
