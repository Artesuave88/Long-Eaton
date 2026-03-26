export const formatDisplayDate = (value: string) =>
	new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(new Date(value));

export const slugMatches = (value: string, query: string) =>
	value.toLowerCase().includes(query.trim().toLowerCase());
