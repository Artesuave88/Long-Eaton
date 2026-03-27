import { b as escape_html, c as bind_props, h as head, e as ensure_array_like } from "../../../chunks/index.js";
import { E as EmptyState } from "../../../chunks/EmptyState.js";
import { a as formatDisplayDate } from "../../../chunks/format.js";
/* empty css                                                 */
import { I as ImagePlaceholder } from "../../../chunks/ImagePlaceholder.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
function NewsCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let item = $$props["item"];
    $$renderer2.push(`<article class="surface-card surface-card-hover overflow-hidden">`);
    ImagePlaceholder($$renderer2, {
      label: item.imageLabel,
      style: item.imageStyle,
      className: "h-44 w-full rounded-none"
    });
    $$renderer2.push(`<!----> <div class="p-5"><p class="text-sm text-brand-muted">${escape_html(formatDisplayDate(item.date))}</p> <h3 class="mt-3 text-[1.45rem] leading-tight text-brand-text">${escape_html(item.title)}</h3> <p class="body-copy-sm mt-4">${escape_html(item.excerpt)}</p> <a href="/news" class="link-subtle mt-5">Read update</a></div></article>`);
    bind_props($$props, { item });
  });
}
const newsItems = [];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1gc460s", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>News | Love Long Eaton</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Read local updates, seasonal notes and business news from around Long Eaton."/>`);
    });
    $$renderer2.push(`<section class="section-surface"><div class="container-shell section-space">`);
    SectionHeading($$renderer2, {
      eyebrow: "News",
      title: "Local updates and short reads",
      copy: "News, notices and useful updates from around Long Eaton."
    });
    $$renderer2.push(`<!----> `);
    if (newsItems.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><div class="grid gap-6"><!--[-->`);
      const each_array = ensure_array_like(newsItems);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        NewsCard($$renderer2, { item });
      }
      $$renderer2.push(`<!--]--></div> <div class="space-y-6"><!--[-->`);
      const each_array_1 = ensure_array_like(newsItems);
      for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
        let item = each_array_1[$$index_2];
        $$renderer2.push(`<article class="surface-card p-6"><p class="eyebrow">${escape_html(formatDisplayDate(item.date))}</p> <h2 class="mt-3 text-2xl text-brand-text">${escape_html(item.title)}</h2> <div class="body-copy-sm mt-4 space-y-4"><!--[-->`);
        const each_array_2 = ensure_array_like(item.content);
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let paragraph = each_array_2[$$index_1];
          $$renderer2.push(`<p>${escape_html(paragraph)}</p>`);
        }
        $$renderer2.push(`<!--]--></div></article>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      EmptyState($$renderer2, {
        title: "No updates are listed right now",
        message: "Check back after the next round of town news, event notices or business updates."
      });
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
export {
  _page as default
};
