import type { Season } from "$utils/seasons";

export type SeasonalGuide = {
  slug: string;
  season: Season;
  title: string;
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
  eyebrow: string;
  description: string;
  intro: string[];
  sections: {
    title: string;
    copy: string;
    href: string;
    linkLabel: string;
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
    title: "Best cafés in Long Eaton",
    eyebrow: "Local food and drink guide",
    description:
      "Discover independent cafés in Long Eaton for coffee, café food, creative activities and relaxed daytime visits.",
    intro: [
      "Long Eaton’s independent café choices include a Greek deli in Market Place, an Italian café and bakery on Derby Road, and a creative café on College Street.",
      "This guide only includes venues already listed in the Love Long Eaton directory. Check each venue’s own website or social pages for current menus, opening hours and booking details before visiting.",
    ],
    sections: [
      {
        title: "Caffe-Inna",
        copy: "An independent café and Greek deli in Market Place serving coffee, café favourites and Greek food, with takeaway and delivery options available.",
        href: "/businesses/caffe-inna",
        linkLabel: "View Caffe-Inna",
      },
      {
        title: "Mo' Mo'",
        copy: "An intimate Italian café, restaurant and bakery on Derby Road offering coffee alongside Friday and Saturday breakfast and brunch, plus selected evening and Sunday dining.",
        href: "/businesses/mo-mo-italian-dining",
        linkLabel: "View Mo' Mo'",
      },
      {
        title: "DÜDL",
        copy: "A creative café on College Street combining coffee with hands-on crafts, workshops, creative evenings and community events.",
        href: "/businesses/dudl-coffee",
        linkLabel: "View DÜDL",
      },
    ],
    relatedSlugs: ["independent-shops-in-long-eaton"],
    eventTopics: ["cafe", "coffee", "food", "drink", "brunch", "workshop"],
  },
  {
    slug: "independent-shops-in-long-eaton",
    title: "Independent shops in Long Eaton",
    eyebrow: "Shop local guide",
    description:
      "Find independent shops and traders in Long Eaton, including books, bridalwear, local food, crafts and the town-centre market.",
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
