export type VisitPlan = {
  id: string;
  title: string;
  setting: 'park' | 'water';
  summary: string;
  start: string;
  steps: string[];
  check: string;
  href: string;
};

export const outdoorPlans: VisitPlan[] = [
  {
    id: 'west-park',
    title: 'A flexible hour at West Park',
    setting: 'park',
    summary: 'Choose this when you want outdoor time without committing to a long route.',
    start: 'West Park, Wilsthorpe Road, NG10 3NL.',
    steps: [
      'Pick your entrance and a meeting point before separating from your group.',
      'Spend the first part of your visit exploring the park, then choose a spot to pause rather than adding a second destination.',
      'Return to your starting point with time left for the journey home.'
    ],
    check: 'Check the council’s park information for access arrangements; vehicle access into the park needs a permit.',
    href: 'https://www.erewash.gov.uk/your-borough/directory-parks/west-park-long-eaton'
  },
  {
    id: 'erewash-canal',
    title: 'An out-and-back canal walk',
    setting: 'water',
    summary: 'Choose this for walking rather than a fixed attraction. You decide the distance.',
    start: 'Choose an Erewash Canal access point on the Trust’s map before leaving.',
    steps: [
      'Record your starting point and choose one direction along the towpath.',
      'For a one-hour outing, turn around after about 20 minutes to leave a margin for stops and a slower return.',
      'Return along the same stretch; avoid adding an unfamiliar loop when you have a fixed finish time.'
    ],
    check: 'Check the canal map and notices. Towpath surfaces and access points vary; this is a planning idea, not a surveyed accessible route.',
    href: 'https://canalrivertrust.org.uk/canals-and-rivers/erewash-canal'
  },
  {
    id: 'trent-lock',
    title: 'Watch the waterways at Trent Lock',
    setting: 'water',
    summary: 'Choose this for a destination where you can pause and watch boats, rather than covering distance.',
    start: 'Lock Lane, Sawley, Long Eaton, NG10 2FY.',
    steps: [
      'Start at the lock and use the Trust’s local map to orient yourself.',
      'Watch the waterway junction, then decide whether you want a short walk or to stay near your starting point.',
      'Allow for your return journey separately from the time spent at the water.'
    ],
    check: 'The Trust lists free entry and a free council car park, but no public toilets on site. Check its visitor page before travelling.',
    href: 'https://canalrivertrust.org.uk/canals-and-rivers/places-to-visit/trent-lock'
  }
];

export function filterVisitPlans(plans: VisitPlan[], setting: 'all' | VisitPlan['setting']) {
  return plans.filter((plan) => setting === 'all' || plan.setting === setting);
}
