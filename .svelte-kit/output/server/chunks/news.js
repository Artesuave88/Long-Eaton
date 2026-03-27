import { b as escape_html, c as bind_props } from "./index.js";
import { f as formatDisplayDate } from "./format.js";
import { I as ImagePlaceholder } from "./ImagePlaceholder.js";
function NewsCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let item = $$props["item"];
    $$renderer2.push(`<article class="surface-card overflow-hidden">`);
    ImagePlaceholder($$renderer2, {
      label: item.imageLabel,
      style: item.imageStyle,
      className: "h-44 w-full rounded-none"
    });
    $$renderer2.push(`<!----> <div class="p-5"><p class="text-sm text-ink/55">${escape_html(formatDisplayDate(item.date))}</p> <h3 class="mt-3 font-display text-[1.7rem] leading-tight text-ink">${escape_html(item.title)}</h3> <p class="mt-4 text-sm leading-7 text-ink/72">${escape_html(item.excerpt)}</p> <a href="/news" class="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900">Read update</a></div></article>`);
    bind_props($$props, { item });
  });
}
const newsItems = [
  {
    id: "news-1",
    slug: "spring-guide-to-shopping-local",
    title: "A Spring Guide to Shopping Local in Long Eaton",
    date: "2026-03-18",
    excerpt: "A few straightforward ways to spend a Saturday around the shops and cafes in town.",
    content: [
      "Spring usually brings a small refresh to shop windows, menus and displays across the town centre.",
      "If you're heading in anyway, it's a good time to pair a browse with a coffee stop and a walk round a few independents you don't usually visit."
    ],
    imageLabel: "Shop local",
    imageStyle: "from-sun/70 via-white to-brand-100"
  },
  {
    id: "news-2",
    slug: "community-groups-bring-west-park-to-life",
    title: "Community Groups Bring West Park to Life This Month",
    date: "2026-03-11",
    excerpt: "From meet-ups to outdoor sessions, West Park is seeing more regular local use.",
    content: [
      "West Park keeps cropping up in more local plans, from informal family meet-ups to fitness sessions and small community events.",
      "That steady use matters because it makes the park feel lived-in rather than only busy on larger event days."
    ],
    imageLabel: "Community park",
    imageStyle: "from-brand-500 via-brand-100 to-sand"
  },
  {
    id: "news-3",
    slug: "new-offers-across-town-centre",
    title: "New Offers Across the Town Centre",
    date: "2026-03-05",
    excerpt: "Several cafes, studios and shops are running simple seasonal offers this month.",
    content: [
      "A handful of businesses across the centre have added short spring offers, from lunch deals to first-visit discounts.",
      "They are modest, but they give people another reason to call into places they may not have tried before."
    ],
    imageLabel: "Town offers",
    imageStyle: "from-coral/90 via-sand to-white"
  }
];
export {
  NewsCard as N,
  newsItems as n
};
