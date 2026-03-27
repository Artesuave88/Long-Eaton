export type EventItem = {
  id: string;
  slug: string;
  title: string;
  date?: string;
  endDate?: string;
  dateLabel?: string;
  isTbc?: boolean;
  time: string;
  startTime?: string;
  endTime?: string;
  approximateReturnTime?: string;
  location: string;
  price?: string;
  priceSummary?: string;
  organiser?: string;
  ticketUrl?: string;
  strapline?: string;
  tags?: string[];
  category: string;
  excerpt: string;
  description: string[];
  sellerInfo?: string[];
  buyerInfo?: string[];
  fundraisingNote?: string;
  locationNote?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageLabel: string;
  imageStyle: string;
  image?: {
    label: string;
    style: string;
  };
  gallery?: {
    src: string;
    alt: string;
  }[];
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
