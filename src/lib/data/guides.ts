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
