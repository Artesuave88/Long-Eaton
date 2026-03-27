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
