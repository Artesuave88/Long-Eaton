export type EventItem = {
	id: string;
	slug: string;
	title: string;
	date: string;
	time: string;
	location: string;
	category: string;
	excerpt: string;
	description: string[];
	imageLabel: string;
	imageStyle: string;
	featured?: boolean;
};

export type BusinessItem = {
	id: string;
	slug: string;
	name: string;
	category: string;
	location: string;
	description: string;
	about: string[];
	imageLabel: string;
	imageStyle: string;
	featured?: boolean;
};

export type NewsItem = {
	id: string;
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	content: string[];
	imageLabel: string;
	imageStyle: string;
};

export type DiscoverCategory = {
	id: string;
	slug: string;
	title: string;
	description: string;
	highlights: string[];
	imageLabel: string;
	imageStyle: string;
	link: string;
};
