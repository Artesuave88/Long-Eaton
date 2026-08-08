export type EventItem = {
  id: string;
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  heading?: string;
  type?: "event" | "recurringEvent" | "activity";
  date?: string;
  endDate?: string;
  dateLabel?: string;
  recurrence?: "weekly" | "monthly";
  recurrenceLabel?: string;
  ongoing?: boolean;
  dayOfWeek?:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  daysOfWeek?: (
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
  )[];
  isTbc?: boolean;
  time?: string;
  startTime?: string;
  endTime?: string;
  approximateReturnTime?: string;
  location?: string;
  price?: string;
  priceSummary?: string;
  status?: string;
  organiser?: string;
  organiserUrl?: string;
  performer?: string | string[];
  contactName?: string;
  audience?: string;
  ticketUrl?: string;
  offerValidFrom?: string;
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
  sourceUrl?: string;
  volunteerRun?: boolean;
  relatedDates?: {
    title: string;
    date?: string;
    dateLabel?: string;
    note?: string;
  }[];
  sessions?: {
    title: string;
    time: string;
    note?: string;
  }[];
  featured?: boolean;
  retainAfterEvent?: boolean;
  postEventMessage?: string;
  relatedLinks?: {
    href: string;
    label: string;
  }[];
};

export type BusinessItem = {
  id: string;
  slug: string;
  name: string;
  seoTitle?: string;
  metaDescription?: string;
  heading?: string;
  category: string;
  location: string;
  description: string;
  about: string[];
  website?: string;
  instagram?: string;
  telephone?: string;
  email?: string;
  openingHours?: {
    label: string;
    schema: string;
  }[];
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageLabel: string;
  imageStyle: string;
  featured?: boolean;
  isReal?: boolean;
  relatedLinks?: {
    href: string;
    label: string;
  }[];
};

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageLabel: string;
  imageStyle: string;
  sourceUrl?: string;
  sourceLabel?: string;
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

export type DiscoverPlace = {
  id: string;
  slug: string;
  title: string;
  description: string;
  whatItIs: string;
  whyVisit: string;
  idealFor: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLabel: string;
  imageStyle: string;
  href: string;
};
