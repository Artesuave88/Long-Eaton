import type { DiscoverCategory, DiscoverPlace } from "$types/content";
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

export const discoverPlaces: DiscoverPlace[] = [
  {
    id: "discover-west-park",
    slug: "west-park",
    title: "West Park",
    description:
      "A family-friendly green space with room to slow down, stretch your legs and enjoy some easy outdoor time close to town.",
    whatItIs: "A local park with open green space, play areas and easy paths.",
    whyVisit:
      "Good for a relaxed hour outside, from a quick stroll to a family stop-off.",
    idealFor: "Families, casual walks and everyday fresh-air breaks.",
    imageSrc: "/west-park.jpg",
    imageAlt: "West Park in Long Eaton",
    imageLabel: "West Park",
    imageStyle:
      "bg-[linear-gradient(135deg,rgba(95,158,110,0.22),rgba(225,245,233,0.92))]",
    href: "/discover-long-eaton#west-park",
  },
  {
    id: "discover-trent-lock",
    slug: "trent-lock",
    title: "Trent Lock",
    description:
      "A scenic waterside spot where canals and riverside views make it easy to settle into a slower pace, whether you are walking or meeting up.",
    whatItIs:
      "A waterside area known for canal views, nearby pubs and relaxed walking routes.",
    whyVisit:
      "The setting is great for peaceful views, local exploring and catching up with friends.",
    idealFor: "Walks, meeting friends and quiet afternoons by the water.",
    imageSrc: "/trent-lock.webp",
    imageAlt: "Trent Lock waterside views",
    imageLabel: "Trent Lock",
    imageStyle:
      "bg-[linear-gradient(135deg,rgba(111,190,220,0.2),rgba(235,247,255,0.95))]",

    href: "/discover-long-eaton#trent-lock",
  },
  {
    id: "discover-erewash-canal",
    slug: "erewash-canal",
    title: "Erewash Canal",
    description:
      "A peaceful canal-side route through Long Eaton, ideal for walking, cycling and taking in the local waterside scenery.",
    whatItIs: "A historic local waterway that runs for around 11.5 miles.",
    whyVisit:
      "Popular for waterside walking and cycling, with a calm green feel.",
    idealFor: "Casual strolls, bike rides and quiet outdoor time.",
    imageSrc: "/erewash-canal.jpg",
    imageAlt: "Erewash Canal in Long Eaton",
    imageLabel: "Erewash Canal",
    imageStyle:
      "bg-[linear-gradient(135deg,rgba(126,211,168,0.18),rgba(231,247,238,0.94))]",

    href: "/discover-long-eaton#erewash-canal",
  },
];
