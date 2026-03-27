import duchessTheatre from "$data/imported/duchess-theatre.json";
import duchessTheatreEvents from "$data/imported/duchess-theatre-events.json";
import type { BusinessItem, DiscoverCategory, EventItem } from "$types/content";

type ImportedLink = {
  label: string;
  url: string;
};

type ImportedShow = {
  title: string;
  url: string | null;
  imageUrl?: string | null;
  startDate?: string;
  endDate?: string;
};

type ImportedVenue = {
  name: string;
  slug: string;
  category: string;
  address: string;
  summary: string;
  description: string[];
  volunteerRun: boolean;
  charityNote: string;
  sourceName: string;
  sourceUrl: string;
  socials: ImportedLink[];
  links: ImportedLink[];
  featuredShows: ImportedShow[];
};

export const importedContentSettings = {
  includeDuchessInBusinesses: true,
  featureDuchessInBusinesses: true,
  includeDuchessInDiscover: true,
  includeDuchessEvents: true,
  featureDuchessEvents: true,
} as const;

export const importedVenueReviewQueue: ImportedVenue[] = [duchessTheatre];

function hasImportedVenueContent(venue: ImportedVenue): boolean {
  return Boolean(venue.name && venue.summary);
}

function buildImportedBusiness(venue: ImportedVenue): BusinessItem {
  return {
    id: "business-imported-duchess-theatre",
    slug: venue.slug,
    name: venue.name,
    category: venue.category,
    location: venue.address,
    description: venue.summary,
    about: venue.description.length
      ? venue.description
      : [venue.summary].filter(Boolean),
    website: venue.sourceUrl,
    imageSrc: "/duchess-theatre.webp",
    imageAlt: `${venue.name} exterior`,
    imageLabel: "Arts venue",
    imageStyle: "bg-brand-accent/10",
    featured: importedContentSettings.featureDuchessInBusinesses,
    isReal: true,
  };
}

function buildImportedDiscoverCategory(venue: ImportedVenue): DiscoverCategory {
  const highlights = [
    venue.category,
    venue.volunteerRun ? "Volunteer run" : "",
    venue.featuredShows.length
      ? `${venue.featuredShows.length} featured shows`
      : "",
  ].filter(Boolean);

  return {
    id: "discover-imported-duchess-theatre",
    slug: "arts-and-entertainment",
    title: venue.name,
    description: venue.summary,
    highlights,
    imageLabel: "Arts & entertainment",
    imageStyle: "bg-brand-accent/10",
    link: `/businesses/${venue.slug}`,
  };
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isShowCurrent(show: ImportedShow): boolean {
  if (!show.endDate && !show.startDate) {
    return true;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const endDate = new Date(show.endDate ?? show.startDate ?? "");
  endDate.setHours(0, 0, 0, 0);

  return Number.isNaN(endDate.getTime()) ? true : endDate >= today;
}

function formatDateLabel(show: ImportedShow): string | undefined {
  if (!show.startDate || !show.endDate || show.startDate === show.endDate) {
    return undefined;
  }

  return `${show.startDate} to ${show.endDate}`;
}

function createImportedEvent(show: ImportedShow, index: number): EventItem {
  const venueName =
    duchessTheatre.name || "Duchess Theatre & Chatsworth Arts Centre";

  return {
    id: `event-imported-duchess-theatre-${index + 1}`,
    slug: `duchess-theatre-${slugify(show.title)}`,
    title: show.title,
    date: show.startDate,
    dateLabel:
      formatDateLabel(show) ??
      (!show.startDate ? "See source listing" : undefined),
    time: "See source listing",
    location:
      duchessTheatre.address || "West Gate, Long Eaton, Derbyshire, NG10 1EF",
    organiser: venueName,

    category: "Arts & Entertainment",
    excerpt: `${show.title} is currently listed by Duchess Theatre on TicketSource.`,
    description: [
      `${show.title} is currently listed by Duchess Theatre on TicketSource.`,
      "Use the source listing for the latest public booking information.",
    ],
    imageSrc: show.imageUrl ?? "/duchess-theatre.webp",
    imageAlt: show.title,
    imageLabel: show.title,
    imageStyle: "bg-brand-accent/10",
    sourceName: "Duchess Theatre TicketSource page",
    sourceUrl: show.url ?? duchessTheatre.sourceUrl,
    volunteerRun: duchessTheatre.volunteerRun,
    relatedDates:
      show.endDate && show.startDate && show.endDate !== show.startDate
        ? [{ title: "Final listed date", date: show.endDate }]
        : undefined,
    featured: importedContentSettings.featureDuchessEvents,
  };
}

const canUseImportedVenue = hasImportedVenueContent(duchessTheatre);

export const optionalImportedBusinesses: BusinessItem[] =
  canUseImportedVenue && importedContentSettings.includeDuchessInBusinesses
    ? [buildImportedBusiness(duchessTheatre)]
    : [];

export const optionalImportedDiscoverCategories: DiscoverCategory[] =
  canUseImportedVenue && importedContentSettings.includeDuchessInDiscover
    ? [buildImportedDiscoverCategory(duchessTheatre)]
    : [];

export const optionalImportedEvents: EventItem[] =
  importedContentSettings.includeDuchessEvents
    ? duchessTheatreEvents
        .filter((show) => show.title && show.url)
        .filter((show) => isShowCurrent(show))
        .map((show, index) => createImportedEvent(show, index))
    : [];
