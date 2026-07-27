import type { BusinessItem } from "$types/content";
import duchessTheatre from "$data/imported/duchess-theatre.json";

type ImportedVenue = {
  name: string;
  slug: string;
  category: string;
  address: string;
  summary: string;
  description: string[];
  sourceUrl: string;
};

const includeDuchessInBusinesses = true;

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
    imageSrc: "/duchess-theatre-exterior.jpg",
    imageAlt: `${venue.name} entrance and original theatre frontage`,
    imageFit: "cover",
    imageLabel: "Arts venue",
    imageStyle: "bg-brand-accent/10",
    featured: false,
    isReal: true,
  };
}

const optionalImportedBusinesses: BusinessItem[] =
  hasImportedVenueContent(duchessTheatre) && includeDuchessInBusinesses
    ? [buildImportedBusiness(duchessTheatre)]
    : [];

const baseBusinesses: BusinessItem[] = [
  {
    id: "business-12",
    slug: "fleek-studio-aesthetics",
    name: "Fleek Studio Aesthetics",
    category: "Beauty & Aesthetics",
    location: "57 Curzon Street, Long Eaton, NG10 4FG",
    description:
      "Luxury aesthetics and semi-permanent make-up studio offering tailored treatments in the heart of Long Eaton.",
    about: [
      "Fleek Studio Aesthetics is a Long Eaton beauty studio founded in 2013 by Sarah Gilmour.",
      "The studio specialises in semi-permanent make-up and aesthetic treatments, including microblading, dermal fillers, anti-wrinkle injections and fat-dissolving treatments.",
      "Appointments are designed around each client's preferred look, with an emphasis on natural results, comfort and careful consultation.",
    ],
    website: "https://www.fleek.studio/",
    instagram: "https://www.instagram.com/fleek.studio.aesthetics/",
    imageSrc: "/fleek-studio.jpg",
    imageAlt:
      "Fleek Studio founder Sarah Gilmour inside the Long Eaton aesthetics studio",
    imageFit: "cover",
    imageLabel: "Beauty and aesthetics studio",
    imageStyle: "bg-brand-accent/10",
    featured: false,
    isReal: true,
  },
  {
    id: "business-11",
    slug: "long-eaton-market",
    name: "Long Eaton Market",
    category: "Shopping & Markets",
    location: "High Street and Market Place, Long Eaton",
    description:
      "Traditional town-centre market supporting independent traders with food, clothing, books, crafts and household goods.",
    about: [
      "Long Eaton Market brings a changing selection of independent traders into the town centre throughout the week.",
      "Regular stalls sell products including cheese, meat and preserves, clothing, greetings cards, books, haberdashery and household goods.",
      "The main market runs on Wednesdays, Fridays and Saturdays, with a smaller flea market on Tuesdays. Markets usually operate from 9am to 3pm, subject to weather conditions.",
    ],
    website:
      "https://www.erewash.gov.uk/businesses-and-licensing/markets-and-car-boot-sales/erewash-markets",
    imageSrc: "/long-eaton-market.jpg",
    imageAlt: "Market stalls and shoppers on Long Eaton High Street",
    imageFit: "cover",
    imageLabel: "Long Eaton town-centre market",
    imageStyle: "bg-brand-section",
    featured: false,
    isReal: true,
  },
  {
    id: "business-10",
    slug: "dudl-coffee",
    name: "DÜDL",
    category: "Café & Creative Workshops",
    location: "79 College Street, Long Eaton, NG10 4NN",
    description:
      "A creative café bringing together great coffee, hands-on crafts, workshops and community events.",
    about: [
      "DÜDL is a creative café on College Street where coffee and making things come together.",
      "Alongside its café offering, DÜDL hosts hands-on workshops, craft activities, creative evenings and community gatherings.",
      "The programme offers a welcoming way to try something creative, meet other people and enjoy a coffee in the heart of Long Eaton.",
    ],
    website: "https://www.dudlcoffee.co.uk/",
    imageSrc: "/dudl-coffee.webp",
    imageAlt: "Illustration of the colourful DÜDL creative café",
    imageFit: "contain",
    imageLabel: "Creative café",
    imageStyle: "bg-[#efb8c6]",
    featured: false,
    isReal: true,
  },
  {
    id: "business-9",
    slug: "transform-hub-long-eaton",
    name: "Transform Hub Long Eaton",
    category: "Fitness & Wellness",
    location: "4 Toton Close, Long Eaton, NG10",
    description:
      "Group personal training, nutrition guidance and accountability built around a supportive fitness community.",
    about: [
      "Transform Hub Long Eaton is a group training and body transformation gym based on Toton Close.",
      "Its coaching combines group personal training with straightforward nutrition guidance, ongoing support and accountability.",
      "New members can join the signature six-week transformation programme, with morning and evening coached sessions designed to help build fitness, confidence and sustainable habits.",
    ],
    website: "https://thetransformhub.co.uk/",
    imageSrc: "/transform-hub.webp",
    imageAlt: "Transform Hub member in a gym beneath the Be More wall graphic",
    imageFit: "cover",
    imageLabel: "Group training gym",
    imageStyle: "bg-brand-accent/10",
    featured: false,
    isReal: true,
  },
  {
    id: "business-8",
    slug: "long-eaton-art-room",
    name: "Long Eaton Art Room",
    category: "Crafts",
    location: "29-31 Lime Grove, Long Eaton, NG10 4LD",
    description:
      "Community arts centre running workshops, creative classes, events and studio activity in Long Eaton.",
    about: [
      "Long Eaton Art Room is a community arts centre between Derby and Nottingham, based on Lime Grove in Long Eaton.",
      "The space hosts workshops, courses, events and artist studios, with regular creative sessions running through the week.",
      "It also offers accessible teaching spaces, accessible toilet facilities and free parking on site.",
    ],
    website: "https://www.longeatonartroom.co.uk/",
    imageSrc: "/art-room.png",
    imageAlt: "Long Eaton Art Room logo",
    imageLabel: "Community arts centre",
    imageStyle: "bg-brand-primaryDark/10",
    featured: false,
    isReal: true,
  },
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
  { label: "Entertainment", slug: "entertainment" },
  { label: "Crafts", slug: "crafts" },
  { label: "Family", slug: "family" },
] as const;

type BusinessBrowseGroupSlug = (typeof businessBrowseGroups)[number]["slug"];

const businessGroupMatchers: Record<BusinessBrowseGroupSlug, RegExp> = {
  "food-drink": /food|drink|cafe|restaurant|pub|bar|bakery|coffee/i,
  shopping: /shop|retail|boutique|store|market/i,
  fitness: /fitness|gym|martial arts|bjj|jiu-jitsu|sport|wellness/i,
  services:
    /service|repair|trade|professional|estate|account|studio|salon|beauty/i,
  entertainment: /entertainment|theatre|music|performance|show|cinema|comedy/i,
  crafts: /craft|arts|culture|creative|workshop|maker|textile/i,
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
