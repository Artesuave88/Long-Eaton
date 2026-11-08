import type { EventItem } from "$types/content";

// Compiled from organiser sources. Each checkedOn date records source review;
// unknown details are omitted rather than inferred from third-party listings.
export const localAutumnEvents: EventItem[] = [
  {
    id: "event-photography-zero-2026-11-29",
    slug: "photography-zero-long-eaton-art-room-29-november-2026",
    title: "Photography Zero: A Free Introduction to Photography",
    date: "2026-11-29",
    time: "10am–1pm",
    startTime: "10:00",
    endTime: "13:00",
    location: "Long Eaton Art Room, 29–31 Lime Grove, Long Eaton, NG10 4LD",
    organiser: "Nick Archer — Nickarc Photography",
    category: "Learning / Crafts",
    tags: ["Photography", "Free", "Workshop", "Beginners"],
    audience: "Adults and young people; under-16s need a parent or guardian",
    price: "Free — book through the organiser",
    excerpt: "A beginner-friendly introduction to photography with Nick Archer.",
    description: ["The workshop combines an indoor introduction with practical photography. Bring a camera or smartphone and dress for the weather. The organiser recommends the session for children aged eight and above.", "Confirm the outdoor route before attending: the booking page names both Long Eaton and Nottingham city centre. Poor weather may mean staying indoors."],
    ticketUrl: "https://www.eventbrite.co.uk/e/photography-zero-long-eaton-art-room-a-free-introduction-to-photography-tickets-2003357874331",
    sourceUrl: "https://www.eventbrite.co.uk/e/photography-zero-long-eaton-art-room-a-free-introduction-to-photography-tickets-2003357874331",
    checkedOn: "2026-10-16",
    sources: [{ label: "Nick Archer — official Long Eaton workshop booking page", href: "https://www.eventbrite.co.uk/e/photography-zero-long-eaton-art-room-a-free-introduction-to-photography-tickets-2003357874331" }],
    imageSrc: "/editorial/photography-zero.jpg",
    imageAlt: "Photography Zero workshop banner with a stone trig point overlooking hills",
    imageFit: "contain",
    imageCredit: "Nick Archer / Nickarc Photography — Eventbrite workshop banner",
    imageLabel: "Discover photography at Long Eaton Art Room",
    imageStyle: "bg-brand-section"
  },
  {
    id: "event-west-park-bike-marking-2026-12-05",
    slug: "bike-marking-west-park-5-december-2026",
    title: "Bike Marking at West Park",
    date: "2026-12-05",
    time: "12–2pm",
    startTime: "12:00",
    endTime: "14:00",
    location: "West Park, Long Eaton",
    organiser: "Long Eaton South Safer Neighbourhood Team, Derbyshire Constabulary",
    category: "Community",
    tags: ["Cycling", "Bikes", "Police", "West Park"],
    excerpt: "Bring your bicycle for marking by the Long Eaton South policing team.",
    description: ["The police listing does not specify a meeting point within the park, a charge or booking requirements. Check with the neighbourhood team before bringing your bicycle."],
    sourceUrl: "https://www.derbyshire.police.uk/area/your-area/derbyshire/erewash/long-eaton-south/meetings-and-events/our-priorities",
    checkedOn: "2026-10-10",
    sources: [{ label: "Derbyshire Constabulary — Long Eaton South meetings and events", href: "https://www.derbyshire.police.uk/area/your-area/derbyshire/erewash/long-eaton-south/meetings-and-events/our-priorities" }],
    imageSrc: "/editorial/bike-marking-illustration.svg",
    imageAlt: "Illustration of a green bicycle with a security tag",
    imageCredit: "Love Long Eaton illustration",
    imageLabel: "Community bike marking",
    imageStyle: "bg-brand-section"
  }
];
