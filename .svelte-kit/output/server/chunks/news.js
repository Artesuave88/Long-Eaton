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
    $$renderer2.push(`<!----> <div class="p-5"><p class="text-sm text-ink/55">${escape_html(formatDisplayDate(item.date))}</p> <h3 class="mt-3 font-display text-2xl text-ink">${escape_html(item.title)}</h3> <p class="mt-4 text-sm leading-7 text-ink/72">${escape_html(item.excerpt)}</p> <a href="/news" class="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900">Read more</a></div></article>`);
    bind_props($$props, { item });
  });
}
const newsItems = [
  {
    id: "news-1",
    slug: "spring-guide-to-shopping-local",
    title: "A Spring Guide to Shopping Local in Long Eaton",
    date: "2026-03-18",
    excerpt: "New season arrivals, independent windows and easy reasons to spend your Saturday in town.",
    content: [
      "Spring is a brilliant time to explore Long Eaton’s independents, with new stock landing across fashion, gifting, home and food.",
      "This season guide encourages residents and visitors to make a day of it, stopping for coffee, browsing local shops and discovering a few businesses they have not tried before."
    ],
    imageLabel: "Shop local",
    imageStyle: "from-sun/70 via-white to-brand-100"
  },
  {
    id: "news-2",
    slug: "community-groups-bring-west-park-to-life",
    title: "Community Groups Bring West Park to Life This Month",
    date: "2026-03-11",
    excerpt: "From family meet-ups to outdoor classes, the park is becoming a bigger part of town life.",
    content: [
      "West Park continues to grow as a go-to setting for community events, active wellbeing and family-friendly afternoons.",
      "Local groups are adding more pop-up sessions and informal gatherings that make the park feel even more central to life in Long Eaton."
    ],
    imageLabel: "Community park",
    imageStyle: "from-brand-500 via-brand-100 to-sand"
  },
  {
    id: "news-3",
    slug: "new-offers-across-town-centre",
    title: "New Offers Across the Town Centre",
    date: "2026-03-05",
    excerpt: "Cafes, studios and shops are rolling out limited-time offers to welcome spring visitors.",
    content: [
      "Several local businesses have introduced early spring offers, giving people another reason to shop local and spend longer in town.",
      "Highlights include tasting menus, bundle deals, free event add-ons and welcome discounts for first-time visitors."
    ],
    imageLabel: "Town offers",
    imageStyle: "from-coral/90 via-sand to-white"
  }
];
export {
  NewsCard as N,
  newsItems as n
};
