import type { NewsItem } from "$types/content";

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    slug: "spring-guide-to-shopping-local",
    title: "A Spring Guide to Shopping Local in Long Eaton",
    date: "2026-03-18",
    excerpt:
      "A few straightforward ways to spend a Saturday around the shops and cafes in town.",
    content: [
      "Spring usually brings a small refresh to shop windows, menus and displays across the town centre.",
      "If you're heading in anyway, it's a good time to pair a browse with a coffee stop and a walk round a few independents you don't usually visit.",
    ],
    imageLabel: "Shop local",
    imageStyle: "from-sun/70 via-white to-brand-100",
  },
  {
    id: "news-2",
    slug: "community-groups-bring-west-park-to-life",
    title: "Community Groups Bring West Park to Life This Month",
    date: "2026-03-11",
    excerpt:
      "From meet-ups to outdoor sessions, West Park is seeing more regular local use.",
    content: [
      "West Park keeps cropping up in more local plans, from informal family meet-ups to fitness sessions and small community events.",
      "That steady use matters because it makes the park feel lived-in rather than only busy on larger event days.",
    ],
    imageLabel: "Community park",
    imageStyle: "from-brand-500 via-brand-100 to-sand",
  },
  {
    id: "news-3",
    slug: "new-offers-across-town-centre",
    title: "New Offers Across the Town Centre",
    date: "2026-03-05",
    excerpt:
      "Several cafes, studios and shops are running simple seasonal offers this month.",
    content: [
      "A handful of businesses across the centre have added short spring offers, from lunch deals to first-visit discounts.",
      "They are modest, but they give people another reason to call into places they may not have tried before.",
    ],
    imageLabel: "Town offers",
    imageStyle: "from-coral/90 via-sand to-white",
  },
];
