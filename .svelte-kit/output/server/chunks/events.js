const events = [
  {
    id: "event-1",
    slug: "long-eaton-makers-market",
    title: "Long Eaton Makers Market",
    date: "2026-04-12",
    time: "10:00 AM - 3:00 PM",
    location: "Market Place",
    category: "Markets",
    excerpt: "A town-centre market with local food, handmade goods and independent stalls.",
    description: [
      "The Makers Market brings together bakers, artists and small local traders for a busy Saturday in the centre of town.",
      "Expect produce, gifts, coffee and a good excuse to spend a bit longer browsing nearby shops."
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
    excerpt: "An easy afternoon of games, food stalls and outdoor activities at West Park.",
    description: [
      "West Park hosts a simple family day with space for picnics, informal activities and local groups running small pop-ups.",
      "It's the kind of event you can drop into for an hour or stay at for most of the afternoon."
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
      "This guided evening walk follows one of Long Eaton's best-known waterside routes, with local volunteers sharing stories as you go.",
      "It's a good option for anyone who wants a quieter view of the town after work."
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
      "Food Weekend gives cafes, bakeries and restaurants a reason to put on special menus, tastings and a few one-off extras.",
      "It works best as a slow day in town rather than a rushed stop between errands."
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
    excerpt: "Local performers and choirs at the bandstand on a relaxed Sunday afternoon.",
    description: [
      "The bandstand sessions bring together local performers for a laid-back afternoon in the park.",
      "Expect a mix of acoustic sets, choirs and plenty of people stopping by with a coffee in hand."
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
      "Shop Small Late Night gives people more time to browse after work, with several independents staying open into the evening.",
      "A few shops add demos or small in-store treats, but the main draw is simply having time to look properly."
    ],
    imageLabel: "Late shopping",
    imageStyle: "from-ink via-brand-700 to-coral/80"
  }
];
const eventCategories = [
  "All",
  ...new Set(events.map((event) => event.category))
];
export {
  eventCategories as a,
  events as e
};
