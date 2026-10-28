import type { SearchGuide } from './guides';

const museumUrl = 'https://www.erewash.gov.uk/your-borough/erewash-museum/whats';
const swimmingUrl = 'https://www.leisurecentre.com/west-park-leisure-centre/swim/swimming-pool-timetable';

export const halfTermGuide: SearchGuide = {
  slug: 'things-to-do-this-half-term',
  title: 'Things to do this half term',
  validUntil: '2026-11-03',
  seoTitle: 'October Half Term 2026: Things to Do in Long Eaton',
  eyebrow: '28 October–3 November 2026',
  description: 'Family activities in Long Eaton from 28 October to 3 November 2026, including Halloween crafts, the circus, free activities and swimming, plus nearby Ilkeston events.',
  lastUpdated: '28 October 2026',
  checkedOn: '2026-10-28',
  intro: [],
  hideByline: true,
  sections: [
    {
      title: 'Uncle Sam’s Circus at West Park',
      validUntil: '2026-11-01',
      imageSrc: '/editorial/uncle-sams-circus.jpg',
      imageAlt: 'Uncle Sam’s Circus performers in red, white and blue feathered costumes',
      imageFit: 'cover',
      imageCredit: 'Uncle Sam’s Great American Circus',
      group: 'Long Eaton · Wednesday 28 October–Sunday 1 November',
      copy: 'A family big-top show at West Park Event Field, NG10 3NL, with acrobatics, motorcycle stunts and the Wheel of Death. Performances are listed across these five days, including Saturday 31 October at 2pm (doors 1:30pm). The Saturday listing shows tickets at £24.93–£32.52 including booking fees. Check other showtimes and ticket categories before booking.',
      href: 'https://www.ticketsource.com/uncle-sams-circus/uncle-sam-s-circus-atlong-eaton/2026-10-31/14%3A00/t-ldvdoeg',
      linkLabel: 'Check circus tickets and showtimes'
    },
    {
      title: 'Free Halloween Fun Day',
      validUntil: '2026-10-30',
      endTime: '14:00',
      imageSrc: '/editorial/halloween-fun-day.png',
      imageAlt: 'Erewash Borough Council poster advertising free Halloween fun days for ages 7–12',
      imageFit: 'contain',
      imageCredit: 'Erewash Borough Council',
      group: 'Long Eaton · Friday 30 October · 10am–2pm',
      copy: 'Halloween crafts, games and sports in the sports hall at Wilsthorpe School, Derby Road, NG10 4WT. Free for children aged 7–12 living in Erewash, with lunch included. Register through the council and wait for confirmation of a place.',
      href: 'https://www.erewash.gov.uk/form/halloween-fun-day',
      linkLabel: 'Register interest with the council'
    },
    {
      title: 'Long Eaton junior parkrun',
      validUntil: '2026-11-01',
      imageSrc: '/jnr-park-run.jpg',
      imageAlt: 'Children taking part in Long Eaton junior parkrun',
      imageFit: 'cover',
      group: 'Long Eaton · Sunday 1 November · 9am',
      copy: 'A free weekly 2km run or walk for ages 4–14 at West Park, Wilsthorpe Road, NG10 4AA. Register with parkrun before the first visit and bring a barcode for a recorded result. This date follows the usual Sunday schedule; check the event’s latest notices for cancellations.',
      href: '/events/long-eaton-junior-parkrun',
      linkLabel: 'Plan a visit to junior parkrun'
    },
    {
      title: 'Swimming and Fun & Floats',
      validUntil: '2026-11-03',
      imageSrc: '/editorial/west-park-pool.jpg',
      imageAlt: 'The indoor swimming pool at West Park Leisure Centre',
      imageFit: 'cover',
      imageCredit: 'West Park Leisure Centre / Leisurecentre.com',
      group: 'Long Eaton · Weekend, Monday and Tuesday options',
      copy: 'West Park Leisure Centre’s regular Sunday timetable lists Fun & Floats in the main pool at 12:30–1:30pm and 1:30–2:30pm. Parent-and-child and public swimming sessions also offer options on Monday 2 and Tuesday 3 November. Paid admission; confirm the date, current price, places and supervision requirements through the centre.',
      href: swimmingUrl,
      linkLabel: 'Check the swimming timetable'
    },
    {
      title: 'West Park play areas',
      validUntil: '2026-11-03',
      imageSrc: '/west-park.jpg',
      imageAlt: 'West Park in Long Eaton',
      imageFit: 'cover',
      group: 'Long Eaton · Flexible outdoor option',
      copy: 'Choose the toddler or junior play area, bring a scooter for the skatepark, or use the games area for an informal outing at your own pace. The park is free to enter. Plan for daylight and the weather; the splash pad’s summer season has ended.',
      href: '/discover-long-eaton#west-park',
      linkLabel: 'Explore West Park'
    },
    {
      title: 'Space & Science Week',
      validUntil: '2026-10-30',
      endTime: '16:00',
      imageSrc: '/editorial/erewash-museum-halloween.jpg',
      imageAlt: 'Seasonal pumpkin decorations outside Erewash Museum',
      imageFit: 'cover',
      imageCredit: 'Erewash Borough Council / Erewash Museum',
      group: 'Nearby: Ilkeston · 28–30 October · 11am–4pm',
      copy: 'Erewash Museum has hands-on science experiments, space-themed crafts, interactive workshops and a science trail for all ages. Free entry with no booking required; activities are first come, first served. Children must be accompanied by a responsible adult. This event is in Ilkeston, not Long Eaton.',
      href: museumUrl,
      linkLabel: 'See the museum programme'
    },
    {
      title: 'All Treat and No Trick!',
      validUntil: '2026-10-31',
      endTime: '16:00',
      imageSrc: '/editorial/erewash-museum-halloween.jpg',
      imageAlt: 'A smiling Halloween pumpkin outside the entrance to Erewash Museum',
      imageFit: 'cover',
      imageCredit: 'Erewash Borough Council / Erewash Museum',
      group: 'Nearby: Ilkeston · Saturday 31 October · 11am–4pm',
      copy: 'A cheerful trick-or-treat trail at Erewash Museum without scary surprises. Costumes are welcome, and the ground floor is accessible. Free entry, no booking required; children must attend with a responsible adult. A gentle Halloween option for little ones and families in nearby Ilkeston.',
      href: museumUrl,
      linkLabel: 'Check Halloween at the museum'
    },
  ],
  sources: [
    { label: 'Uncle Sam’s Circus — production photographs', href: 'https://american-circus.co.uk/2026-production' },
    { label: 'Erewash Borough Council — Halloween fun day poster', href: 'https://www.erewash.gov.uk/community-support/community-health-and-wellbeing/holiday-activity-and-food' },
    { label: 'West Park Leisure Centre — pool photograph', href: 'https://www.leisurecentre.com/west-park-leisure-centre' },
    { label: 'Erewash Borough Council — museum Halloween photograph', href: 'https://www.erewash.gov.uk/news/2026/test-tubes-treats-and-crafts-half-term' },
    { label: 'TicketSource — Uncle Sam’s Circus, Long Eaton', href: 'https://www.ticketsource.com/uncle-sams-circus/uncle-sam-s-circus-atlong-eaton/2026-10-31/14%3A00/t-ldvdoeg' },
    { label: 'Erewash Borough Council — Halloween Fun Day registration', href: 'https://www.erewash.gov.uk/form/halloween-fun-day' },
    { label: 'Erewash Borough Council — junior parkrun schedule', href: 'https://www.erewash.gov.uk/community-support/community-health-and-wellbeing/parkrun' },
    { label: 'West Park Leisure Centre — regular swimming timetable', href: swimmingUrl },
    { label: 'Erewash Museum — half-term and Halloween programme', href: museumUrl },
    { label: 'Erewash Borough Council — play areas', href: 'https://www.erewash.gov.uk/your-borough/play-areas' },
    { label: 'Trentbarton — West Park splash pad season ends 30 September', href: 'https://www.trentbarton.co.uk/news-and-media/our-news/article/splashpad' },
  ],
  relatedSlugs: ['childrens-activities-in-long-eaton', 'outdoor-days-out-in-long-eaton'],
  eventTopics: []
};
