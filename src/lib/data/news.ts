import type { NewsItem } from "$types/content";

export const newsItems: NewsItem[] = [
  {
    id: "free-summer-bus-travel-2026",
    title: "Free bus travel for young people this August",
    date: "2026-07-28",
    excerpt:
      "Children and young people can travel free on eligible trentbarton services throughout August 2026.",
    content: [
      "Children aged 5 to 15 can travel free on trentbarton services from 1 to 31 August 2026 as part of the Government’s free bus travel scheme. The offer excludes red arrow and nightbus journeys.",
      "The East Midlands Combined County Authority has also extended free travel to 16 to 18 year olds on routes that enter Derbyshire, Nottinghamshire, Derby or Nottingham. Red arrow is excluded from this extension too.",
      "Mango customers can tap on and off as usual. Other passengers can ask the driver for a free single ticket. Proof of age is required, and children under 11 must travel with a responsible person.",
    ],
    imageSrc: "/free-summer-bus-travel-2026.jpg",
    imageAlt:
      "UK Government poster advertising free summer bus travel for 5 to 18 year olds from 1 to 31 August 2026",
    imageFit: "contain",
    imageLabel: "Free summer bus travel",
    imageStyle: "bg-brand-accent/10",
    sourceUrl:
      "https://www.trentbarton.co.uk/news-and-media/our-news/article/summerfare2026",
    sourceLabel: "Read the full trentbarton announcement",
  },
];
