import type { Season } from "$utils/seasons";

export type SeasonalGuide = {
  slug: string;
  season: Season;
  title: string;
  seoTitle?: string;
  heading?: string;
  eyebrow: string;
  description: string;
  intro: string[];
  months: number[];
  sections: {
    title: string;
    copy: string;
    href?: string;
    linkLabel?: string;
  }[];
};

export type SearchGuide = {
  slug: string;
  title: string;
  seoTitle?: string;
  heading?: string;
  eyebrow: string;
  description: string;
  intro: string[];
  lastUpdated?: string;
  sections: {
    title: string;
    copy: string;
    href: string;
    linkLabel: string;
    group?: string;
  }[];
  relatedSlugs: string[];
  eventTopics: string[];
};

export const seasonalGuides: SeasonalGuide[] = [
  {
    slug: "spring-in-long-eaton",
    season: "spring",
    title: "Things to do in Long Eaton this spring",
    eyebrow: "Spring guide",
    description:
      "Spring walks, family activities and local events around Long Eaton.",
    months: [3, 4, 5],
    intro: [
      "Spring brings lighter evenings, new colour in the parks and more reasons to spend time outdoors around Long Eaton.",
      "Mix a walk or family afternoon with a café stop, then check the dated listings for markets and community events.",
    ],
    sections: [
      {
        title: "See West Park wake up",
        copy: "Open lawns, play areas and easy paths make West Park a flexible choice for a short walk or a family afternoon.",
        href: "/discover-long-eaton#west-park",
        linkLabel: "Explore West Park",
      },
      {
        title: "Follow the Erewash Canal",
        copy: "Choose a comfortable stretch of the towpath for fresh air, waterside views and an easy route back into town.",
        href: "/discover-long-eaton#erewash-canal",
        linkLabel: "Discover the canal",
      },
      {
        title: "Make time for local life",
        copy: "Spring markets, community gatherings and café stops are easy to combine into an unhurried day.",
        href: "/events",
        linkLabel: "Browse local events",
      },
    ],
  },
  {
    slug: "summer-in-long-eaton",
    season: "summer",
    title: "Things to do in Long Eaton this summer",
    eyebrow: "Summer guide",
    description:
      "Summer events, outdoor places and family-friendly things to do around Long Eaton.",
    months: [6, 7, 8],
    intro: [
      "Longer days bring outdoor events, community activities and more time to explore Long Eaton on foot or by bike.",
      "This guide combines dated summer events with reliable local places, so it remains useful throughout the season. Check individual listings before travelling because arrangements can change.",
    ],
    sections: [
      {
        title: "Spend time at West Park",
        copy: "West Park has open green space, play areas and easy paths, making it a useful starting point for a family afternoon, a walk or one of the town’s larger summer events.",
        href: "/discover-long-eaton#west-park",
        linkLabel: "Explore West Park",
      },
      {
        title: "Walk beside the water",
        copy: "The Erewash Canal and Trent Lock offer relaxed waterside routes. Choose a distance that suits the weather and allow extra time if you plan to stop nearby.",
        href: "/discover-long-eaton#erewash-canal",
        linkLabel: "See local outdoor places",
      },
      {
        title: "Check the weekend listings",
        copy: "Local performances, markets and community activities change from week to week. The weekend page brings the nearest dates together automatically.",
        href: "/whats-on-this-weekend",
        linkLabel: "See this weekend",
      },
    ],
  },
  {
    slug: "autumn-in-long-eaton",
    season: "autumn",
    title: "Things to do in Long Eaton this autumn",
    eyebrow: "Autumn guide",
    description:
      "Autumn walks, indoor activities and local events in and around Long Eaton.",
    months: [9, 10, 11],
    intro: [
      "Autumn in Long Eaton can work equally well for a crisp canal walk or an indoor performance when the weather turns.",
      "Use the dated listings below for current plans, then keep the indoor and outdoor suggestions as flexible alternatives.",
    ],
    sections: [
      {
        title: "Try an autumn canal walk",
        copy: "The Erewash Canal provides a mostly easy-to-follow local route with changing waterside scenery. Check daylight and conditions before setting out.",
        href: "/discover-long-eaton#erewash-canal",
        linkLabel: "Discover the canal",
      },
      {
        title: "See a local performance",
        copy: "The Duchess Theatre and Chatsworth Arts Centre hosts theatre and entertainment in the town centre. Current productions appear in the main events directory.",
        href: "/events",
        linkLabel: "Browse performances",
      },
      {
        title: "Find a regular group",
        copy: "Weekly and monthly activities continue when one-off outdoor events become less frequent.",
        href: "/events",
        linkLabel: "View regular activities",
      },
    ],
  },
  {
    slug: "winter-in-long-eaton",
    season: "winter",
    title: "Things to do in Long Eaton this winter",
    eyebrow: "Winter guide",
    description:
      "Winter events, indoor entertainment and fresh-air ideas around Long Eaton.",
    months: [12, 1, 2],
    intro: [
      "Winter plans often depend on the weather, so this guide mixes bookable entertainment with simple outdoor options for clearer days.",
      "Christmas and New Year events will appear below when confirmed. Always check the event page and organiser’s link for late changes.",
    ],
    sections: [
      {
        title: "Plan an indoor afternoon",
        copy: "Local theatre, social groups and independent businesses give you options when a long outdoor visit is less appealing.",
        href: "/events",
        linkLabel: "Find indoor events",
      },
      {
        title: "Take a shorter park walk",
        copy: "West Park is convenient for a quick daylight walk. Dress for the conditions and keep to suitable paths after wet weather.",
        href: "/discover-long-eaton#west-park",
        linkLabel: "Explore West Park",
      },
      {
        title: "Support a local business",
        copy: "Combine an event or walk with an independent café, shop or service from the local directory.",
        href: "/businesses",
        linkLabel: "Browse businesses",
      },
    ],
  },
];

