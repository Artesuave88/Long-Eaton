import type { EventItem } from "$types/content";

// Reviewed 23 November 2026 against the linked organiser/booking sources.
// Venue photographs and logos are labelled as such, rather than as show artwork.
const theatreEvents: EventItem[] = [
  {
    id: "event-shadowing-hank-2026-11-23",
    slug: "shadowing-hank-duchess-theatre-23-november-2026",
    title: "Shadowing Hank — Hank Marvin Tribute",
    date: "2026-11-23",
    time: "7:30–10pm",
    startTime: "19:30",
    endTime: "22:00",
    performer: "Justin Daish",
    price: "£18 — check booking fees",
    category: "Live Music",
    excerpt: "Guitarist Justin Daish performs music from Hank Marvin and The Shadows, including Apache and Wonderful Land.",
    description: ["The tribute combines guitar playing, vocals and humour, with music spanning The Shadows’ hits and Hank Marvin’s solo career."],
    sourceUrl: "https://www.ticketsource.com/chatsworth/shadowing-hank-hank-marvin-tribute/e-mvxkqz",
    imageLabel: "Duchess Theatre — venue photograph",
    imageStyle: "bg-brand-section"
  },
  {
    id: "event-rat-pack-2026-11-25",
    slug: "rat-pack-christmas-duchess-theatre-25-november-2026",
    title: "The Rat Pack — Christmas in Las Vegas Tribute",
    date: "2026-11-25",
    time: "7:30–10pm",
    startTime: "19:30",
    endTime: "22:00",
    price: "£22 — check booking fees",
    category: "Live Music",
    excerpt: "A festive tribute to Frank Sinatra, Dean Martin and Sammy Davis Jr, mixing swing favourites with Christmas songs.",
    description: ["David Alacey, Tim Harwood and Jim Whitley perform with the Buddy Greco All-stars in a show inspired by the Rat Pack’s Las Vegas era."],
    sourceUrl: "https://www.ticketsource.com/chatsworth/the-rat-pack-christmans-in-las-vegas-tribute/e-arxjzb",
    imageLabel: "Duchess Theatre — venue photograph",
    imageStyle: "bg-brand-section"
  },
  {
    id: "event-abba-sensation-2026-11-26",
    slug: "abba-sensation-duchess-theatre-26-november-2026",
    title: "ABBA Sensation — Tribute Band",
    date: "2026-11-26",
    time: "7:30pm",
    startTime: "19:30",
    status: "Sold out — check the organiser’s waiting list",
    price: "Sold out",
    category: "Live Music",
    excerpt: "Sensation perform ABBA favourites at the Duchess Theatre. The booking page currently lists this show as sold out.",
    description: ["The TicketSource page offers a waiting list. Use the official event details link to check for returns or changes in availability."],
    sourceUrl: "https://www.ticketsource.com/chatsworth/abba-sensation-tribute-band/e-pdezbq",
    imageLabel: "Duchess Theatre — venue photograph",
    imageStyle: "bg-brand-section"
  },
  {
    id: "event-knees-up-2026-11-28",
    slug: "knees-up-mother-brown-duchess-theatre-28-november-2026",
    title: "Knees-Up Mother Brown — Johnny Victory",
    date: "2026-11-28",
    time: "7:30–10pm",
    startTime: "19:30",
    endTime: "22:00",
    performer: "Johnny Victory",
    price: "£13 — check booking fees",
    category: "Entertainment / Music",
    excerpt: "A vintage singalong evening with Johnny Victory, from music hall songs to wartime favourites and hits of the 1950s and 1960s.",
    description: ["Audience participation and familiar songs are central to this nostalgic variety show."],
    sourceUrl: "https://www.ticketsource.com/chatsworth/knees-up-mother-brown-johnny-victory-vintage-entertainer/e-pdzelk",
    imageLabel: "Duchess Theatre — venue photograph",
    imageStyle: "bg-brand-section"
  }
].map((event): EventItem => ({
  location: "Duchess Theatre & Chatsworth Arts Centre, West Gate, Long Eaton, NG10 1EF",
  organiser: "Duchess Theatre & Chatsworth Arts Centre",
  imageSrc: "/duchess-theatre-exterior.jpg",
  imageAlt: "Exterior of the Duchess Theatre & Chatsworth Arts Centre in Long Eaton",
  relatedLinks: [{ href: "/businesses/duchess-theatre-chatsworth-arts-centre", label: "About the venue" }],
  checkedOn: "2026-11-23",
  ...event,
  ticketUrl: event.status ? undefined : event.sourceUrl,
  sources: [{ label: "Duchess Theatre — official TicketSource event details", href: event.sourceUrl }]
}));

