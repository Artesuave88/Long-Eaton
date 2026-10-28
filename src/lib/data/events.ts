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
      ? "See Spamalot at the Duchess Theatre in Long Eaton from Wednesday 2 to Saturday 5 December 2026. Performance times are available from the organiser."
      : show.title,
    description: isSpamalot
      ? [
          "Spamalot is listed for four dates at the volunteer-run Duchess Theatre & Chatsworth Arts Centre on West Gate.",
          "Use the official ticket link for performance times, availability and booking details before travelling.",
        ]
      : [],
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
      "A monthly social meetup for autistic people at The Square Hideaway Café & Sensory Space, on the first Wednesday of each month from 1–3pm.",
    description: [
      "The meetup takes place on the first Wednesday of each month, from 1–3pm, at The Square Hideaway Café & Sensory Space on High Street in Long Eaton.",
      "The group offers autistic people an opportunity to meet others and make local connections. Meetups take place on the first Wednesday of each month.",
      "The organiser also runs online social and support groups and other meetups across Derbyshire. Their Derbyshire services are NHS-funded, according to the event information supplied.",
    ],
    visitSections: [
      {
        title: "Weekly online autism support and learning",
        copy:
          "Online groups take place on Tuesdays at 7pm and Thursdays at 1pm. Sessions explore autism, understanding your own experiences and ways to improve well-being through questions, discussion and shared experiences. Family members are welcome. You can join as many or as few sessions as you like, keep your camera and microphone off, and simply listen. Learning materials are available from the organiser for studying at your own pace.",
      },
      {
        title: "Join the online support groups",
        copy:
          "Join using Microsoft Teams meeting ID 364 576 640 521 9 and passcode MB2Js6Q2. These details are for the Tuesday and Thursday online support groups.",
      },
      {
        title: "Online social meetups",
        copy:
          "An online social meetup runs every Wednesday from 1–3pm on Zoom. A monthly evening social group meets on the third Wednesday from 6–8pm on Microsoft Teams; the October session is Wednesday 21 October 2026. For the monthly evening group, use meeting ID 385 020 190 587 and passcode 5Xh7vN38.",
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
    seoTitle: "Long Eaton Junior parkrun: Sunday Time, Location & Ages",
    metaDescription:
      "Long Eaton junior parkrun is a free weekly 2k event for ages 4–14, held at 9am on Sundays at West Park. Find location and participation details.",
    heading: "Long Eaton junior parkrun: Sundays at West Park",
    type: "recurringEvent",
    excerpt:
      "A free weekly 2k event for children aged 4 to 14, starting at 9am every Sunday at West Park in Long Eaton.",
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
    description: [
      "This Long Eaton & District u3a group helps members research their own family history.",
      "Long Eaton & District u3a membership is required for ongoing participation, but prospective members are very welcome to come along and try the group before deciding whether to join.",
    ],
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
      "A Long Eaton & District u3a group for portable crafts such as knitting, crochet, embroidery, and paper crafts.",
    description: [
      "This Long Eaton & District u3a group is for people interested in crafts that can be carried in a bag, such as knitting, crochet, cross-stitch, embroidery, paper cutting, and colouring.",
      "Long Eaton & District u3a membership is required for ongoing participation, but prospective members are very welcome to come along and try the group before deciding whether to join.",
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
        "copy": "The programme includes resident artists opening their studios and stalls in the former lace factory. Look for ceramics, jewellery, illustration and textiles. This makes the fair a useful choice for meeting makers and comparing handmade gifts in one visit."
      },
      {
        "title": "Allow time for both spaces",
        "copy": "Plan to see the working studios as well as the stalls. If you are shopping for a particular piece, take its intended measurements and ask the maker about materials, care and collection arrangements."
      },
      {
        "title": "Arriving by car",
        "copy": "The organiser advertises free parking. Keep the Lime Grove address handy rather than searching only for the event name; contact the Art Room about any access requirements before setting out."
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
    description: ["The November weekend combines a chance to buy directly from resident artists with a wider art and craft fair. Entry is free on both days."],
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
        "title": "Comparing ceramics",
        "copy": "The organiser lists 21 potters, in association with the Northern Potters Association. Entry and parking are free. For a functional piece, ask its maker about food use, washing and care; for a gift, check how it will be packed for the journey home."
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
    excerpt: "Ceramic fair featuring 20+ potters.",
    description: ["Toasted brings a range of ceramic makers together at the Art Room. The December fair offers a focused alternative to a general craft market for visitors choosing pottery or exploring different making techniques."],
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
      "A further Long Eaton Car boot sale is listed for October 2026, with the date still to be confirmed.",
    dateLabel: "October 2026",
    isTbc: true,
    ...carBootBase,
    time: "Date to be confirmed",
  },
];

export const events: EventItem[] = [...baseEvents, ...localAutumnEvents, ...optionalImportedEvents];

export const sortedEvents = sortEvents(events);
