import type { BusinessItem } from '$types/content';

export const businesses: BusinessItem[] = [
	{
		id: 'business-1',
		slug: 'station-street-kitchen',
		name: 'Station Street Kitchen',
		category: 'Food & Drink',
		location: 'Station Street',
		description: 'Neighbourhood brunch spot serving fresh plates, locally roasted coffee and warm service.',
		about: [
			'Station Street Kitchen is a bright, friendly independent cafe with a menu built around brunch favourites, seasonal specials and great coffee.',
			'It is the kind of place people return to for a relaxed catch-up, a quick breakfast or an easy lunch in town.'
		],
		imageLabel: 'Cafe',
		imageStyle: 'from-sun/80 via-white to-coral/50',
		featured: true
	},
	{
		id: 'business-2',
		slug: 'canal-side-cycles',
		name: 'Canal Side Cycles',
		category: 'Shopping',
		location: 'Tamworth Road',
		description: 'Independent bike shop for repairs, accessories and advice before exploring local routes.',
		about: [
			'Canal Side Cycles supports everyday riders, family outings and local commuters with approachable expertise and quality servicing.',
			'The shop is especially popular with people heading toward canal paths and green routes around Long Eaton.'
		],
		imageLabel: 'Cycle shop',
		imageStyle: 'from-brand-700 via-brand-200 to-sand',
		featured: true
	},
	{
		id: 'business-3',
		slug: 'the-curated-corner',
		name: 'The Curated Corner',
		category: 'Independent Retail',
		location: 'High Street',
		description: 'Gift-led lifestyle shop full of homewares, cards, candles and locally made finds.',
		about: [
			'The Curated Corner champions thoughtful gifting with a mix of local makers and carefully selected brands.',
			'It is a popular stop for birthdays, home updates and those small purchases that make the town centre feel special.'
		],
		imageLabel: 'Gift shop',
		imageStyle: 'from-coral/90 via-white to-brand-100'
	},
	{
		id: 'business-4',
		slug: 'erewash-wellness-studio',
		name: 'Erewash Wellness Studio',
		category: 'Health & Beauty',
		location: 'Derby Road',
		description: 'Pilates, yoga and wellness classes in a calm studio built around local routines.',
		about: [
			'Erewash Wellness Studio offers flexible classes for beginners and regulars, with a welcoming atmosphere and experienced instructors.',
			'It adds another reason to stay local for health, wellbeing and community connection.'
		],
		imageLabel: 'Wellness studio',
		imageStyle: 'from-brand-100 via-white to-sun/60'
	},
	{
		id: 'business-5',
		slug: 'long-eaton-books-co',
		name: 'Long Eaton Books Co.',
		category: 'Culture',
		location: 'Market Place',
		description: 'Independent bookshop hosting author evenings, children’s stories and curated shelves.',
		about: [
			'Long Eaton Books Co. mixes bestselling reads with local interest titles, gifts and community events.',
			'It is a calm, characterful shop that invites visitors to slow down and spend time in town.'
		],
		imageLabel: 'Bookshop',
		imageStyle: 'from-ink via-brand-600 to-brand-100',
		featured: true
	},
	{
		id: 'business-6',
		slug: 'park-view-florist',
		name: 'Park View Florist',
		category: 'Local Services',
		location: 'College Street',
		description: 'Seasonal bouquets, wedding flowers and thoughtful everyday arrangements with local delivery.',
		about: [
			'Park View Florist is a trusted local favourite for fresh flowers, event styling and personal service.',
			'It is one of those businesses that quietly helps mark special moments right across the town.'
		],
		imageLabel: 'Florist',
		imageStyle: 'from-coral/80 via-brand-100 to-white'
	}
];

export const businessCategories = ['All', ...new Set(businesses.map((business) => business.category))];
