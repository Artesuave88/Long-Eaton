const businesses = [
  {
    id: "business-1",
    slug: "station-street-kitchen",
    name: "Station Street Kitchen",
    category: "Food & Drink",
    location: "Station Street",
    description: "Easy-going cafe for brunch, coffee and a quick lunch in town.",
    about: [
      "Station Street Kitchen keeps things simple with brunch favourites, good coffee and a room that suits both a quick stop and a slower catch-up.",
      "It feels like the sort of place people fold into their regular week rather than save for a special occasion."
    ],
    website: "https://stationstreetkitchen.example",
    imageLabel: "Cafe",
    imageStyle: "from-sun/80 via-white to-coral/50",
    featured: true
  },
  {
    id: "business-2",
    slug: "canal-side-cycles",
    name: "Canal Side Cycles",
    category: "Shopping",
    location: "Tamworth Road",
    description: "Bike shop for repairs, accessories and route advice before heading out.",
    about: [
      "Canal Side Cycles helps with everyday repairs, family bikes and the practical kit people usually need before a ride.",
      "Its Tamworth Road location makes it a handy stop for anyone using the canal paths and nearby green routes."
    ],
    website: "https://canalsidecycles.example",
    imageLabel: "Cycle shop",
    imageStyle: "from-brand-700 via-brand-200 to-sand",
    featured: true
  },
  {
    id: "business-3",
    slug: "market-house-gifts",
    name: "Market House Gifts",
    category: "Independent Retail",
    location: "High Street",
    description: "Small gift shop with cards, home bits and a few locally made finds.",
    about: [
      "Market House Gifts mixes everyday cards and presents with homeware and a changing shelf of local makers.",
      "It's an easy place to call into when you need a birthday card, a thank-you gift or something small for the house."
    ],
    website: "https://markethousegifts.example",
    imageLabel: "Gift shop",
    imageStyle: "from-coral/90 via-white to-brand-100"
  },
  {
    id: "business-4",
    slug: "erewash-wellness-studio",
    name: "Erewash Wellness Studio",
    category: "Health & Beauty",
    location: "Derby Road",
    description: "Pilates and yoga classes in a calm studio just off Derby Road.",
    about: [
      "Erewash Wellness Studio runs classes for beginners and regulars, with a timetable that fits around work, school runs and weekends.",
      "The space is low-key and friendly rather than intimidating, which makes it easy to keep coming back."
    ],
    website: "https://erewashwellness.example",
    imageLabel: "Wellness studio",
    imageStyle: "from-brand-100 via-white to-sun/60"
  },
  {
    id: "business-5",
    slug: "long-eaton-books-co",
    name: "Long Eaton Books Co.",
    category: "Culture",
    location: "Market Place",
    description: "Independent bookshop with local interest titles, children's shelves and regular events.",
    about: [
      "Long Eaton Books Co. balances new releases with local history, children's books and a few thoughtful gift lines.",
      "It gives people another reason to slow down in the town centre instead of heading elsewhere for an afternoon out."
    ],
    website: "https://longeatonbooks.example",
    imageLabel: "Bookshop",
    imageStyle: "from-ink via-brand-600 to-brand-100",
    featured: true
  },
  {
    id: "business-6",
    slug: "park-view-florist",
    name: "Park View Florist",
    category: "Local Services",
    location: "College Street",
    description: "Florist for seasonal bouquets, event flowers and everyday deliveries.",
    about: [
      "Park View Florist is the sort of shop people use for birthdays, weddings, thank-yous and the last-minute bouquet on the way home.",
      "The work is dependable, nicely judged and part of many local occasions without making a fuss about it."
    ],
    website: "https://parkviewflorist.example",
    imageLabel: "Florist",
    imageStyle: "from-coral/80 via-brand-100 to-white"
  },
  {
    id: "business-7",
    slug: "long-eaton-bjj",
    name: "Long Eaton BJJ",
    category: "Fitness & Martial Arts",
    location: "Unit A2 & A3 West End Mills, Leopold Street",
    description: "Brazilian Jiu-Jitsu academy at West End Mills with daily classes for adults and children.",
    about: [
      "Long Eaton BJJ is one of the first real businesses now featured on the site, based at West End Mills and open for regular training through the week.",
      "Classes cover adults, children and different experience levels, with a clear focus on steady coaching, fitness and a welcoming atmosphere."
    ],
    website: "https://www.longeatonbjj.co.uk",
    imageSrc: "/lebjj-logo.png",
    imageAlt: "Long Eaton BJJ logo",
    imageLabel: "BJJ academy",
    imageStyle: "from-ink via-brand-700 to-sun/70",
    featured: true,
    isReal: true
  }
];
const businessCategories = [
  "All",
  ...new Set(businesses.map((business) => business.category))
];
export {
  businessCategories as a,
  businesses as b
};
