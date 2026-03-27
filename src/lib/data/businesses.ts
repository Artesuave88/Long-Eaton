import type { BusinessItem } from "$types/content";
import { optionalImportedBusinesses } from "$data/imported";

const baseBusinesses: BusinessItem[] = [
  {
    id: "business-7",
    slug: "long-eaton-bjj",
    name: "Long Eaton BJJ",
    category: "Fitness & Martial Arts",
    location: "Unit A2 & A3 West End Mills, Leopold Street",
    description:
      "Brazilian Jiu-Jitsu academy at West End Mills with daily classes for adults and children.",
    about: [
      "Long Eaton BJJ is based at West End Mills and runs regular training through the week.",
      "Classes cover adults, children and different experience levels, with a focus on steady coaching, fitness and a welcoming atmosphere.",
    ],
    website: "https://www.longeatonbjj.co.uk",
    imageSrc: "/lebjj-logo.png",
    imageAlt: "Long Eaton BJJ logo",
    imageLabel: "BJJ academy",
    imageStyle: "bg-brand-primaryDark/10",
    featured: true,
    isReal: true,
  },
];

export const businesses: BusinessItem[] = [
  ...optionalImportedBusinesses.filter((business) => business.featured),
  ...baseBusinesses,
  ...optionalImportedBusinesses.filter((business) => !business.featured),
];

export const businessCategories = [
  "All",
  ...new Set(businesses.map((business) => business.category)),
];

export const businessBrowseGroups = [
  { label: "Food & Drink", slug: "food-drink" },
  { label: "Shopping", slug: "shopping" },
  { label: "Fitness", slug: "fitness" },
  { label: "Services", slug: "services" },
  { label: "Arts & Culture", slug: "arts-culture" },
  { label: "Family", slug: "family" },
] as const;

export type BusinessBrowseGroupSlug =
  (typeof businessBrowseGroups)[number]["slug"];

const businessGroupMatchers: Record<BusinessBrowseGroupSlug, RegExp> = {
  "food-drink": /food|drink|cafe|restaurant|pub|bar|bakery|coffee/i,
  shopping: /shop|retail|boutique|store|market/i,
  fitness: /fitness|gym|martial arts|bjj|jiu-jitsu|sport|wellness/i,
  services:
    /service|repair|trade|professional|estate|account|studio|salon|beauty/i,
  "arts-culture": /arts|culture|entertainment|theatre|gallery|music|creative/i,
  family: /family|children|kids|nursery|school|play|community/i,
};

export function getBusinessBrowseGroup(
  business: Pick<BusinessItem, "category" | "name" | "description">,
): BusinessBrowseGroupSlug | null {
  const haystack = `${business.category} ${business.name} ${business.description}`;

  for (const group of businessBrowseGroups) {
    if (businessGroupMatchers[group.slug].test(haystack)) {
      return group.slug;
    }
  }

  return null;
}

export function matchesBusinessBrowseGroup(
  business: Pick<BusinessItem, "category" | "name" | "description">,
  group: string | null,
): boolean {
  if (!group) {
    return true;
  }

  return getBusinessBrowseGroup(business) === group;
}
