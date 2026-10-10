import type { NewsItem } from "$types/content";

export const newsDrafts: NewsItem[] = [
  {
    id: "andy-burnham-supports-proposed-m1-junction-25a-sandiacre",
    publicationStatus: "draft",
    reviewNote: "Do not republish until a first-party source confirms the reported support and appraisal details.",
    title: "Andy Burnham signals support for proposed new M1 junction at Sandiacre",
    date: "2026-08-29",
    excerpt:
      "Supporters believe the proposed Junction 25a could ease congestion and pollution while supporting growth in the area.",
    content: [
      "Plans for a potential new M1 junction at Sandiacre have received a boost after Prime Minister Andy Burnham indicated his support for the proposal.",
      "Erewash MP Adam Thompson said the case for the junction—known locally as Junction 25a—is becoming increasingly strong, particularly as development continues at New Stanton Park.",
      "The update follows Erewash Borough Council’s decision to commission an £80,000 economic appraisal into the proposal. The cross-party study will examine the potential benefits of a new junction alongside other possible solutions to congestion and pollution in the area.",
      "Residents have called for improvements around Sandiacre and Junction 25 for several years, citing heavy traffic, poor air quality and pressure on surrounding roads.",
      "Mr Thompson said he had raised the issue with senior government figures, including the Prime Minister, Transport Secretary Heidi Alexander and Roads Minister Simon Lightwood.",
      "He said Mr Burnham told him that if local communities understood what improvements were needed, they should be able to work together to deliver them.",
      "Mr Thompson added that major infrastructure projects must be supported by a strong economic case and linked to wider growth.",
      "He believes the continued development of New Stanton Park could provide the evidence needed to move Junction 25a closer to becoming a reality.",
      "The proposed junction remains at an early stage, with the council’s appraisal expected to play an important role in determining whether the scheme is viable and how it could progress.",
    ],
    imageSrc: "/m1-junction-25-sandiacre.png",
    imageAlt:
      "The A52 approach to M1 Junction 25, with lanes marked for Derby and Nottingham",
    imageFit: "cover",
    imageLabel: "M1 Junction 25 at Sandiacre",
    imageStyle: "bg-brand-accent/10",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "council-urges-drivers-not-to-pay-for-free-weekend-parking",
    title: "Council urges drivers not to pay for free weekend parking",
    date: "2026-08-08",
    excerpt:
      "Erewash Borough Council is reminding motorists that its car parks are free at weekends after drivers paid more than £12,500 unnecessarily.",
    checkedOn: "2026-10-10",
    sourceUrl: "https://www.erewash.gov.uk/news/2026/council-begs-saturday-car-park-users-dont-pay",
    sourceLabel: "Read the council’s parking announcement",
    content: [
      "Erewash Borough Council says weekend parking is free in the car parks it operates. Its announcement reports that drivers nevertheless paid £12,577 on Saturdays in the first three months after Saturday charges were removed.",
      "The council says weekday charges apply from 8am to 6pm, at £1.50 for up to three hours or £4 for longer stays. It also identifies an exception: a weekend payment may be needed when pre-paying for a stay continuing into Monday or later.",
      "The announcement says the unnecessary payments cannot be refunded. Check the sign at your chosen car park and the council’s current information before paying."
    ],
    planning: [
      { title: "Check who operates the car park", copy: "This announcement concerns council-operated car parks. Do not apply it to a private car park just because it is in Long Eaton. Read the operator name and payment instructions where you park." },
      { title: "Check your departure day", copy: "A visit ending on Sunday is different from leaving a car until Monday. If your stay crosses into a charging day, read the payment instructions for the whole stay." }
    ],
    imageSrc: "/free-weekend-parking.png",
    imageAlt:
      "A yellow sign beside a parking meter stating that parking is free on Saturdays and Sundays",
    imageFit: "cover",
    imageLabel: "Free weekend parking",
    imageStyle: "bg-brand-accent/10",
  },
  {
    id: "long-eaton-town-centre-transformation-underway",
    title: "Long Eaton’s £10 million town centre plans: what visitors need to check",
    date: "2026-08-03",
    excerpt:
      "The council’s announcement sets out changes to High Street and Tamworth Road, including parking and access arrangements to check before visiting.",
    checkedOn: "2026-10-10",
    content: [
      "Erewash Borough Council’s announcement sets out a £10 million project covering Long Eaton High Street and Tamworth Road, funded through the £25 million Town Deal. The published plan gives a June start and completion by the following spring; it is a project announcement rather than a live construction progress report.",
      "The council describes new paving, greener public spaces and designs reflecting the furniture industry. It also plans a Laura Knight trail and a return of the market to Market Place, with contractors working with businesses to keep them open.",
      "The notice says High Street Blue Badge access and parking will be suspended during works, with alternative Blue Badge parking in Beaconsfield and Claye Street car parks. It says Tamworth Road will remain open with possible narrowing or one-way arrangements."
    ],
    planning: [
      { title: "Plan a specific visit", copy: "Check the council’s latest works information and contact your destination if you need to confirm an entrance or delivery route. A planned completion date does not establish which section is open today." }
    ],
    imageSrc: "/long-eaton-town-centre-transformation.jpg",
    imageAlt:
      "Artist's impression of the transformed Long Eaton High Street with new paving, planting, seating and a timber pergola",
    imageFit: "cover",
    imageLabel: "Long Eaton town centre transformation",
    imageStyle: "bg-brand-accent/10",
    sourceUrl:
      "https://www.erewash.gov.uk/news/2026/long-eatons-ps10million-revamp-start-june",
    sourceLabel: "Read the Erewash Borough Council update",
  },
  {
    id: "free-summer-bus-travel-2026",
    validUntil: "2026-08-31",
    title: "Free August bus travel for 5 to 18 year olds",
    date: "2026-07-28",
    excerpt:
      "Free travel is available for ages 5–15 across eligible trentbarton services, with an EMCCA extension covering 16–18 year olds on qualifying routes.",
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

// Use the London calendar date so promotions expire consistently across renderers.
export function isNewsExpired(item: NewsItem, now = new Date()) {
  if (!item.validUntil) return false;
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) => parts.find((value) => value.type === type)?.value;
  return item.validUntil < `${part('year')}-${part('month')}-${part('day')}`;
}
