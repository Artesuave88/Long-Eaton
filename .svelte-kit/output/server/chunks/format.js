const formatDisplayDate = (value) => new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric"
}).format(new Date(value));
const formatEventDate = (event) => {
  if (event.date) {
    return formatDisplayDate(event.date);
  }
  if (event.dateLabel) {
    return event.isTbc ? `${event.dateLabel} (TBC)` : event.dateLabel;
  }
  return "Date to be confirmed";
};
const slugMatches = (value, query) => value.toLowerCase().includes(query.trim().toLowerCase());
export {
  formatDisplayDate as a,
  formatEventDate as f,
  slugMatches as s
};
