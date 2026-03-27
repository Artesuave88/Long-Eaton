const carBootBase = {
  title: "Long Eaton Carnival Car Boot Sale",
  time: "Sellers from 7:00 AM, buyers from 8:00 AM",
  startTime: "7:00 AM seller setup",
  location: "Event Field, West Park, Long Eaton",
  price: "Free entry on foot",
  priceSummary: "Sellers: Car £8, car plus trailer or large van £11. Buyers on foot free, on-site parking £1.",
  organiser: "Long Eaton Carnival committee",
  tags: ["Car Boot", "West Park", "Fundraising", "Community"],
  category: "Markets",
  description: [
    "Long Eaton Carnival's car boot sales return to West Park on selected Sundays through spring and summer.",
    "Sellers can set up from 7am and there is no booking required. Buyers can come in from 8am, with free entry on foot and on-site parking for £1.",
    "All proceeds go to the Carnival fund."
  ],
  sellerInfo: [
    "Setup from 7am.",
    "No booking required.",
    "Car: £8.",
    "Car plus trailer or large van: £11."
  ],
  buyerInfo: [
    "Gates open at 8am.",
    "Free entry on foot.",
    "On-site parking: £1."
  ],
  fundraisingNote: "All proceeds go to the Carnival fund.",
  locationNote: "The field is opposite George's Fish and Chip shop.",
  relatedDates: [
    { title: "Planned car boot sale", date: "2026-04-12" },
    { title: "Planned car boot sale", date: "2026-05-17" },
    { title: "Planned car boot sale", date: "2026-06-21" },
    { title: "Planned car boot sale", date: "2026-07-19" },
    { title: "Planned car boot sale", date: "2026-08-16" },
    { title: "Planned car boot sale", date: "2026-09-20" },
    { title: "Planned car boot sale", dateLabel: "October 2026", note: "TBC" }
  ],
  imageLabel: "Car boot stalls on West Park",
  imageStyle: "bg-brand-section",
  image: {
    label: "Car boot stalls on West Park",
    style: "bg-brand-section"
  },
  sourceName: "Long Eaton Carnival car boots page",
  sourceUrl: "https://www.longeatoncarnival.org.uk/car-boots/"
};
const events = [
  {
    id: "event-long-eaton-carnival-car-boot-2026-04-12",
    slug: "long-eaton-carnival-car-boot-sale-12-april-2026",
    excerpt: "The first planned 2026 Long Eaton Carnival car boot sale is due at West Park on Sunday 12 April.",
    date: "2026-04-12",
    featured: true,
    ...carBootBase
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-05-17",
    slug: "long-eaton-carnival-car-boot-sale-17-may-2026",
    excerpt: "Long Eaton Carnival's May car boot sale is planned for Sunday 17 May at West Park.",
    date: "2026-05-17",
    ...carBootBase
  },
  {
    id: "event-long-eaton-carnival",
    slug: "long-eaton-carnival",
    title: "Long Eaton Carnival",
    date: "2026-06-20",
    time: "Parade from 11:00 AM, returning around 12:30 PM to 1:00 PM",
    startTime: "11:00 AM",
    approximateReturnTime: "Around 12:30 PM to 1:00 PM",
    location: "Road parade through Long Eaton, followed by events on West Park",
    price: "Free entry to the main carnival site",
    organiser: "Long Eaton Carnival volunteers",
    strapline: "Bringing Long Eaton people together as a community",
    tags: ["Carnival", "Parade", "Community", "West Park", "Through the Decades"],
    category: "Community",
    excerpt: "Long Eaton Carnival returns on Saturday 20 June with the road parade through town before events continue on West Park.",
    description: [
      "The 2026 theme is Through the Decades. The day starts with the road parade through town before displays and events continue on West Park.",
      "The parade starts at 11am and returns to the carnival site at around 12:30pm to 1:00pm. The main carnival site is free to enter."
    ],
    imageLabel: "Carnival parade",
    imageStyle: "bg-brand-section",
    image: {
      label: "Carnival parade",
      style: "bg-brand-section"
    },
    sourceName: "Long Eaton Carnival homepage",
    volunteerRun: true,
    relatedDates: [
      { title: "Car boot sale", date: "2026-04-12" },
      { title: "Car boot sale", date: "2026-05-17" },
      { title: "Car boot sale", date: "2026-06-21" },
      { title: "Car boot sale", date: "2026-07-19" },
      { title: "Car boot sale", date: "2026-08-16" },
      { title: "Car boot sale", date: "2026-09-20" },
      { title: "Car boot sale", dateLabel: "October 2026", note: "TBC" }
    ],
    featured: true
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-06-21",
    slug: "long-eaton-carnival-car-boot-sale-21-june-2026",
    excerpt: "The June Long Eaton Carnival car boot sale is planned for Sunday 21 June at West Park.",
    date: "2026-06-21",
    ...carBootBase
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-07-19",
    slug: "long-eaton-carnival-car-boot-sale-19-july-2026",
    excerpt: "Long Eaton Carnival's July car boot sale is due on Sunday 19 July at West Park.",
    date: "2026-07-19",
    ...carBootBase
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-08-16",
    slug: "long-eaton-carnival-car-boot-sale-16-august-2026",
    excerpt: "Long Eaton Carnival's August car boot sale is planned for Sunday 16 August at West Park.",
    date: "2026-08-16",
    ...carBootBase
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-09-20",
    slug: "long-eaton-carnival-car-boot-sale-20-september-2026",
    excerpt: "The September Long Eaton Carnival car boot sale is planned for Sunday 20 September at West Park.",
    date: "2026-09-20",
    ...carBootBase
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-10",
    slug: "long-eaton-carnival-car-boot-sale-october-2026-tbc",
    excerpt: "A further Long Eaton Carnival car boot sale is listed for October 2026, with the date still to be confirmed.",
    dateLabel: "October 2026",
    isTbc: true,
    ...carBootBase,
    time: "Date to be confirmed"
  }
];
const getEventSortValue = (event) => {
  if (event.date) {
    return new Date(event.date).getTime();
  }
  if (event.dateLabel?.includes("October 2026")) {
    return (/* @__PURE__ */ new Date("2026-10-01")).getTime();
  }
  return Number.MAX_SAFE_INTEGER;
};
const sortedEvents = [...events].sort((a, b) => getEventSortValue(a) - getEventSortValue(b));
const eventCategories = [
  "All",
  ...new Set(sortedEvents.map((event) => event.category))
];
export {
  eventCategories as e,
  sortedEvents as s
};
