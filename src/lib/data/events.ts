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
    imageSrc: show.imageUrl ?? "/duchess-theatre-exterior.jpg",
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
  price: "On-foot entry: FREE",
  priceSummary:
    "Sellers: Car £8, car plus trailer or large van £11. Buyers arriving on foot enter FREE; on-site parking is £1.",
  organiser: "Long Eaton Carnival committee",
  tags: ["Car Boot", "West Park", "Fundraising", "Community"],
  category: "Markets",
  description: [
    "Long Eaton Carnival's car boot sales return to West Park on selected Sundays through spring and summer.",
    "Sellers can set up from 7am and there is no booking required. Buyers can come in from 8am. Entry is FREE when arriving on foot, while on-site parking is £1.",
    "All proceeds go towards future Long Eaton Carnival events. Donations are appreciated.",
  ],
  sellerInfo: [
    "Setup from 7am.",
    "No booking required.",
    "Car: £8.",
    "Car plus trailer or large van: £11.",
  ],
  buyerInfo: [
    "Gates open at 8am.",
    "Arriving on foot: FREE entry.",
    "On-site parking: £1.",
  ],
  fundraisingNote:
    "All proceeds go towards future Long Eaton Carnival events. Donations are appreciated.",
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
    id: "event-dudl-social-sing-2026-08-09",
    slug: "dudl-social-sing-9-august-2026",
    title: "Social Sing",
    type: "event",
    date: "2026-08-09",
    time: "19:30",
    startTime: "19:30",
    location: "DÜDL, 79 College Street, Long Eaton, NG10 4NN",
    price: "£5",
    organiser: "DÜDL",
    category: "Music / Community",
    excerpt:
      "A relaxed group singalong led by a live musician, with familiar songs, no auditions and no pressure to perform solo.",
    description: [
      "Social Sing is a relaxed evening of singing familiar songs together, led by one of DÜDL's live musicians.",
      "It is not a choir or karaoke night: there are no auditions and no pressure to sing solo.",
      "The event is BYOB, with soft drinks and mixers available from the café.",
    ],
    ticketUrl:
      "https://www.dudlcoffee.co.uk/whatson-store/p/5fuzde8ucogdjw9p7tbuqc5j746l34-nkzwf-77sgn-g8cg6",
    imageSrc: "/dudl-social-sing.webp",
    imageAlt: "Poster for DÜDL Social Sing on 9 August 2026",
    imageFit: "contain",
    imageLabel: "DÜDL Social Sing",
    imageStyle: "bg-brand-section",
    sourceUrl:
      "https://www.dudlcoffee.co.uk/whatson-store/p/5fuzde8ucogdjw9p7tbuqc5j746l34-nkzwf-77sgn-g8cg6",
    featured: true,
  },
  {
    id: "event-dudl-bedazzle-bar-2026-08-28",
    slug: "dudl-bedazzle-bar-28-august-2026",
    title: "Bedazzle Bar",
    type: "event",
    date: "2026-08-28",
    time: "19:30",
    startTime: "19:30",
    location: "DÜDL, 79 College Street, Long Eaton, NG10 4NN",
    price: "From £7.50",
    priceSummary:
      "Ticket £7.50, or £17.45 with a Picky Bits plate. A welcome drink and materials are included.",
    organiser: "DÜDL",
    category: "Crafts",
    excerpt:
      "Bring an everyday item and give it some sparkle with gems, glue and tools supplied by DÜDL.",
    description: [
      "Bring along trainers, a phone case, sunglasses, denim, a water bottle or another item that could use some sparkle.",
      "The ticket includes a welcome drink, gems, glue and use of the tools and equipment. No previous experience is needed.",
      "The event is BYOB, with soft drinks and mixers available from the café.",
    ],
    ticketUrl:
      "https://www.dudlcoffee.co.uk/whatson-store/p/5fuzde8ucogdjw9p7tbuqc5j746l34-nkzwf-77sgn",
    imageSrc: "/dudl-bedazzle-bar.webp",
    imageAlt: "Poster for DÜDL Bedazzle Bar on 28 August 2026",
    imageFit: "contain",
    imageLabel: "DÜDL Bedazzle Bar",
    imageStyle: "bg-brand-section",
    sourceUrl:
      "https://www.dudlcoffee.co.uk/whatson-store/p/5fuzde8ucogdjw9p7tbuqc5j746l34-nkzwf-77sgn",
  },
  {
    id: "event-dudl-works-in-progress-2026-09-06",
    slug: "dudl-works-in-progress-craft-night-6-september-2026",
    title: "Works in Progress Craft Night",
    type: "event",
    date: "2026-09-06",
    time: "19:30",
    startTime: "19:30",
    location: "DÜDL, 79 College Street, Long Eaton, NG10 4NN",
    price: "£5",
    organiser: "DÜDL",
    category: "Crafts / Community",
    excerpt:
      "A sociable BYOB craft night for finally making progress on that unfinished creative project.",
    description: [
      "Bring a creative project that has been waiting in a bag, basket or drawer and spend the evening working on it with other makers.",
      "Crochet, knitting, embroidery, painting, sewing, scrapbooking and other portable works in progress are welcome.",
      "The event is BYOB, with soft drinks and mixers available from the café.",
    ],
    ticketUrl:
      "https://www.dudlcoffee.co.uk/whatson-store/p/5fuzde8ucogdjw9p7tbuqc5j746l34-nkzwf-77sgn-g8cg6-8c6cm",
    imageSrc: "/dudl-craft-night.webp",
    imageAlt: "Poster for DÜDL Works in Progress Craft Night on 6 September 2026",
    imageFit: "contain",
    imageLabel: "DÜDL craft night",
    imageStyle: "bg-brand-section",
    sourceUrl:
      "https://www.dudlcoffee.co.uk/whatson-store/p/5fuzde8ucogdjw9p7tbuqc5j746l34-nkzwf-77sgn-g8cg6-8c6cm",
  },
  {
    id: "event-dudl-quick-draw-social-2026-09-18",
    slug: "dudl-quick-draw-social-18-september-2026",
    title: "Quick Draw Social: A Speed-Friending Night",
    type: "event",
    date: "2026-09-18",
    time: "19:30",
    startTime: "19:30",
    location: "DÜDL, 79 College Street, Long Eaton, NG10 4NN",
    price: "£7.50",
    organiser: "DÜDL",
    category: "Community / Crafts",
    excerpt:
      "Meet new people through quick drawing challenges in a relaxed speed-friending format.",
    description: [
      "Quick Draw Social pairs guests with someone new for each five-minute drawing challenge, creating an easy way to chat and make new connections.",
      "No drawing experience is needed; the activity is designed to be relaxed, playful and social.",
      "The event is BYOB, with soft drinks and mixers available from the café.",
    ],
    ticketUrl:
      "https://www.dudlcoffee.co.uk/whatson-store/p/5fuzde8ucogdjw9p7tbuqc5j746l34-nkzwf-77sgn-7dh22",
    imageSrc: "/dudl-quick-draw.webp",
    imageAlt: "Poster for DÜDL Quick Draw Social on 18 September 2026",
    imageFit: "contain",
    imageLabel: "DÜDL Quick Draw Social",
    imageStyle: "bg-brand-section",
    sourceUrl:
      "https://www.dudlcoffee.co.uk/whatson-store/p/5fuzde8ucogdjw9p7tbuqc5j746l34-nkzwf-77sgn-7dh22",
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
    organiser: "Long Eaton Community Carnival Association",
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
    sourceUrl: "https://www.longeatoncarnival.org.uk/",
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
    id: "event-long-eaton-music-festival-2026-08-08",
    slug: "long-eaton-music-festival-8-august-2026",
    title: "Long Eaton Music Festival",
    date: "2026-08-08",
    time: "11:30-22:00",
    startTime: "11:30",
    endTime: "22:00",
    location: "West Park Events Field, Wilsthorpe Road, Long Eaton, NG10 3NP",
    price: "From free",
    priceSummary:
      "Ages 5 and under free; children's tickets from £14.50 and adult tickets from £21.50 at the time of checking.",
    organiser: "Long Eaton Music Festival",
    category: "Music",
    excerpt:
      "A full-day, family-friendly music festival on the West Park Events Field.",
    description: [
      "Long Eaton Music Festival returns with a full day of live music and family entertainment on the West Park Events Field.",
      "Gates open at 11:30am and the event runs until 10pm, with last entry listed as 7:45pm.",
      "Ticket prices vary by age and release, with family ticket options also available.",
    ],
    locationNote: "Last entry is listed as 19:45.",
    ticketUrl:
      "https://www.skiddle.com/whats-on/Nottingham/West-Park-Events-Field/Long-Eaton-Music-Festival/42482491/",
    tags: ["Music", "Family", "West Park"],
    imageSrc: "/long-eaton-music-festival-august-2026.jpg",
    imageAlt: "Artwork for Long Eaton Music Festival on 8 August 2026",
    imageFit: "cover",
    imageLabel: "Long Eaton Music Festival 2026",
    imageStyle: "bg-brand-accent/10",
    sourceUrl:
      "https://www.skiddle.com/whats-on/Nottingham/West-Park-Events-Field/Long-Eaton-Music-Festival/42482491/",
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
