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
    id: "business-17",
    slug: "caffe-inna",
    name: "Caffe-Inna",
    category: "Food & Drink",
    location: "21 Market Place, Long Eaton, NG10 1JL",
    description:
      "A Long Eaton café and Greek deli serving coffee, café food, Greek dishes and takeaway options from Market Place.",
    about: [
      "Caffe-Inna is an independent café and Greek deli at 21 Market Place in Long Eaton.",
      "Its offering includes coffee and café favourites alongside Greek food, with takeaway and delivery options available.",
      "Follow Caffe-Inna on Instagram for current menus, opening times and updates.",
    ],
    instagram: "https://www.instagram.com/caffeinna2025/",
    imageSrc: "/caffe-inna.png",
    imageAlt:
      "Illustration of musicians gathered around a table with the Caffe-Inna logo",
    imageFit: "cover",
    imageLabel: "Caffe-Inna café illustration",
    imageStyle: "bg-[#171717]",
    featured: false,
    isReal: true,
  },
  {
    id: "business-15",
    slug: "bethany-rose-bridal",
    name: "Bethany Rose Bridal",
    category: "Shopping & Bridal",
    location: "59 Market Place, Long Eaton, NG10 1JQ",
    description:
      "Relaxed Long Eaton boutique offering designer wedding dresses, prom dresses, accessories and personal appointments for a wide range of styles, sizes and budgets.",
    about: [
      "Bethany Rose Bridal is an appointment-only bridal and prom dress boutique on Market Place, welcoming customers from across the Derby and Nottingham area.",
      "The boutique carries more than 100 gowns from designers including Dando London, Ellis Bridal, Jean Fox and Gilded Rose, with samples in sizes 8 to 26 and styles available to order in sizes 4 to 32.",
      "Customers can book a free consultation, shop for a prom dress, browse bridal accessories or explore the Sale Room for off-the-peg dresses.",
    ],
    website: "https://bethanyrosebridal.co.uk/",
    instagram: "https://www.instagram.com/bethany.rose.bridal/",
    imageSrc: "/bethany-rose-bridal.jpg",
    imageAlt:
      "Bethany Rose Bridal label hanging from the lace of a wedding dress",
    imageFit: "cover",
    imageLabel: "Bridal and prom dress boutique",
    imageStyle: "bg-[#edf7f1]",
    featured: false,
    isReal: true,
  },
  {
    id: "business-14",
    slug: "mo-mo-italian-dining",
    name: "Mo' Mo'",
    category: "Food & Drink",
    location: "71 Derby Road, Long Eaton, NG10 1LU",
    description:
      "An intimate Italian café and restaurant bringing the flavours of Puglia to Long Eaton through breakfast, brunch, pizza and relaxed evening dining.",
    about: [
      "Mo' Mo' is an Italian dining, coffee and bakery venue on Derby Road, inspired by the food and hospitality of Puglia.",
      "The weekly menu includes Friday and Saturday breakfast and brunch, Thursday pizza and aperitivo evenings, Friday and Saturday night dining, and Sunday Italian lunch.",
      "With just six tables, the restaurant offers a small and relaxed setting. Advance booking is recommended, particularly for evening service.",
    ],
    website: "https://www.momonottingham.co.uk/",
    imageSrc:
      "https://c55c196f71.clvaw-cdnwnd.com/752fb2f0601c5362d82ff43101d9ebf7/200000039-9215192153/700/Momo_cartolina-0.webp?ph=c55c196f71",
    imageAlt: "Mo' Mo' Italian dining, coffee and bakery",
    imageFit: "contain",
    imageLabel: "Italian café and restaurant",
    imageStyle: "bg-[#f4eadc]",
    featured: false,
    isReal: true,
  },
  {
    id: "business-16",
    slug: "the-looking-glass-long-eaton",
    name: "The Looking Glass",
    category: "Food & Drink",
    location: "123–125 Derby Road, Long Eaton, NG10 4LA",
    description:
      "A relaxed, independent micropub, serving cask ales and a varied selection of other drinks.",
    about: [
      "The Looking Glass is an independent micropub on Derby Road, which opened in April 2026.",
      "Its spacious, glass-fronted interior takes inspiration from Lewis Carroll’s Through the Looking-Glass and offers a calm, comfortable setting.",
      "The bar serves changing gravity-fed cask ales alongside craft beer, cider, wine, prosecco, spirits, soft drinks and hot drinks.",
    ],
    instagram: "https://www.instagram.com/thelookingglassl.e/",
    imageSrc: "/the-looking-glass.png",
    imageAlt:
      "The Looking Glass logo with a yellow mirror and the words we’re all mad here on a green background",
    imageFit: "contain",
    imageLabel: "Independent micropub",
    imageStyle: "bg-[#21894c]",
    featured: false,
    isReal: true,
  },
  {
    id: "business-13",
    slug: "the-butchers-long-eaton",
    name: "The Butchers Long Eaton",
    category: "Food & Drink",
    location: "The Beeches, Market Place, Long Eaton, NG10 1LJ",
    description:
      "Traditional Long Eaton butcher and farm shop offering locally sourced meat, handcrafted products, meat packs and catering.",
    about: [
      "The Butchers Long Eaton combines traditional butchery skills with modern food standards, preparing fresh cuts, sausages, deli products and family meat packs.",
      "The team works with farmers and suppliers as close to Long Eaton as possible, with an emphasis on quality, traceability and knowledgeable service.",
      "Products are available from the Market Place shop and online, with wholesale and event catering enquiries also welcomed.",
    ],
    website: "https://www.thebutchers.co.uk/",
    imageSrc:
      "https://www.thebutchers.co.uk/cdn/shop/files/EC_29.png?v=1759748744&width=500",
    imageAlt: "The Butchers Long Eaton logo",
    imageFit: "contain",
    imageLabel: "Traditional Long Eaton butcher and farm shop",
    imageStyle: "bg-brand-primaryDark/10",
    featured: false,
    isReal: true,
  },
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
