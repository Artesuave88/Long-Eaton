import type { DiscoverCategory } from "$types/content";
import duchessTheatre from "$data/imported/duchess-theatre.json";

type ImportedShow = {
  title: string;
};

type ImportedVenue = {
  name: string;
  category: string;
  summary: string;
  volunteerRun: boolean;
  featuredShows: ImportedShow[];
  slug: string;
};

const includeDuchessInDiscover = true;

function hasImportedVenueContent(venue: ImportedVenue): boolean {
  return Boolean(venue.name && venue.summary);
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

const optionalImportedDiscoverCategories: DiscoverCategory[] =
  hasImportedVenueContent(duchessTheatre) && includeDuchessInDiscover
    ? [buildImportedDiscoverCategory(duchessTheatre)]
    : [];

export const discoverCategories: DiscoverCategory[] = [
  ...optionalImportedDiscoverCategories,
];
