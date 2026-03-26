import { h as head, e as ensure_array_like, b as escape_html } from "../../../chunks/index.js";
import { f as formatDisplayDate } from "../../../chunks/format.js";
import { N as NewsCard, n as newsItems } from "../../../chunks/news.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1gc460s", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>News | Love Long Eaton</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Read the latest Long Eaton stories, seasonal updates and featured local offers."/>`);
    });
    $$renderer2.push(`<section class="container-shell section-space">`);
    SectionHeading($$renderer2, {
      eyebrow: "News",
      title: "Fresh stories and local updates",
      copy: "A simple news page for town highlights, offers and community stories."
    });
    $$renderer2.push(`<!----> <div class="grid gap-6 lg:grid-cols-3"><!--[-->`);
    const each_array = ensure_array_like(newsItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      NewsCard($$renderer2, { item });
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-12 grid gap-6 lg:grid-cols-3"><!--[-->`);
    const each_array_1 = ensure_array_like(newsItems);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let item = each_array_1[$$index_2];
      $$renderer2.push(`<article class="surface-card p-6 lg:col-span-1"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">${escape_html(formatDisplayDate(item.date))}</p> <h2 class="mt-3 font-display text-2xl text-ink">${escape_html(item.title)}</h2> <div class="mt-4 space-y-4 text-sm leading-7 text-ink/72"><!--[-->`);
      const each_array_2 = ensure_array_like(item.content);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let paragraph = each_array_2[$$index_1];
        $$renderer2.push(`<p>${escape_html(paragraph)}</p>`);
      }
      $$renderer2.push(`<!--]--></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
export {
  _page as default
};
