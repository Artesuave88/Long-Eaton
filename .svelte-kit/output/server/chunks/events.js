const events = [
  {
    id: "event-1",
    slug: "long-eaton-makers-market",
    title: "Long Eaton Makers Market",
    date: "2026-04-12",
    time: "10:00 AM - 3:00 PM",
    location: "Market Place",
    category: "Markets",
    excerpt: "Browse local food, handmade gifts and homegrown creative businesses in the town centre.",
    description: [
      "The Makers Market brings together independent traders, bakers, artists and small makers for a lively weekend event in the heart of Long Eaton.",
      "Expect stalls packed with fresh produce, locally made gifts, coffee on the go and plenty of reasons to shop local while you explore the town."
    ],
    imageLabel: "Market day",
    imageStyle: "from-brand-300 via-brand-100 to-sun/60",
    featured: true
  },
  {
    id: "event-2",
    slug: "family-fun-at-west-park",
    title: "Family Fun at West Park",
    date: "2026-04-19",
    time: "11:00 AM - 4:00 PM",
    location: "West Park",
    category: "Family",
    excerpt: "A relaxed afternoon of games, face painting, food stalls and outdoor activities for all ages.",
    description: [
      "West Park comes alive with easy-going family entertainment, picnic space and activities designed to make the most of a spring weekend.",
      "Bring a blanket, meet local community groups and let the kids enjoy crafts, trail games and live performances."
    ],
    imageLabel: "Park festival",
    imageStyle: "from-sun/80 via-sand to-brand-100",
    featured: true
  },
  {
    id: "event-3",
    slug: "twilight-canal-walk",
    title: "Twilight Canal Walk",
    date: "2026-04-24",
    time: "6:30 PM - 8:00 PM",
    location: "Erewash Canal",
    category: "Outdoors",
    excerpt: "Join a guided evening walk and hear stories about the canal, wildlife and Long Eaton history.",
    description: [
      "This gentle guided walk follows one of Long Eaton’s best-loved waterside routes with local volunteers sharing stories along the way.",
      "It is a great choice for visitors, photographers and anyone looking to see a quieter side of the town."
    ],
    imageLabel: "Canal walk",
    imageStyle: "from-brand-700 via-brand-400 to-sand"
  },
  {
    id: "event-4",
    slug: "independent-food-weekend",
    title: "Independent Food Weekend",
    date: "2026-05-02",
    time: "All day",
    location: "Across Long Eaton",
    category: "Food & Drink",
    excerpt: "Special menus, tastings and late openings from local cafes, bakeries and restaurants.",
    description: [
      "Food Weekend highlights the town’s best independent places to eat with pop-ups, tasting menus and one-off offers across the centre.",
      "It is designed to encourage visitors to spend a full day discovering the local food scene."
    ],
    imageLabel: "Food weekend",
    imageStyle: "from-coral/80 via-sun/70 to-white"
  },
  {
    id: "event-5",
    slug: "summer-bandstand-sessions",
    title: "Summer Bandstand Sessions",
    date: "2026-05-10",
    time: "1:00 PM - 5:00 PM",
    location: "West Park Bandstand",
    category: "Live Music",
    excerpt: "Local performers, community choirs and feel-good live music in an easy Sunday setting.",
    description: [
      "The bandstand sessions celebrate local talent and invite residents to spend an afternoon outdoors with music and refreshments.",
      "Expect a rotating mix of acoustic sets, choirs and upbeat performances."
    ],
    imageLabel: "Live music",
    imageStyle: "from-brand-500 via-coral/70 to-sun/60"
  },
  {
    id: "event-6",
    slug: "shop-small-late-night",
    title: "Shop Small Late Night",
    date: "2026-05-21",
    time: "5:00 PM - 8:30 PM",
    location: "Town Centre",
    category: "Shopping",
    excerpt: "Independent shops stay open later with in-store treats, demos and special one-night offers.",
    description: [
      "Shop Small Late Night gives visitors extra time to browse local boutiques, gift shops and lifestyle stores after work.",
      "It is a simple but effective way to discover businesses you might normally miss during the day."
    ],
    imageLabel: "Late shopping",
    imageStyle: "from-ink via-brand-700 to-coral/80"
  }
];
const eventCategories = ["All", ...new Set(events.map((event) => event.category))];
export {
  eventCategories as a,
  events as e
};