export const searchGuides: SearchGuide[] = [
  {
    slug: "best-cafes-in-long-eaton",
    title: "Best Cafés in Long Eaton: Independent Places for Coffee and Food",
    seoTitle: "Best Cafés in Long Eaton: Independent Coffee & Food",
    heading: "Best cafés in Long Eaton: independent places for coffee and food",
    eyebrow: "Local food and drink guide",
    description:
      "Compare independent cafés in Long Eaton for Greek food, Italian brunch, creative activities and takeaway, with local addresses and listing links.",
    intro: [
      "Compare three independent cafés for Greek food, Italian brunch or a creative coffee stop. Check each listing’s official link for current menus and opening times.",
    ],
    lastUpdated: "9 August 2026",
    sections: [
      {
        title: "Caffe-Inna",
        copy: "A café and Greek deli at 21 Market Place, with coffee, Greek food, takeaway and delivery options.",
        href: "/businesses/caffe-inna",
        linkLabel: "View Caffe-Inna",
      },
      {
        title: "Mo' Mo'",
        copy: "A six-table Italian café and bakery at 71 Derby Road, serving breakfast and brunch on Fridays and Saturdays.",
        href: "/businesses/mo-mo-italian-dining",
        linkLabel: "View Mo' Mo'",
      },
      {
        title: "DÜDL",
        copy: "A creative café at 79 College Street combining coffee with crafts, workshops and community events.",
        href: "/businesses/dudl-coffee",
        linkLabel: "View DÜDL",
      },
    ],
    relatedSlugs: ["restaurants-in-long-eaton", "childrens-activities-in-long-eaton", "independent-shops-in-long-eaton"],
    eventTopics: ["cafe", "coffee", "food", "drink", "brunch", "workshop"],
  },
  {
    slug: "restaurants-in-long-eaton",
    title: "Restaurants in Long Eaton: Independent Places to Eat",
    seoTitle: "Restaurants in Long Eaton: Independent Places to Eat",
    heading: "Restaurants in Long Eaton: independent places to eat",
    eyebrow: "Independent restaurant guide",
    description:
      "Compare verified independent restaurants in Long Eaton for Italian dining, shared small plates, coeliac-safe food and daytime or evening service.",
    intro: [
      "Compare two verified independent restaurants: Limas for shared small plates and coeliac-safe dining, or Mo’ Mo’ for intimate Italian meals.",
    ],
    lastUpdated: "9 August 2026",
    sections: [
      {
        title: "Limas",
        copy: "A relaxed restaurant and bar at 115 Derby Road serving shared small plates, with a dedicated coeliac-safe menu.",
        href: "/businesses/limas-long-eaton",
        linkLabel: "View Limas",
      },
      {
        title: "Mo' Mo'",
        copy: "A six-table Italian restaurant at 71 Derby Road, with selected evening dining, Sunday lunch and daytime brunch service.",
        href: "/businesses/mo-mo-italian-dining",
        linkLabel: "View Mo' Mo'",
      },
    ],
    relatedSlugs: ["best-cafes-in-long-eaton", "independent-shops-in-long-eaton"],
    eventTopics: [],
  },
  {
    slug: "childrens-activities-in-long-eaton",
    title: "Children’s Activities in Long Eaton: Clubs, Parks and Days Out",
    seoTitle: "Children’s Activities in Long Eaton: Clubs, Parks & Days Out",
    heading: "Children’s activities in Long Eaton: clubs, parks and days out",
    eyebrow: "Family activity guide",
    description:
      "Find verified children’s activities in Long Eaton, including recurring clubs, free outdoor options and upcoming family events with listing links.",
    intro: [
      "Find recurring clubs, free outdoor places and current children’s events. Ages, prices and schedules are included only where verified.",
    ],
    lastUpdated: "9 August 2026",
    sections: [
      {
        title: "Long Eaton junior parkrun",
        copy: "A free weekly 2k for ages 4 to 14, starting at 9am every Sunday at West Park.",
        href: "/events/long-eaton-junior-parkrun",
        linkLabel: "View junior parkrun details",
        group: "Recurring activity",
      },
      {
        title: "Long Eaton BJJ children’s classes",
        copy: "Regular Brazilian Jiu-Jitsu classes for children at West End Mills. Check the academy’s website for ages, prices and times.",
        href: "/businesses/long-eaton-bjj",
        linkLabel: "View Long Eaton BJJ",
        group: "Recurring activity",
      },
      {
        title: "West Park",
        copy: "A free-to-enter green space with open lawns, play areas and easy paths.",
        href: "/discover-long-eaton#west-park",
        linkLabel: "Explore West Park",
        group: "Outdoor and free",
      },
      {
        title: "Erewash Canal",
        copy: "A free local option for a waterside walk or bike ride. Choose a suitable route and check conditions.",
        href: "/discover-long-eaton#erewash-canal",
        linkLabel: "Explore the Erewash Canal",
        group: "Outdoor and free",
      },
    ],
    relatedSlugs: ["best-cafes-in-long-eaton", "summer-in-long-eaton"],
    eventTopics: ["child", "children", "junior", "family"],
  },
  {
    slug: "independent-shops-in-long-eaton",
    title: "Independent shops in Long Eaton",
    seoTitle: "Independent Shops in Long Eaton: A Local Guide",
    heading: "Independent shops and traders in Long Eaton",
    eyebrow: "Shop local guide",
    description:
      "Explore six independent shops and traders in Long Eaton for books, bridalwear, local food, crafts and town-centre market shopping.",
    intro: [
      "Long Eaton has independent specialists and traders across Market Place, the High Street and surrounding streets. This selection is drawn directly from businesses already listed on Love Long Eaton.",
      "Opening arrangements and market traders can change, so follow the links for current information before making a special journey.",
    ],
    sections: [
      {
        title: "Books on the Bridge",
        copy: "An independent local bookseller sharing books, recommendations and updates with readers in Long Eaton.",
        href: "/businesses/books-on-the-bridge",
        linkLabel: "View Books on the Bridge",
      },
      {
        title: "Long Eaton Market",
        copy: "A traditional town-centre market with a changing selection of independent traders selling food, clothing, books, crafts and household goods.",
        href: "/businesses/long-eaton-market",
        linkLabel: "View Long Eaton Market",
      },
      {
        title: "Bethany Rose Bridal",
        copy: "An appointment-only Market Place boutique offering designer wedding dresses, prom dresses, accessories and an off-the-peg sale room.",
        href: "/businesses/bethany-rose-bridal",
        linkLabel: "View Bethany Rose Bridal",
      },
      {
        title: "The Butchers Long Eaton",
        copy: "A traditional butcher and farm shop in Market Place offering locally sourced meat, deli products, family meat packs and catering.",
        href: "/businesses/the-butchers-long-eaton",
        linkLabel: "View The Butchers",
      },
      {
        title: "Chefs Cut Butchery",
        copy: "A Long Eaton retail butcher supplying regional meat, handmade pies, pastries, terrines and meat boxes from Fields Farm Road.",
        href: "/businesses/chefs-cut-butchery",
        linkLabel: "View Chefs Cut Butchery",
      },
      {
        title: "DÜDL",
        copy: "A creative café and workshop space where visitors can combine coffee with crafts, classes and community events.",
        href: "/businesses/dudl-coffee",
        linkLabel: "View DÜDL",
      },
    ],
    relatedSlugs: ["best-cafes-in-long-eaton"],
    eventTopics: ["market", "shopping", "shop local", "books", "crafts", "makers"],
  },
];

export const guides = [...seasonalGuides, ...searchGuides];
