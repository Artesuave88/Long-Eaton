import type { DiscoverCategory } from '$types/content';

export const discoverCategories: DiscoverCategory[] = [
	{
		id: 'discover-1',
		slug: 'eat-and-drink',
		title: 'Eat & Drink',
		description: 'Find friendly brunch spots, casual dinners, takeaway favourites and independent coffee stops.',
		highlights: ['Local cafes', 'Evening dining', 'Sweet treats'],
		imageLabel: 'Food trail',
		imageStyle: 'from-coral/80 via-sun/60 to-white',
		link: '/businesses'
	},
	{
		id: 'discover-2',
		slug: 'shop-independents',
		title: 'Shop Independents',
		description: 'Explore gifts, books, homewares, services and everyday businesses that give the town real character.',
		highlights: ['Lifestyle stores', 'Books & gifts', 'Personal service'],
		imageLabel: 'Independent shops',
		imageStyle: 'from-brand-700 via-brand-300 to-sand',
		link: '/businesses'
	},
	{
		id: 'discover-3',
		slug: 'walks-and-green-spaces',
		title: 'Walks & Green Spaces',
		description: 'Slow down with canal paths, park afternoons and easy routes that make Long Eaton feel close to nature.',
		highlights: ['Canal walks', 'West Park', 'Family-friendly routes'],
		imageLabel: 'Canal and park',
		imageStyle: 'from-brand-500 via-brand-100 to-white',
		link: '/discover'
	},
	{
		id: 'discover-4',
		slug: 'community-and-events',
		title: 'Community & Events',
		description: 'Discover markets, seasonal festivals, music, family days and reasons to come back often.',
		highlights: ['Town events', 'Community feel', 'Weekend ideas'],
		imageLabel: 'Community events',
		imageStyle: 'from-sun/80 via-coral/70 to-white',
		link: '/events'
	}
];