export const novemberEvents: EventItem[] = [
  ...theatreEvents,
  {
    id: "event-business-christmas-social-2026-11-24",
    slug: "long-eaton-business-christmas-social-24-november-2026",
    title: "Long Eaton Business Partnership Christmas Social",
    date: "2026-11-24",
    time: "5:30–8pm",
    startTime: "17:30",
    endTime: "20:00",
    location: "Limas, 115–117 Derby Road, Long Eaton, NG10 4LA",
    organiser: "Long Eaton Business Partnership",
    organiserUrl: "https://www.longeaton.org/",
    audience: "Business owners, managers and self-employed people living or working in and around Long Eaton",
    category: "Community / Business",
    excerpt: "Meet other local business people for a relaxed pre-Christmas evening at Limas.",
    description: ["There is no speaker or formal agenda. Partnership membership is not required, and new attendees are welcome. Check the organiser’s booking page before attending."],
    ticketUrl: "https://www.eventbrite.com/e/long-eaton-business-partnership-christmas-social-tickets-2002198523682",
    sourceUrl: "https://www.eventbrite.com/e/long-eaton-business-partnership-christmas-social-tickets-2002198523682",
    checkedOn: "2026-11-23",
    sources: [{ label: "Long Eaton Business Partnership — official Christmas social booking page", href: "https://www.eventbrite.com/e/long-eaton-business-partnership-christmas-social-tickets-2002198523682" }],
    imageSrc: "/limas-logo.png",
    imageAlt: "Limas Restaurant and Bar logo — Christmas social venue",
    imageFit: "contain",
    imageLabel: "Christmas social at Limas",
    imageStyle: "bg-brand-section",
    relatedLinks: [{ href: "/businesses/limas-long-eaton", label: "About Limas" }]
  },
  {
    id: "event-christmas-lights-2026-11-26",
    slug: "long-eaton-christmas-lights-26-november-2026",
    title: "Long Eaton Christmas Lights Switch-On",
    date: "2026-11-26",
    time: "5:30–8:30pm · lights switch on at 7pm",
    startTime: "17:30",
    endTime: "20:30",
    location: "Long Eaton town centre",
    organiser: "Erewash Borough Council",
    category: "Community / Christmas",
    tags: ["Christmas", "Lights", "Family", "Town centre"],
    excerpt: "Festive celebrations from 5:30–8:30pm on Thursday 26 November, with the lights switched on at 7pm.",
    description: [
      "Erewash Borough Council confirms celebrations from 5:30–8:30pm, with the lights switched on at 7pm. Jamie Bigg, formerly Giant on Gladiators, joins Santa for the countdown. Expect brass band music, stage entertainment, stalls and fairground rides.",
      "Town-centre improvement works mean a smaller funfair this year. The council recommends travelling by public transport."
    ],
    sessions: [
      { title: "Celebrations and entertainment", time: "5:30–8:30pm" },
      { title: "Christmas lights switch-on", time: "7pm" }
    ],
    sourceUrl: "https://www.erewash.gov.uk/your-borough/events-erewash/christmas-lights-switch",
    checkedOn: "2026-11-23",
    sources: [
      { label: "Erewash Borough Council — confirmed programme and travel advice", href: "https://www.erewash.gov.uk/your-borough/events-erewash/christmas-lights-switch" },
      { label: "Erewash Borough Council — official poster with start, finish and switch-on times", href: "https://www.erewash.gov.uk/sites/default/files/2026-11/Xmas%20lights%20switch-ons%20poster_0.jpg" }
    ],
    imageSrc: "/editorial/christmas-lights-switch-on-2026.jpg",
    imageAlt: "Erewash Christmas lights poster advertising Long Eaton on Thursday 26 November, 5:30–8:30pm, with the switch-on at 7pm",
    imageCredit: "Erewash Borough Council — official Christmas lights switch-on poster",
    imageLabel: "Long Eaton Christmas Lights Switch-On — official poster",
    imageFit: "contain",
    imageStyle: "bg-brand-section",
    featured: false
  }
];
