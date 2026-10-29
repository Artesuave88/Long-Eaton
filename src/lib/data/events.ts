import type { EventItem } from "$types/content";
import duchessTheatre from "$data/imported/duchess-theatre.json";
import duchessTheatreEvents from "$data/imported/duchess-theatre-events.json";
import { localAutumnEvents } from "$data/local-events-autumn-2026";
import {
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
  const isSpamalot = show.title.toLocaleLowerCase() === "spamalot";

  return {
    id: `event-imported-duchess-theatre-${index + 1}`,
    slug: `duchess-theatre-${slugify(show.title)}`,
    title: show.title,
    ...(isSpamalot
      ? {
          seoTitle: "Spamalot at Duchess Theatre, Long Eaton | December 2026",
          metaDescription:
            "Spamalot is at Duchess Theatre in Long Eaton from 2 to 5 December 2026. Find the confirmed dates, venue address and official ticket link.",
          heading: "Spamalot at Duchess Theatre, Long Eaton",
        }
      : {}),
    date: show.startDate,
    endDate: show.endDate,
    listingOnly: !isSpamalot,
    dateLabel:
      formatDateLabel(show) ??
      (!show.startDate ? "Dates available from organiser" : undefined),
    time: "Times available from organiser",
    location: venue.address || "West Gate, Long Eaton, Derbyshire, NG10 1EF",
    organiser: venueName,
    ticketUrl: show.url ?? undefined,
    category: "Entertainment",
    excerpt: isSpamalot
      ? "Spamalot comes to the Duchess Theatre & Chatsworth Arts Centre."
      : show.title,
    description: isSpamalot
      ? [
          "Check the official booking page for performance times and availability.",
        ]
      : [],
    imageSrc: show.imageUrl ?? "/duchess-theatre-exterior.jpg",
    imageAlt: show.title,
    imageLabel: show.title,
    imageStyle: "bg-brand-accent/10",
    sourceUrl: venue.sourceUrl,
    volunteerRun: venue.volunteerRun,
    featured: false,
    relatedLinks: isSpamalot
      ? [
          {
            href: "/businesses/duchess-theatre-chatsworth-arts-centre",
            label: "About Duchess Theatre",
          },
          { href: "/events", label: "More Long Eaton events" },
        ]
      : undefined,
  };
}

