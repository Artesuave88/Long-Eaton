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
const newsItems = [];
export {
  NewsCard as N,
  newsItems as n
};
