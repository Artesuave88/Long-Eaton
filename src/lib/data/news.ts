import type { NewsItem } from '$types/content';

export const newsItems: NewsItem[] = [
	{
		id: 'news-1',
		slug: 'spring-guide-to-shopping-local',
		title: 'A Spring Guide to Shopping Local in Long Eaton',
		date: '2026-03-18',
		excerpt: 'New season arrivals, independent windows and easy reasons to spend your Saturday in town.',
		content: [
			'Spring is a brilliant time to explore Long Eaton’s independents, with new stock landing across fashion, gifting, home and food.',
			'This season guide encourages residents and visitors to make a day of it, stopping for coffee, browsing local shops and discovering a few businesses they have not tried before.'
		],
		imageLabel: 'Shop local',
		imageStyle: 'from-sun/70 via-white to-brand-100'
	},
	{
		id: 'news-2',
		slug: 'community-groups-bring-west-park-to-life',
		title: 'Community Groups Bring West Park to Life This Month',
		date: '2026-03-11',
		excerpt: 'From family meet-ups to outdoor classes, the park is becoming a bigger part of town life.',
		content: [
			'West Park continues to grow as a go-to setting for community events, active wellbeing and family-friendly afternoons.',
			'Local groups are adding more pop-up sessions and informal gatherings that make the park feel even more central to life in Long Eaton.'
		],
		imageLabel: 'Community park',
		imageStyle: 'from-brand-500 via-brand-100 to-sand'
	},
	{
		id: 'news-3',
		slug: 'new-offers-across-town-centre',
		title: 'New Offers Across the Town Centre',
		date: '2026-03-05',
		excerpt: 'Cafes, studios and shops are rolling out limited-time offers to welcome spring visitors.',
		content: [
			'Several local businesses have introduced early spring offers, giving people another reason to shop local and spend longer in town.',
			'Highlights include tasting menus, bundle deals, free event add-ons and welcome discounts for first-time visitors.'
		],
		imageLabel: 'Town offers',
		imageStyle: 'from-coral/90 via-sand to-white'
	}
];