const optionalImportedEvents: EventItem[] = includeDuchessEvents
  ? duchessTheatreEvents
      .filter((show) => show.title && show.url)
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
    "Sellers: car £8; car plus trailer or large van £11. Buyers: free on foot; on-site parking £1.",
  organiser: "Long Eaton Carnival committee",
  tags: ["Car Boot", "West Park", "Fundraising", "Community"],
  category: "Markets",
  description: ["Sellers do not need to book. Donations to the Carnival fund are appreciated."],
  fundraisingNote:
    "All proceeds go towards future Long Eaton Carnival events.",
  locationNote: "The field is opposite George's Fish and Chip shop.",
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
    id: "event-long-eaton-autism-meetup",
    slug: "long-eaton-autism-meetup",
    title: "Long Eaton Autism Meetup",
    type: "recurringEvent",
    ongoing: true,
    recurrence: "monthly",
    recurrenceLabel: "First Wednesday of each month",
    time: "1–3pm",
    startTime: "13:00",
    endTime: "15:00",
    location: "The Square Hideaway Café & Sensory Space, High Street, Long Eaton",
    organiser: "Neurodiverse Self Advocacy Partnership CIC",
    organiserUrl: "https://www.ndsa.uk/",
    contactName: "Marta Walkowska, Project Manager",
    sourceUrl: "https://www.ndsa.uk/",
    category: "Community / Social",
    tags: ["Autism", "Monthly", "Social", "Support"],
    audience: "Autistic people looking to meet others and connect locally.",
    excerpt:
      "A monthly social meetup to make local connections.",
    description: ["The organiser also runs online social and support groups and other meetups across Derbyshire. Their Derbyshire services are NHS-funded, according to the supplied event information."],
    visitSections: [
      {
        title: "Weekly online autism support and learning",
        copy:
          "Online groups take place on Tuesdays at 7pm and Thursdays at 1pm. Explore autism and well-being through discussion and shared experiences. Family members are welcome. Attend as often as you like, with your camera and microphone off if preferred. Self-paced learning materials are available.",
      },
      {
        title: "Join the online support groups",
        copy:
          "For the Tuesday and Thursday groups, use Microsoft Teams meeting ID 364 576 640 521 9 and passcode MB2Js6Q2.",
      },
      {
        title: "Online social meetups",
        copy:
          "An online social meetup runs every Wednesday from 1–3pm on Zoom. A monthly evening social group meets on the third Wednesday from 6–8pm on Microsoft Teams. For the monthly evening group, use meeting ID 385 020 190 587 and passcode 5Xh7vN38.",
      },
    ],
    imageSrc: "/ndsa-logo.png",
    imageAlt: "NDSA logo with a rainbow wave above the organisation’s initials",
    imageFit: "contain",
    imageLabel: "Neurodiverse Self Advocacy Partnership CIC",
    imageStyle: "bg-brand-section",
    featured: false,
  },
  {
    id: "event-long-eaton-parkrun",
    slug: "long-eaton-parkrun",
    title: "Long Eaton parkrun",
    type: "recurringEvent",
    excerpt:
      "A weekly 5k community event. Walk, jog, run, volunteer or spectate.",
    description: [],
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
    seoTitle: "Long Eaton Junior parkrun: Sunday Time, Location & Ages",
    metaDescription:
      "Long Eaton junior parkrun is a free weekly 2k event for ages 4–14, held at 9am on Sundays at West Park. Find location and participation details.",
    heading: "Long Eaton junior parkrun: Sundays at West Park",
    type: "recurringEvent",
    excerpt:
      "A weekly 2k community event for young runners.",
    description: ["Families can take part, volunteer or watch from the sidelines."],
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
    relatedLinks: [
      { href: "/events/long-eaton-parkrun", label: "Long Eaton 5k parkrun" },
      {
        href: "/guides/childrens-activities-in-long-eaton",
        label: "Children’s activities in Long Eaton",
      },
      { href: "/events", label: "Upcoming Long Eaton events" },
      { href: "/whats-on-this-weekend", label: "What’s on this weekend" },
    ],
  },
  {
    id: "activity-family-history",
    slug: "family-history",
    title: "Long Eaton & District u3a Family History",
    type: "activity",
    excerpt:
      "A Long Eaton & District u3a group for people interested in researching their family history.",
    description: ["u3a membership is required for ongoing participation. Prospective members are welcome to try the group before joining."],
    ongoing: true,
    recurrence: "monthly",
    recurrenceLabel: "Third Monday in the month",
    dayOfWeek: "Monday",
    time: "13:30-15:15",
    startTime: "Monday afternoons, 13:30-15:15",
    location: "Long Eaton Library",
    status: "Active, open to new members",
    contactName: "Long Eaton & District u3a Family History group",
    category: "Community / Learning",
    imageSrc: "/family-tree.jpg",
    imageAlt: "Family history notes and records",
    imageLabel: "Family history group",
    imageStyle: "bg-brand-section",
    image: {
      label: "Family history group",
      style: "bg-brand-section",
    },
    organiser: "Long Eaton & District u3a",
    organiserUrl: "https://longeaton.u3asite.uk/",
    sourceUrl: "https://longeaton.u3asite.uk/u3a_groups/family-history/",
  },
  {
    id: "activity-craft-in-a-bag",
    slug: "craft-in-a-bag",
    title: "Long Eaton & District u3a Craft in a Bag",
    type: "activity",
    excerpt:
      "A friendly u3a group for portable crafts.",
    description: ["Bring knitting, crochet, cross-stitch, embroidery, paper cutting or colouring. u3a membership is required for ongoing participation; prospective members can try the group before joining."],
    ongoing: true,
    recurrence: "monthly",
    recurrenceLabel: "First and fourth Thursday in the month",
    dayOfWeek: "Thursday",
    time: "10:30-12:30",
    startTime: "Thursday mornings, 10:30-12:30",
    location: "Cleavers Coffee Shop, Long Eaton",
    price: "Buy a drink",
    status: "Active, open to new members",
    contactName: "Long Eaton & District u3a Craft in a Bag group",
    category: "Crafts / Community",
    imageSrc: "/craft-in-a-bag.jpg",
    imageAlt: "Portable craft materials laid out for a group session",
    imageLabel: "Craft in a Bag group",
    imageStyle: "bg-brand-section",
    image: {
      label: "Craft in a Bag group",
      style: "bg-brand-section",
    },
    organiser: "Long Eaton & District u3a",
    organiserUrl: "https://longeaton.u3asite.uk/",
    sourceUrl: "https://longeaton.u3asite.uk/u3a_groups/craft-in-a-bag/",
  },
  {
    id: "event-long-eaton-art-room-open-studios-2026-11-14",
    slug: "open-studios-art-craft-fair-14-november-2026",
    checkedOn: "2026-09-11",
    sources: [
      {
        "label": "Long Eaton Art Room — 2026 event programme",
        "href": "https://www.longeatonartroom.co.uk/whats-available/events/"
      }
    ],
    visitSections: [
      {
        "title": "Studios and stalls",
        "copy": "Meet resident artists in their working studios and browse ceramics, jewellery, illustration and textiles in the former lace factory."
      },
      {
        "title": "Arriving by car",
        "copy": "Free parking is available. Contact the Art Room about access requirements before setting out."
      }
    ],
    organiser: "Long Eaton Art Room",
    title: "Open Studios Art & Craft Fair",
    date: "2026-11-14",
    endDate: "2026-11-15",
    time: "10:00-16:00",
    startTime: "10:00",
    endTime: "16:00",
    location: "Long Eaton Art Room, 29–31 Lime Grove, Long Eaton, NG10 4LD",
    price: "Free",
    category: "Crafts",
    excerpt:
      "Open studios event with local artists, stalls and handmade goods.",
    description: [],
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
    checkedOn: "2026-09-11",
    sources: [
      {
        "label": "Long Eaton Art Room — 2026 event programme",
        "href": "https://www.longeatonartroom.co.uk/whats-available/events/"
      }
    ],
    visitSections: [
      {
        "title": "About the fair",
        "copy": "The fair is held in association with the Northern Potters Association. Parking is free."
      }
    ],
    title: "Toasted Ceramic Fair",
    date: "2026-12-05",
    time: "10:00-16:00",
    startTime: "10:00",
    endTime: "16:00",
    location: "Long Eaton Art Room, 29–31 Lime Grove, Long Eaton, NG10 4LD",
    price: "Free",
    category: "Crafts",
    excerpt: "Browse ceramics from 21 potters.",
    description: [],
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
    id: "event-long-eaton-carnival-car-boot-2026-10",
    slug: "long-eaton-carnival-car-boot-sale-october-2026-tbc",
    excerpt:
      "Browse second-hand stalls and support the Long Eaton Carnival fund.",
    dateLabel: "October 2026",
    isTbc: true,
    ...carBootBase,
    time: "Sellers from 7am · Buyers from 8am",
  },
];

export const events: EventItem[] = [...baseEvents, ...localAutumnEvents, ...optionalImportedEvents];

export const sortedEvents = sortEvents(events);
