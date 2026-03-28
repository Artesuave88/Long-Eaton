import type { EventItem } from "$types/content";
import duchessTheatre from "$data/imported/duchess-theatre.json";
import duchessTheatreEvents from "$data/imported/duchess-theatre-events.json";
import {
  getCategories,
  getRegularEvents,
  getUpcomingEvents,
  sortEvents,
} from "$data/listings";

type ImportedShow = {
  title: string;
  url: string | null;
  imageUrl?: string | null;
  startDate?: string;
  endDate?: string;
};

type ImportedVenue = {
  name: string;
  address: string;
  sourceUrl: string;
  volunteerRun: boolean;
};

const includeDuchessEvents = true;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isShowCurrent(show: ImportedShow): boolean {
  if (!show.endDate && !show.startDate) {
    return true;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const endDate = new Date(show.endDate ?? show.startDate ?? "");
  endDate.setHours(0, 0, 0, 0);

  return Number.isNaN(endDate.getTime()) ? true : endDate >= today;
}

function formatDateLabel(show: ImportedShow): string | undefined {
  if (!show.startDate || !show.endDate || show.startDate === show.endDate) {
    return undefined;
  }

  return `${show.startDate} to ${show.endDate}`;
}

function createImportedEvent(
  show: ImportedShow,
  index: number,
  venue: ImportedVenue,
): EventItem {
  const venueName = venue.name || "Duchess Theatre & Chatsworth Arts Centre";

  return {
    id: `event-imported-duchess-theatre-${index + 1}`,
    slug: `duchess-theatre-${slugify(show.title)}`,
    title: show.title,
    date: show.startDate,
    dateLabel:
      formatDateLabel(show) ??
      (!show.startDate ? "See source listing" : undefined),
    time: "See source listing",
    location: venue.address || "West Gate, Long Eaton, Derbyshire, NG10 1EF",
    organiser: venueName,
    ticketUrl: show.url ?? undefined,
    category: "Entertainment",
    excerpt: show.title,
    description: [],
    imageSrc: show.imageUrl ?? "/duchess-theatre.webp",
    imageAlt: show.title,
    imageLabel: show.title,
    imageStyle: "bg-brand-accent/10",
    sourceUrl: venue.sourceUrl,
    volunteerRun: venue.volunteerRun,
    relatedDates:
      show.endDate && show.startDate && show.endDate !== show.startDate
        ? [{ title: "Final listed date", date: show.endDate }]
        : undefined,
    featured: false,
  };
}

const optionalImportedEvents: EventItem[] = includeDuchessEvents
  ? duchessTheatreEvents
      .filter((show) => show.title && show.url)
      .filter((show) => isShowCurrent(show))
      .map((show, index) => createImportedEvent(show, index, duchessTheatre))
  : [];

const longEatonArtRoomLogo = "/art-room.png";

const carBootBase = {
  title: "Long Eaton Car Boot Sale",
  time: "Sellers from 7:00 AM, buyers from 8:00 AM",
  startTime: "7:00 AM seller setup",
  location: "Event Field, West Park, Long Eaton",
  price: "Free entry on foot",
  priceSummary:
    "Sellers: Car £8, car plus trailer or large van £11. Buyers on foot free, on-site parking £1.",
  organiser: "Long Eaton Carnival committee",
  tags: ["Car Boot", "West Park", "Fundraising", "Community"],
  category: "Markets",
  description: [
    "Long Eaton Carnival's car boot sales return to West Park on selected Sundays through spring and summer.",
    "Sellers can set up from 7am and there is no booking required. Buyers can come in from 8am, with free entry on foot and on-site parking for £1.",
    "All proceeds go to the Carnival fund.",
  ],
  sellerInfo: [
    "Setup from 7am.",
    "No booking required.",
    "Car: £8.",
    "Car plus trailer or large van: £11.",
  ],
  buyerInfo: [
    "Gates open at 8am.",
    "Free entry on foot.",
    "On-site parking: £1.",
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
    { title: "Planned car boot sale", dateLabel: "October 2026", note: "TBC" },
  ],
  imageLabel: "Car boot stalls on West Park",
  imageStyle: "bg-brand-section",
  imageSrc: "/carboot.jpg",
  imageAlt: "Cars and stalls at the Long Eaton Car boot sale on West Park",
  image: {
    label: "Car boot stalls on West Park",
    style: "bg-brand-section",
  },
  sourceUrl: "https://www.longeatoncarnival.org.uk/car-boots/",
} satisfies Partial<EventItem>;

const baseEvents: EventItem[] = [
  {
    id: "event-long-eaton-parkrun",
    slug: "long-eaton-parkrun",
    title: "Long Eaton parkrun",
    type: "recurringEvent",
    excerpt:
      "A free weekly 5k community event in Long Eaton. Walk, jog, run, volunteer or spectate.",
    description: [
      "Long Eaton parkrun takes place every Saturday morning at West Park Leisure Centre.",
      "It is a free weekly 5k community event. People can walk, jog, run, volunteer or spectate.",
      "The event is organised by volunteers.",
    ],
    ongoing: true,
    recurrence: "weekly",
    dayOfWeek: "Saturday",
    daysOfWeek: ["Saturday"],
    time: "09:00",
    startTime: "09:00",
    location: "West Park Leisure Centre, Wilsthorpe Road, Long Eaton, NG10 4AA",
    price: "Free",
    organiser: "Long Eaton parkrun volunteers",
    category: "Fitness / Community",
    tags: ["Weekly", "Free", "Community"],
    featured: false,
    imageSrc: "/park-run.jpg",
    imageAlt: "Participants taking part in Long Eaton parkrun",
    imageLabel: "Long Eaton parkrun at West Park",
    imageStyle: "bg-brand-section",
    image: {
      label: "Long Eaton parkrun at West Park",
      style: "bg-brand-section",
    },
    volunteerRun: true,
    sourceUrl: "https://www.parkrun.org.uk/longeaton/",
  },
  {
    id: "event-long-eaton-junior-parkrun",
    slug: "long-eaton-junior-parkrun",
    title: "Long Eaton junior parkrun",
    type: "recurringEvent",
    excerpt:
      "A free weekly 2k event for children aged 4 to 14 at West Park.",
    description: [
      "Long Eaton junior parkrun takes place every Sunday morning at West Park.",
      "It is a weekly parkrun event for children aged 4 to 14.",
      "Families can come along to take part, volunteer or watch from the sidelines.",
    ],
    ongoing: true,
    recurrence: "weekly",
    dayOfWeek: "Sunday",
    daysOfWeek: ["Sunday"],
    time: "09:00",
    startTime: "09:00",
    location: "West Park, Long Eaton",
    price: "Free",
    organiser: "Long Eaton junior parkrun volunteers",
    audience: "Children aged 4 to 14",
    category: "Fitness / Community",
    tags: ["Weekly", "Free", "Children"],
    imageSrc: "/jnr-park-run.jpg",
    imageAlt: "Children taking part in Long Eaton junior parkrun",
    imageLabel: "Long Eaton junior parkrun at West Park",
    imageStyle: "bg-brand-section",
    image: {
      label: "Long Eaton junior parkrun at West Park",
      style: "bg-brand-section",
    },
    volunteerRun: true,
    sourceUrl: "https://www.parkrun.org.uk/longeaton-juniors/",
  },
  {
    id: "activity-family-history",
    slug: "family-history",
    title: "Family History",
    type: "activity",
    excerpt:
      "A regular group for people interested in researching their family history.",
    description: [
      "A group focused on helping members research their own family history.",
    ],
    ongoing: true,
    recurrence: "monthly",
    recurrenceLabel: "Third Monday in the month",
    dayOfWeek: "Monday",
    time: "13:30-15:15",
    startTime: "Monday afternoons, 13:30-15:15",
    location: "Long Eaton Library",
    status: "Active, open to new members",
    contactName: "Family History group",
    category: "Community / Learning",
    imageSrc: "/family-tree.jpg",
    imageAlt: "Family history notes and records",
    imageLabel: "Family history group",
    imageStyle: "bg-brand-section",
    image: {
      label: "Family history group",
      style: "bg-brand-section",
    },
    organiser: "Family History group",
    sourceUrl: "https://longeaton.u3asite.uk/u3a_groups/family-history/",
  },
  {
    id: "activity-craft-in-a-bag",
    slug: "craft-in-a-bag",
    title: "Craft in a Bag",
    type: "activity",
    excerpt:
      "A regular craft group for portable projects like knitting, crochet, embroidery, and paper crafts.",
    description: [
      "A group for people interested in crafts that can be carried in a bag, such as knitting, crochet, cross-stitch, embroidery, paper cutting, and colouring.",
    ],
    ongoing: true,
    recurrence: "monthly",
    recurrenceLabel: "First and fourth Thursday in the month",
    dayOfWeek: "Thursday",
    time: "10:30-12:30",
    startTime: "Thursday mornings, 10:30-12:30",
    location: "Cleavers Coffee Shop, Long Eaton",
    price: "Buy a drink",
    status: "Active, open to new members",
    contactName: "Craft in a Bag group",
    category: "Crafts / Community",
    imageSrc: "/craft-in-a-bag.jpg",
    imageAlt: "Portable craft materials laid out for a group session",
    imageLabel: "Craft in a Bag group",
    imageStyle: "bg-brand-section",
    image: {
      label: "Craft in a Bag group",
      style: "bg-brand-section",
    },
    organiser: "Craft in a Bag group",
    sourceUrl: "https://longeaton.u3asite.uk/u3a_groups/craft-in-a-bag/",
  },
  {
    id: "event-long-eaton-art-room-alternative-night-at-the-races-2026-02-28",
    slug: "alternative-night-at-the-races-28-february-2026",
    title: "Alternative Night at the Races",
    type: "event",
    date: "2026-02-28",
    time: "18:00-22:00",
    startTime: "18:00",
    endTime: "22:00",
    location: "Long Eaton Art Room, 29–31 Lime Grove, NG10 4LD",
    price: "£10",
    category: "Community",
    excerpt:
      "Fundraising race night with games, prizes, cake and refreshments.",
    description: [
      "Fundraising race night with games, prizes, cake and refreshments.",
    ],
    fundraisingNote: "This is a fundraising event.",
    imageSrc: longEatonArtRoomLogo,
    imageAlt: "Long Eaton Art Room logo banner",
    imageFit: "contain",
    imageLabel: "Alternative race night at Long Eaton Art Room",
    imageStyle: "bg-brand-section",
    image: {
      label: "Alternative race night at Long Eaton Art Room",
      style: "bg-brand-section",
    },
    sourceUrl: "https://www.longeatonartroom.co.uk/whats-available/events/",
  },
  {
    id: "event-long-eaton-art-room-fabric-sales-2026-03-21",
    slug: "fabric-sales-21-march-2026",
    title: "Fabric Sales 2026",
    type: "event",
    date: "2026-03-21",
    time: "09:30-12:00",
    startTime: "09:30",
    endTime: "12:00",
    location: "Long Eaton Art Room, 29–31 Lime Grove, NG10 4LD",
    price: "Free",
    category: "Markets",
    excerpt: "Fabric sale with textiles, craft materials and supplies.",
    description: ["Fabric sale with textiles, craft materials and supplies."],
    fundraisingNote: "This sale is a fundraising event.",
    locationNote: "Free parking available. Cash preferred.",
    imageSrc: longEatonArtRoomLogo,
    imageAlt: "Long Eaton Art Room logo banner",
    imageFit: "contain",
    imageLabel: "Fabric sale at Long Eaton Art Room",
    imageStyle: "bg-brand-section",
    image: {
      label: "Fabric sale at Long Eaton Art Room",
      style: "bg-brand-section",
    },
    relatedDates: [
      { title: "Fabric sale date", date: "2026-03-21" },
      { title: "Fabric sale date", date: "2026-06-27" },
      { title: "Fabric sale date", date: "2026-10-17" },
    ],
    sourceUrl: "https://www.longeatonartroom.co.uk/whats-available/events/",
  },
  {
    id: "event-long-eaton-art-room-fabric-sales-2026-06-27",
    slug: "fabric-sales-27-june-2026",
    title: "Fabric Sales 2026",
    date: "2026-06-27",
    time: "09:30-12:00",
    startTime: "09:30",
    endTime: "12:00",
    location: "Long Eaton Art Room, 29–31 Lime Grove, NG10 4LD",
    price: "Free",
    category: "Markets",
    excerpt: "Fabric sale with textiles, craft materials and supplies.",
    description: ["Fabric sale with textiles, craft materials and supplies."],
    fundraisingNote: "This sale is a fundraising event.",
    locationNote: "Free parking available. Cash preferred.",
    imageSrc: longEatonArtRoomLogo,
    imageAlt: "Long Eaton Art Room logo banner",
    imageFit: "contain",
    imageLabel: "Fabric sale at Long Eaton Art Room",
    imageStyle: "bg-brand-section",
    image: {
      label: "Fabric sale at Long Eaton Art Room",
      style: "bg-brand-section",
    },
    relatedDates: [
      { title: "Fabric sale date", date: "2026-03-21" },
      { title: "Fabric sale date", date: "2026-06-27" },
      { title: "Fabric sale date", date: "2026-10-17" },
    ],
    sourceUrl: "https://www.longeatonartroom.co.uk/whats-available/events/",
  },
  {
    id: "event-long-eaton-art-room-fabric-sales-2026-10-17",
    slug: "fabric-sales-17-october-2026",
    title: "Fabric Sales 2026",
    date: "2026-10-17",
    time: "09:30-12:00",
    startTime: "09:30",
    endTime: "12:00",
    location: "Long Eaton Art Room, 29–31 Lime Grove, NG10 4LD",
    price: "Free",
    category: "Markets",
    excerpt: "Fabric sale with textiles, craft materials and supplies.",
    description: ["Fabric sale with textiles, craft materials and supplies."],
    fundraisingNote: "This sale is a fundraising event.",
    locationNote: "Free parking available. Cash preferred.",
    imageSrc: longEatonArtRoomLogo,
    imageAlt: "Long Eaton Art Room logo banner",
    imageFit: "contain",
    imageLabel: "Fabric sale at Long Eaton Art Room",
    imageStyle: "bg-brand-section",
    image: {
      label: "Fabric sale at Long Eaton Art Room",
      style: "bg-brand-section",
    },
    relatedDates: [
      { title: "Fabric sale date", date: "2026-03-21" },
      { title: "Fabric sale date", date: "2026-06-27" },
      { title: "Fabric sale date", date: "2026-10-17" },
    ],
    sourceUrl: "https://www.longeatonartroom.co.uk/whats-available/events/",
  },
  {
    id: "event-long-eaton-art-room-open-studios-2026-11-14",
    slug: "open-studios-art-craft-fair-14-november-2026",
    title: "Open Studios Art & Craft Fair",
    date: "2026-11-14",
    endDate: "2026-11-15",
    time: "10:00-16:00",
    startTime: "10:00",
    endTime: "16:00",
    location: "Long Eaton Art Room",
    price: "Free",
    category: "Crafts",
    excerpt:
      "Open studios event with local artists, stalls and handmade goods.",
    description: [
      "Open studios event with local artists, stalls and handmade goods.",
    ],
    featured: true,
    imageSrc: longEatonArtRoomLogo,
    imageAlt: "Long Eaton Art Room logo banner",
    imageFit: "contain",
    imageLabel: "Open studios weekend at Long Eaton Art Room",
    imageStyle: "bg-brand-section",
    image: {
      label: "Open studios weekend at Long Eaton Art Room",
      style: "bg-brand-section",
    },
    sourceUrl: "https://www.longeatonartroom.co.uk/whats-available/events/",
  },
  {
    id: "event-long-eaton-art-room-toasted-ceramic-fair-2026-12-05",
    slug: "toasted-ceramic-fair-5-december-2026",
    title: "Toasted Ceramic Fair",
    date: "2026-12-05",
    time: "10:00-16:00",
    startTime: "10:00",
    endTime: "16:00",
    location: "Long Eaton Art Room",
    price: "Free",
    category: "Crafts",
    excerpt: "Ceramic fair featuring 20+ potters.",
    description: ["Ceramic fair featuring 20+ potters."],
    featured: true,
    imageSrc: longEatonArtRoomLogo,
    imageAlt: "Long Eaton Art Room logo banner",
    imageFit: "contain",
    imageLabel: "Ceramic fair at Long Eaton Art Room",
    imageStyle: "bg-brand-section",
    image: {
      label: "Ceramic fair at Long Eaton Art Room",
      style: "bg-brand-section",
    },
    sourceUrl: "https://www.longeatonartroom.co.uk/whats-available/events/",
  },
  {
    id: "event-leos-the-wedding-singer-2026-04-14",
    slug: "the-wedding-singer-the-musical-comedy-14-april-2026",
    title: "The Wedding Singer – The Musical Comedy",
    date: "2026-04-14",
    endDate: "2026-04-18",
    time: "Evenings 19:30, Saturday matinee 14:30",
    startTime: "19:30",
    location: "May Hall, Trent College, Long Eaton",
    organiser: "LEOS Musical Theatre Company",
    ticketUrl: "https://www.ticketsource.co.uk/leos",
    category: "Entertainment",
    excerpt:
      "Live musical comedy from LEOS Musical Theatre Company, with evening performances and a Saturday matinee.",
    description: [
      "A live musical comedy performance of The Wedding Singer, presented by LEOS Musical Theatre Company.",
      "Evening shows run from Tuesday to Saturday, with a Saturday matinee included.",
    ],
    relatedDates: [
      {
        title: "Evening performances",
        date: "2026-04-14",
        note: "19:30 from Tuesday to Saturday",
      },
      { title: "Saturday matinee", date: "2026-04-18", note: "14:30" },
    ],
    imageSrc: "/wedding-singer.png",
    imageAlt: "Poster artwork for The Wedding Singer musical",
    imageLabel: "The Wedding Singer poster",
    imageStyle: "bg-brand-section",
    featured: true,
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-04-12",
    slug: "long-eaton-carnival-car-boot-sale-12-april-2026",
    excerpt:
      "The first planned 2026 Long Eaton Car boot sale is due at West Park on Sunday 12 April.",
    date: "2026-04-12",
    featured: true,
    ...carBootBase,
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-05-17",
    slug: "long-eaton-carnival-car-boot-sale-17-may-2026",
    excerpt:
      "Long Eaton Carnival's May car boot sale is planned for Sunday 17 May at West Park.",
    date: "2026-05-17",
    ...carBootBase,
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
    tags: [
      "Carnival",
      "Parade",
      "Community",
      "West Park",
      "Through the Decades",
    ],
    category: "Community",
    excerpt:
      "Long Eaton Carnival returns on Saturday 20 June with the road parade through town before events continue on West Park.",
    description: [
      "The 2026 theme is Through the Decades. The day starts with the road parade through town before displays and events continue on West Park.",
      "The parade starts at 11am and returns to the carnival site at around 12:30pm to 1:00pm. The main carnival site is free to enter.",
    ],
    imageSrc: "/carnival.webp",
    imageAlt: "Long Eaton Carnival parade band walking through the town centre",
    imageLabel: "Carnival parade",
    imageStyle: "bg-brand-section",
    image: {
      label: "Carnival parade",
      style: "bg-brand-section",
    },
    gallery: [
      {
        src: "/carnival.webp",
        alt: "Long Eaton Carnival parade band walking through the town centre",
      },
      {
        src: "/carnival-2.webp",
        alt: "A standard bearer leading the Long Eaton Carnival parade past crowds in town",
      },
      {
        src: "/carnival-3.webp",
        alt: "Families and fairground rides on West Park during Long Eaton Carnival",
      },
    ],
    volunteerRun: true,
    relatedDates: [
      { title: "Car boot sale", date: "2026-04-12" },
      { title: "Car boot sale", date: "2026-05-17" },
      { title: "Car boot sale", date: "2026-06-21" },
      { title: "Car boot sale", date: "2026-07-19" },
      { title: "Car boot sale", date: "2026-08-16" },
      { title: "Car boot sale", date: "2026-09-20" },
      { title: "Car boot sale", dateLabel: "October 2026", note: "TBC" },
    ],
    featured: true,
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-06-21",
    slug: "long-eaton-carnival-car-boot-sale-21-june-2026",
    excerpt:
      "The June Long Eaton Car boot sale is planned for Sunday 21 June at West Park.",
    date: "2026-06-21",
    ...carBootBase,
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-07-19",
    slug: "long-eaton-carnival-car-boot-sale-19-july-2026",
    excerpt:
      "Long Eaton Carnival's July car boot sale is due on Sunday 19 July at West Park.",
    date: "2026-07-19",
    ...carBootBase,
  },
  {
    id: "event-long-eaton-music-festival-2026-07-04",
    slug: "long-eaton-music-festival-4-july-2026",
    title: "Long Eaton Music Festival",
    date: "2026-07-04",
    time: "14:00-23:00",
    startTime: "14:00",
    endTime: "23:00",
    location:
      "Soldiers and Sailors Club, 421 Tamworth Rd, Long Eaton, Nottingham, NG10 3JS",
    price: "Prices to be confirmed",
    priceSummary:
      "Two ticketed sessions are planned for the day, with pricing still to be confirmed.",
    organiser: "Long Eaton Music Festival",
    category: "Music",
    excerpt:
      "A new local music festival raising funds for the Canaan Trust and showcasing emerging local talent.",
    description: [
      "Long Eaton Music Festival is a new local event raising funds for the Canaan Trust while showcasing emerging music talent from across the area.",
      "The festival is split into two ticketed sessions: an all-ages afternoon session from 2pm to 6pm, and an adults-only evening session from 7pm to 11pm. Each session features eight acts across two stages.",
      "The line-up currently includes St Blush, Luna & the Lime Slices, Romy, Fools & Sages, The Plush Method, Rain Age, Super Burner, Jessie Dipper, Silvabak Wail, Belt, Melting Composure and Casi Rosa, with others still to be confirmed.",
    ],
    fundraisingNote: "The event is raising funds for the Canaan Trust.",
    sessions: [
      {
        title: "Afternoon Session",
        time: "14:00-18:00",
        note: "All ages welcome.",
      },
      {
        title: "Evening Session",
        time: "19:00-23:00",
        note: "Adults only.",
      },
    ],
    tags: ["Music", "Fundraiser", "Local talent"],
    imageSrc: "/long-eaton-music-festival-2026.png",
    imageAlt: "Poster for Long Eaton Music Festival 2026",
    imageFit: "contain",
    imageLabel: "Long Eaton Music Festival 2026",
    imageStyle: "bg-brand-accent/10",
    featured: true,
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-08-16",
    slug: "long-eaton-carnival-car-boot-sale-16-august-2026",
    excerpt:
      "Long Eaton Carnival's August car boot sale is planned for Sunday 16 August at West Park.",
    date: "2026-08-16",
    ...carBootBase,
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-09-20",
    slug: "long-eaton-carnival-car-boot-sale-20-september-2026",
    excerpt:
      "The September Long Eaton Car boot sale is planned for Sunday 20 September at West Park.",
    date: "2026-09-20",
    ...carBootBase,
  },
  {
    id: "event-long-eaton-carnival-car-boot-2026-10",
    slug: "long-eaton-carnival-car-boot-sale-october-2026-tbc",
    excerpt:
      "A further Long Eaton Car boot sale is listed for October 2026, with the date still to be confirmed.",
    dateLabel: "October 2026",
    isTbc: true,
    ...carBootBase,
    time: "Date to be confirmed",
  },
];

export const events: EventItem[] = [...baseEvents, ...optionalImportedEvents];

export const sortedEvents = sortEvents(events);

export const upcomingEvents = getUpcomingEvents(sortedEvents);

export const regularEvents = getRegularEvents(sortedEvents);

export const eventCategories = getCategories(upcomingEvents);
