export type EventItem = {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  startTime?: string;
  endTime?: string;
  approximateReturnTime?: string;
  location: string;
  price?: string;
  organiser?: string;
  strapline?: string;
  tags?: string[];
  category: string;
  excerpt: string;
  description: string[];
  imageLabel: string;
  imageStyle: string;
  image?: {
    label: string;
    style: string;
  };
  sourceName?: string;
  sourceUrl?: string;
  volunteerRun?: boolean;
  relatedDates?: {
    title: string;
    date?: string;
    dateLabel?: string;
    note?: string;
  }[];
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
  website?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLabel: string;
  imageStyle: string;
  featured?: boolean;
  isReal?: boolean;
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
