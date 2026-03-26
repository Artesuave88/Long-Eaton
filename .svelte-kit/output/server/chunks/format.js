const formatDisplayDate = (value) => new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric"
}).format(new Date(value));
const slugMatches = (value, query) => value.toLowerCase().includes(query.trim().toLowerCase());
export {
  formatDisplayDate as f,
  slugMatches as s
};
