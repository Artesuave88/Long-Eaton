import type { Season } from "$utils/seasons";
import type { ContentSource, VisitSection } from "$types/content";

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
  planning?: VisitSection[];
  sources?: ContentSource[];
  comparison?: {
    caption: string;
    rows: { name: string; href: string; suits: string; check: string }[];
  };
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
    comparison: {
      "caption": "Choose a café around the visit you want",
      "rows": [
        {
          "name": "Caffe-Inna",
          "href": "/businesses/caffe-inna",
          "suits": "A Market Place stop for coffee or Greek deli food",
          "check": "Ask about the current menu and opening times through its official Instagram."
        },
        {
          "name": "Mo’ Mo’",
          "href": "/businesses/mo-mo-italian-dining",
          "suits": "A planned Italian breakfast or brunch",
          "check": "The published brunch service is Friday and Saturday, 9:30am–1pm."
        },
        {
          "name": "DÜDL",
          "href": "/businesses/dudl-coffee",
          "suits": "Coffee combined with a creative activity",
          "check": "Check whether the activity needs its own booking and what the ticket includes."
        }
      ]
    },
    planning: [
      {
        "title": "Start with the day, then choose the café",
        "copy": "For a casual town-centre visit, start with the Market Place listings and confirm the café is open. For a specific breakfast or brunch, choose the service before planning the rest of your morning: an evening restaurant menu does not imply daily breakfast service. Mo’ Mo’ publishes different menus for brunch, pizza evenings and Sunday lunch, so use the menu for the day you intend to go."
      },
      {
        "title": "Combine coffee with something nearby",
        "copy": "A Market Place coffee stop can fit around town-centre shopping. DÜDL on College Street is a different kind of outing when you want to make something as well as have a drink. Read the individual activity listing before deciding that a workshop is suitable for your group; a general café listing cannot establish the age range, duration or materials for every session."
      },
      {
        "title": "What this comparison covers",
        "copy": "These are different types of independent café, selected from our local directory. This is a planning comparison, not a ranked taste test. We have not assigned scores, made personal-visit claims or assumed that any venue has a particular dietary menu or access arrangement. For those needs, contact the business before committing to a visit."
      }
    ],
    sources: [
      {
        "label": "Mo’ Mo’ — menus, service times and reservations",
        "href": "https://www.momonottingham.co.uk/"
      }
    ],
    lastUpdated: "11 September 2026",
    title: "Cafés in Long Eaton: Independent Places for Coffee and Food",
    seoTitle: "Cafés in Long Eaton: Independent Coffee & Food",
    heading: "Cafés in Long Eaton for independent coffee and food",
    eyebrow: "Local food and drink guide",
    description:
      "Compare independent cafés in Long Eaton for Greek food, Italian brunch, creative activities and takeaway, with local addresses and listing links.",
    intro: [
      "Looking for a café in Long Eaton? Compare three independent places for Greek food, Italian brunch or a creative coffee stop, then use each business listing to find its address and official link.",
    ],
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
    description: "Compare Limas and Mo’ Mo’ on Derby Road by dining style, booking arrangements and service times, with official menu links.",
    intro: [
      "Two independent Derby Road restaurants offer quite different evenings: shared small plates at Limas, or a small Italian dining room at Mo’ Mo’. Choose around how your group likes to eat, then check the current menu and availability."
    ],
    comparison: {
      "caption": "Two Derby Road restaurants compared",
      "rows": [
        {
          "name": "Limas",
          "href": "/businesses/limas-long-eaton",
          "suits": "Sharing several dishes, served as each is ready",
          "check": "115 Derby Road. Check food booking times, which differ from overall opening hours."
        },
        {
          "name": "Mo’ Mo’",
          "href": "/businesses/mo-mo-italian-dining",
          "suits": "An Italian meal in a six-table dining room",
          "check": "71 Derby Road. Contact the restaurant directly for groups of more than four."
        }
      ]
    },
    planning: [
      {
        "title": "Choose the dining style for your group",
        "copy": "Limas describes its food as small plates cooked to order and brought out when ready. That suits a table happy to share and eat at a flexible pace. If you want everyone to have an individual dish at the same time, discuss that preference when booking. Mo’ Mo’ changes the offer with the service: Thursday pizza and aperitivo, Friday and Saturday evening dining, and Sunday lunch."
      },
      {
        "title": "Book around the kitchen service",
        "copy": "A restaurant being open does not always mean the kitchen is taking orders. Limas publishes separate food booking windows, including an afternoon break on Thursdays and Fridays. Mo’ Mo’ asks larger groups to call or email first and reserves evening tables for the whole evening. Decide your group size and arrival time before checking availability, especially if you are eating before a show."
      },
      {
        "title": "Dietary requirements and access",
        "copy": "Limas describes itself as a dedicated coeliac-safe restaurant. That is the restaurant’s own statement; discuss your requirements directly when booking. Do the same for allergies, other dietary needs and access at either venue. This comparison covers published arrangements rather than a first-hand restaurant review, and current menus should take precedence over an older listing."
      }
    ],
    sources: [
      {
        "label": "Limas — menus, food booking times and dietary information",
        "href": "https://limas.uk/"
      },
      {
        "label": "Mo’ Mo’ — menus and group booking arrangements",
        "href": "https://www.momonottingham.co.uk/"
      }
    ],
    lastUpdated: "11 September 2026",
    title: "Restaurants in Long Eaton: Independent Places to Eat",
    seoTitle: "Restaurants in Long Eaton: Independent Places to Eat",
    heading: "Restaurants in Long Eaton: independent places to eat",
    eyebrow: "Independent restaurant guide",


    sections: [
      {
        title: "Limas",
        copy: "A restaurant and bar at 115 Derby Road serving shared small plates. The restaurant describes its menu as coeliac-safe; discuss dietary requirements when booking.",
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
    description: "Compare free outdoor time, junior parkrun and organised children’s classes in Long Eaton, with planning advice and current event links.",
    intro: [
      "Start with the kind of outing your child wants: a scheduled activity with a group, a class to return to each week, or outdoor time with room to change your plans. These options differ in cost, commitment and the amount of preparation needed."
    ],
    comparison: {
      "caption": "Choose by cost and commitment",
      "rows": [
        {
          "name": "Junior parkrun",
          "href": "/events/long-eaton-junior-parkrun",
          "suits": "A free Sunday morning 2k for children aged 4–14",
          "check": "Register with parkrun and bring a scannable barcode for a recorded result."
        },
        {
          "name": "Long Eaton BJJ",
          "href": "/businesses/long-eaton-bjj",
          "suits": "A regular, coached martial-arts class",
          "check": "Ask about the right junior group, a trial, kit and the ongoing cost."
        },
        {
          "name": "West Park",
          "href": "/discover-long-eaton#west-park",
          "suits": "An outdoor visit with a flexible start and finish",
          "check": "Plan around the weather and check seasonal facilities separately."
        },
        {
          "name": "Erewash Canal",
          "href": "/discover-long-eaton#erewash-canal",
          "suits": "A waterside walk at your own pace",
          "check": "Choose a manageable out-and-back route and supervise children near water."
        }
      ]
    },
    planning: [
      {
        "title": "For a first organised activity",
        "copy": "Ask what happens in the first session, whether a parent stays, what equipment is needed and how to arrange a trial. A martial-arts class and junior parkrun involve different commitments; comparing only the start time misses the cost of regular classes and any equipment. For parkrun, registration is free and your barcode can be used again at future events."
      },
      {
        "title": "For a flexible outdoor afternoon",
        "copy": "Choose one place as the main outing and decide how long you want to be out before adding a second stop. At Trent Lock in Sawley, the Canal & River Trust lists no public toilets on site. Build that into a family plan rather than assuming a waterside destination has the same facilities as a park. With a pushchair, check the route and current conditions instead of relying on a general description of a towpath."
      },
      {
        "title": "Keep holiday activities separate from weekly clubs",
        "copy": "A summer club can meet every week and still finish when the school holiday ends. The dated events below are filtered against their final advertised date. Use them for specific sessions, and use the recurring listings above for ongoing options. Check an organiser’s latest notice for cancellations before travelling."
      }
    ],
    sources: [
      {
        "label": "parkrun — registration and barcodes",
        "href": "https://support.parkrun.com/hc/en-us/articles/205595392-1-1-How-do-I-register-for-parkrun"
      },
      {
        "label": "Long Eaton BJJ — current junior timetable",
        "href": "https://www.longeatonbjj.co.uk/timetable"
      },
      {
        "label": "Canal & River Trust — Trent Lock visitor facilities",
        "href": "https://canalrivertrust.org.uk/canals-and-rivers/places-to-visit/trent-lock"
      }
    ],
    lastUpdated: "11 September 2026",
    title: "Children’s Activities in Long Eaton: Clubs, Parks and Days Out",
    seoTitle: "Children’s Activities in Long Eaton: Clubs, Parks & Days Out",
    heading: "Children’s activities in Long Eaton: clubs, parks and days out",
    eyebrow: "Family activity guide",


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
    comparison: {
      "caption": "Plan the right kind of shopping trip",
      "rows": [
        {
          "name": "Long Eaton Market",
          "href": "/businesses/long-eaton-market",
          "suits": "Browsing a range of town-centre traders",
          "check": "Wednesday, Friday and Saturday; a smaller flea market on Tuesday. Weather can affect trading."
        },
        {
          "name": "Bethany Rose Bridal",
          "href": "/businesses/bethany-rose-bridal",
          "suits": "An appointment for bridalwear",
          "check": "Arrange a fitting before making a special journey."
        },
        {
          "name": "The Butchers / Chefs Cut",
          "href": "/businesses/the-butchers-long-eaton",
          "suits": "Shopping for food or planning an order",
          "check": "The Butchers is in Market Place; Chefs Cut is on the Sheet Stores estate off Fields Farm Road."
        },
        {
          "name": "Books on the Bridge",
          "href": "/businesses/books-on-the-bridge",
          "suits": "Finding local bookseller updates",
          "check": "Our listing has an Instagram contact, but no confirmed shop address or public opening hours."
        }
      ]
    },
    planning: [
      {
        "title": "Make the market part of a town-centre trip",
        "copy": "The council lists the main Long Eaton market on Wednesday, Friday and Saturday, with a small Tuesday flea market. The published hours are 9am–3pm, weather permitting. If the market is the main reason for your visit, choose one of those days and allow time before closing. Stallholders vary; check directly if you are travelling for a particular product."
      },
      {
        "title": "Separate browsing from appointments and orders",
        "copy": "A bridal appointment, a butcher’s order and a market browse need different preparation. For an appointment, agree the time and what to bring. For a food order, check the collection point, quantity and notice needed. For an industrial-estate business such as Chefs Cut, plan the address separately rather than assuming it sits among the Market Place shops."
      },
      {
        "title": "Use the directory without making assumptions",
        "copy": "The entries below are a starting point for contacting local businesses, rather than a guarantee of stock or daily opening. Books on the Bridge currently has no confirmed street address in our directory, so contact it before planning a visit. DÜDL is included for creative activities and supplies associated with workshops; check what is available to buy before treating it as a general craft shop."
      }
    ],
    sources: [
      {
        "label": "Erewash Borough Council — market days and hours",
        "href": "https://www.erewash.gov.uk/businesses-and-licensing/markets-and-car-boot-sales/erewash-markets"
      }
    ],
    lastUpdated: "11 September 2026",
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
