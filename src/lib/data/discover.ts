import type { DiscoverCategory } from "$types/content";

export const discoverCategories: DiscoverCategory[] = [
  {
    id: "discover-1",
    slug: "eat-and-drink",
    title: "Eat & Drink",
    description:
      "Coffee stops, brunch places, casual dinners and reliable takeaways.",
    highlights: ["Local cafes", "Evening dining", "Sweet treats"],
    imageLabel: "Food trail",
    imageStyle: "from-coral/80 via-sun/60 to-white",
    link: "/businesses",
  },
  {
    id: "discover-2",
    slug: "shop-independents",
    title: "Shop Independents",
    description:
      "Gift shops, books, home bits and the everyday independents people return to.",
    highlights: ["Lifestyle stores", "Books & gifts", "Personal service"],
    imageLabel: "Independent shops",
    imageStyle: "from-brand-700 via-brand-300 to-sand",
    link: "/businesses",
  },
  {
    id: "discover-3",
    slug: "walks-and-green-spaces",
    title: "Walks & Green Spaces",
    description:
      "Canal paths, park afternoons and easy walks when you want a slower pace.",
    highlights: ["Canal walks", "West Park", "Family-friendly routes"],
    imageLabel: "Canal and park",
    imageStyle: "from-brand-500 via-brand-100 to-white",
    link: "/discover",
  },
  {
    id: "discover-4",
    slug: "community-and-events",
    title: "Community & Events",
    description:
      "Markets, local events and weekend plans that give the town a bit of life.",
    highlights: ["Town events", "Community feel", "Weekend ideas"],
    imageLabel: "Community events",
    imageStyle: "from-sun/80 via-coral/70 to-white",
    link: "/events",
  },
];
