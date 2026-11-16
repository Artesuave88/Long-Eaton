import type { NewsItem } from "$types/content";
import { hasDeadlinePassed } from "$utils/dates";

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
    id: "gnome-mans-land-long-eaton-ma-and-pa",
    layout: "gnome-feature",
    title: "No place like gnome: meet the little residents making a big impression in Long Eaton",
    date: "2026-11-16",
    originalContent: true,
    excerpt: "Royalty, family heirlooms and a couple of Halloween Gnomebies: Ma and Pa reveal the big-hearted story behind Long Eaton’s Gnome Man’s Land.",
    content: [
      "Long Eaton has a community where royalty rubs shoulders with mischievous characters, newcomers get a fresh coat of paint and even losing your head needn’t stop you settling in. Welcome to Gnome Man’s Land — the gnome community on the train station roundabout in Long Eaton, with a rather large personality.",
      "After our first story about the growing gnome gathering, the couple behind it got in touch to answer the big question: how did all these little residents get here? Known affectionately as Ma and Pa, they prefer to remain anonymous. Their story began with a few unwanted garden gnomes and a reluctance to take them to the tip.",
      "Instead, they gave the ornaments a new home on the island. Passers-by noticed, photographs followed and local people began offering unwanted gnomes of their own. In their email to Love Long Eaton, Ma and Pa say the population has now grown to more than 150. Apparently, word gets around when the accommodation comes with a makeover.",
      "Behind the fun is a voluntary labour of love. The couple collect donations, repair broken pieces, repaint faded faces and dream up seasonal displays. A damaged hat or years of weathering won’t automatically rule out a new arrival: they enjoy bringing back characters that might otherwise have been thrown away.",
      "Some residents bring more than pointy hats and impressive beards. Norman and Smee were donated by a woman whose husband had died. Originally from the Isle of Wight, the pair had been part of the family for more than 32 years, travelling through several house moves. Ma and Pa restored and painted them so their next chapter could keep those memories alive while making other people smile.",
      "The island’s royal contingent has its own history. Some came from a woman in Derby who said the figures had brought her comfort during a difficult time. As life moved forward, she wanted them to bring happiness to others. Two larger residents, the Queen and the Guardsman, were donated by Opulence Bridals on Derby Road in Long Eaton after appearing in a Jubilee display. A traffic island may be an unconventional royal residence, but the neighbours are certainly colourful.",
      "Then there are Mr and Mrs Gnomebie. The original Mr Gnome arrived having completely lost his head. Ma and Pa repaired him and restored the couple, but when another family later donated a replacement pair, the originals were given a spooky second career. Reinvented as Halloween Gnomebies, they joined the seasonal display before going into hiding until their next appearance. Retirement, it seems, is optional; reinvention is encouraged.",
      "The displays also make room for quieter moments. Ma and Pa describe Remembrance arrangements with handmade poppies and wreaths contributed by the community, alongside Halloween and Christmas displays throughout the year. Some donated gnomes remember loved ones, giving this cheerful collection a deeply personal side.",
      "The couple say their Facebook page has reached more than a million views. They also report more than 700 signatures on an Erewash Borough Council petition asking for the island to be officially recognised as Gnome Man’s Land. Those figures come from their email; the petition link below lets readers check its latest position and whether signing is still open.",
      "Ma and Pa welcome donations of unwanted garden gnomes, including those in need of repair. Anyone with a potential new resident can get in touch through the project’s Facebook page, where the couple share new arrivals, makeovers and island adventures.",
      "For all the royal visitors and seasonal mischief, the heart of the project is simple: giving old things another chance and giving people something to smile about. As Ma and Pa put it: “all of this happened because we couldn’t bring ourselves to take a few old gnomes to the tip!”",
      "This feature is based on an email supplied by Ma and Pa of Gnome Man’s Land, shared with their permission. Their names remain private at their request.",
    ],
    sourceUrl: "https://www.facebook.com/share/1C6vFPSsTC/",
    sourceLabel: "Follow Gnome Man’s Land on Facebook",
    gallery: [
      { id: "old-friends", src: "/editorial/gnome-mans-land/old-friends.jpg", alt: "Two restored gnomes in blue and green hats wearing handmade red poppies", caption: "Old friends, fresh paint and a new chapter on the island.", credit: "Gnome Man’s Land" },
      { id: "royal-remembrance", src: "/editorial/gnome-mans-land/royal-remembrance.jpg", alt: "Queen and Guardsman gnomes with smaller royal figures, a corgi and a poppy wreath", caption: "A royal welcome, with a thoughtful tribute for Remembrance.", credit: "Gnome Man’s Land" },
      { id: "gnomes-crossing", src: "/editorial/gnome-mans-land/gnomes-crossing.jpg", alt: "A gnome in a black and orange outfit beneath a yellow Gnomes Crossing sign", caption: "You have been warned: plenty of personality ahead.", credit: "Gnome Man’s Land" },
      { id: "sunshine", src: "/editorial/gnome-mans-land/sunshine.jpg", alt: "A smiling gnome wearing red sunglasses and holding a colourful drink", caption: "Bringing a little sunshine to Long Eaton, whatever the weather.", credit: "Gnome Man’s Land" },
      { id: "snail-rider", src: "/editorial/gnome-mans-land/snail-rider.jpg", alt: "A red-hatted gnome with a poppy riding a large ornamental snail", caption: "One resident has found a rather leisurely way to get around.", credit: "Gnome Man’s Land" },
      { id: "island", src: "/editorial/gnome-mans-land/island.jpg", alt: "A wide view of the traffic island filled with groups of gnomes around a KAM Servicing sign", caption: "A little traffic island. A whole community of characters.", credit: "Gnome Man’s Land" },
    ],
    sources: [
      { label: "View the official Gnome Man’s Land naming petition", href: "https://erewash.moderngov.co.uk/mgEPetitionDisplay.aspx?ID=55&RPID=11168544&HPID=11168544" },
      { label: "Follow Gnome Man’s Land on Facebook", href: "https://www.facebook.com/share/1C6vFPSsTC/" },
    ],
    imageSrc: "/editorial/gnome-mans-land/colourful-residents.jpg",
    imageAlt: "Three colourful island residents: a gnome with bunny ears, a waving figure in sunglasses and a pirate, surrounded by handmade poppies",
    imageCredit: "Gnome Man’s Land",
    imageFit: "cover",
    imagePosition: "center",
    imageLabel: "Gnome Man’s Land",
    imageStyle: "bg-brand-accent/10",
  },
  {
    id: "gnome-sweet-gnome-long-eaton-roundabout",
    title: "Gnome Sweet Gnome: Long Eaton Roundabout Has Some New Residents",
    date: "2026-10-30",
    originalContent: true,
    excerpt: "A growing gathering of garden gnomes on the train station roundabout is becoming a wonderfully quirky local landmark.",
    content: [
      "Update, 16 November 2026: the couple behind the island, known as Ma and Pa, have shared how it all began. Read our follow-up feature, linked below, to meet the residents of Gnome Man’s Land.",
      "What seems to have started with a solitary garden ornament has developed into something of a gathering, with little pointy hatted residents joining the increasing population on the train station roundabout.",
      "Nobody seems entirely sure whether they’ve been deliberately placed there, are slowly migrating from nearby gardens, or have simply heard that Long Eaton is the place to be.",
      "Whatever the explanation, the growing collection is becoming a wonderfully quirky local landmark.",
      "Naturally, this raises some important questions.",
      "Who was the first gnome?",
      "How many will eventually arrive?",
      "Is there some sort of waiting list?",
      "And, perhaps most importantly, who is actually in charge?",
      "For now, Long Eaton’s newest residents seem perfectly content watching the traffic go by and bringing a smile to passing motorists.",
      "So next time you’re passing, keep an eye out.",
      "Have you spotted the gnomes? Better still, do you know how it all started? Let us know.",
    ],
    sources: [
      { label: "Read the full story of Ma and Pa and Gnome Man’s Land", href: "https://www.lovelongeaton.com/news/gnome-mans-land-long-eaton-ma-and-pa" },
    ],
    imageSrc: "/editorial/gnome-sweet-gnome.jpg",
    imageAlt: "A collection of garden gnomes on the train station roundabout beneath the railway bridge",
    imageFit: "cover",
    imagePosition: "center 80%",
    imageLabel: "Gnome Sweet Gnome",
    imageStyle: "bg-brand-accent/10",
  },
  {
    id: "chestnut-fair-cancelled-2026",
    title: "Long Eaton’s Chestnut Fair cancelled for 2026 as High Street works continue",
    date: "2026-10-21",
    checkedOn: "2026-10-21",
    excerpt: "High Street regeneration works mean November’s Chestnut Fair will not go ahead. Organisers say it will return to Long Eaton in 2027.",
    content: [
      "Long Eaton’s Chestnut Fair will not take place this November because of ongoing regeneration works in High Street.",
      "The cancellation was confirmed in a joint statement from fair organiser Mellors Group and Erewash Borough Council, published on 12 October. The statement acknowledges the disappointment for people who enjoy the annual street fair and says it will return to Long Eaton in 2027.",
    ],
    sourceUrl: "https://www.erewash.gov.uk/news/2026/chestnut-fair-will-not-go-ahead",
    sourceLabel: "Read the joint Chestnut Fair statement",
    sources: [
      { label: "Read the joint Chestnut Fair statement", href: "https://www.erewash.gov.uk/news/2026/chestnut-fair-will-not-go-ahead" },
    ],
    imageSrc: "/editorial/chestnut-fair-cancelled-2026.jpg",
    imageAlt: "Fairground rides lit up at night with a red banner reading CANCELLED",
    imageFit: "contain",
    imageLabel: "Chestnut Fair cancelled for 2026",
    imageStyle: "bg-brand-accent/10"
  },
  {
    id: "tamworth-road-restrictions-october-2026",
    title: "Tamworth Road works: overnight closures scheduled to end, southbound restriction continues",
    date: "2026-10-01",
    checkedOn: "2026-10-10",
    excerpt: "The council scheduled the final overnight closure to lift on 10 October, while its notice says southbound traffic remains restricted until December.",
    content: [
      "Erewash Borough Council’s 1 October announcement set out a week of overnight Tamworth Road closures as part of Long Eaton’s town centre refurbishment. Closures were scheduled from 7pm to 5am, beginning on Sunday 4 October, with the final closure due to lift on Saturday 10 October.",
      "The council says the overnight work allows construction to move from one side of the road to the other while new paving is installed. Its notice also says the road has become one-way, with southbound vehicles barred until December.",
      "These are the announced arrangements, rather than a live traffic report. Check the council’s latest information and signs on the route before travelling."
    ],
    planning: [{ title: "Plan the approach to your destination", copy: "Check which direction you can approach from before setting off, particularly if you normally drive south along Tamworth Road. Contact your destination if you need to confirm a delivery entrance or accessible arrival point during the works." }],
    sourceUrl: "https://www.erewash.gov.uk/news/2026/week-overnight-closures-tamworth-road-part-ps10m-long-eaton-revamp",
    sourceLabel: "Read the council’s Tamworth Road works notice",
    imageSrc: "/long-eaton-town-centre-transformation.jpg",
    imageAlt: "Artist’s impression of the planned Long Eaton town centre improvements",
    imageCredit: "Artist’s impression — Erewash Borough Council",
    imageLabel: "Tamworth Road and town centre works",
    imageStyle: "bg-brand-accent/10"
  },
  {
    id: "all-saints-sawley-bellringers-grant-september-2026",
    title: "Sawley’s All Saints bellringers receive £3,484 for tower improvements",
    date: "2026-09-24",
    checkedOn: "2026-10-10",
    excerpt: "A council community grant will help replace ageing bell ropes and improve the ringing room at All Saints Church in Sawley.",
    content: [
      "Bellringers at All Saints Church in Sawley have secured a £3,484 council grant towards improvements to their church tower. Erewash Borough Council’s announcement says the work includes eight replacement bell ropes, electrical improvements and an electric heater for the ringing room.",
      "The existing ropes are more than 30 years old and have needed repeated repairs. Replacement ropes are being commissioned from a specialist maker in Loughborough.",
      "Sawley councillor Harry Atkinson supported the application to the council’s community grants programme. The proposed refurbishment also includes a camera so learners and visitors can see the bells in motion without entering the belfry."
    ],
    planning: [{ title: "Interested in the local bellringing group?", copy: "The council’s article describes existing practice sessions rather than advertising an open event. Contact the church directly to ask about learning or visiting before attending a practice." }],
    sourceUrl: "https://www.erewash.gov.uk/news/2026/council-ps35k-makes-life-less-ropey-bellringers",
    sourceLabel: "Read the council’s All Saints bellringers announcement",
    imageSrc: "/editorial/sawley-bells.webp",
    imageAlt: "Historic bells and timber bell wheels inside the All Saints Church tower in Sawley",
    imagePosition: "center 65%",
    imageCredit: "Erewash Borough Council",
    imageLabel: "All Saints Church bellringers, Sawley",
    imageStyle: "bg-brand-section"
  },
  {
    id: "west-park-bridge-lace-industry-mural-september-2026",
    title: "New canal-side mural celebrates Long Eaton’s lace-making history",
    date: "2026-09-17",
    checkedOn: "2026-10-10",
    excerpt: "Artists Neil Keating and Elle Koziupa created a mural beside the new West Park Bridge, bringing lace-making and canal history into the waterfront design.",
    content: [
      "A new mural on the rear of the Sankey Upholstery building celebrates Long Eaton’s industrial history beside the Erewash Canal. Erewash Borough Council says artists Neil Keating and Elle Koziupa collaborated on the artwork for the new West Park Bridge waterfront.",
      "Koziupa’s contribution depicts a woman lace worker, while Keating’s design includes machinery and references to the canal. The council’s 17 September announcement described the mural being completed ahead of the bridge’s planned public opening on 19 September.",
      "The pedestrian and cycle bridge at Broad Street links the town centre with West Park. The mural forms part of the council’s public art initiative."
    ],
    planning: [{ title: "Add local history to a canal outing", copy: "If you are exploring the waterfront, look for the artwork from the public canal-side route. Its setting makes it a useful stopping point for noticing the connection between the waterway and the town’s industrial buildings." }],
    sourceUrl: "https://www.erewash.gov.uk/news/2026/artists-raced-complete-mural-bridge-opening",
    sourceLabel: "Read the council’s bridge mural announcement",
    imageSrc: "/editorial/west-park-mural.webp",
    imageAlt: "Canal-side mural depicting a lace worker and Long Eaton’s industrial history beside West Park Bridge",
    imagePosition: "center 55%",
    imageCredit: "Erewash Borough Council; mural by Neil Keating and Elle Koziupa",
    imageLabel: "Lace-making heritage at the West Park waterfront",
    imageStyle: "bg-brand-accent/10"
  },
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
];

// Use the London calendar date so promotions expire consistently across renderers.
export function isNewsExpired(item: NewsItem, now = new Date()) {
  return hasDeadlinePassed(item.validUntil, now);
}

export function getCurrentNews(now = new Date()) {
  return newsItems
    .filter((item) => !isNewsExpired(item, now))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsSections(now = new Date()) {
  const stories = getCurrentNews(now);
  return { latest: stories.slice(0, 3), archived: stories.slice(3) };
}
