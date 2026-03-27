import { b as escape_html, e as ensure_array_like, a as attr, c as bind_props, h as head } from "../../../chunks/index.js";
import { C as CTASection } from "../../../chunks/CTASection.js";
import { I as ImagePlaceholder } from "../../../chunks/ImagePlaceholder.js";
import { E as EmptyState } from "../../../chunks/EmptyState.js";
/* empty css                                                 */
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
function DiscoverCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let category = $$props["category"];
    $$renderer2.push(`<article class="surface-card surface-card-hover overflow-hidden p-4">`);
    ImagePlaceholder($$renderer2, {
      label: category.imageLabel,
      style: category.imageStyle,
      className: "h-44 w-full"
    });
    $$renderer2.push(`<!----> <div class="px-1 pb-2 pt-5"><h3 class="text-[1.45rem] leading-tight text-brand-text">${escape_html(category.title)}</h3> <p class="body-copy-sm mt-3">${escape_html(category.description)}</p> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
    const each_array = ensure_array_like(category.highlights);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let highlight = each_array[$$index];
      $$renderer2.push(`<span class="chip">${escape_html(highlight)}</span>`);
    }
    $$renderer2.push(`<!--]--></div> <a${attr("href", category.link)} class="link-subtle mt-5">See more</a></div></article>`);
    bind_props($$props, { category });
  });
}
const discoverCategories = [];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("b0xv90", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Discover | Love Long Eaton</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Explore food, shops, walks and everyday places around Long Eaton."/>`);
    });
    $$renderer2.push(`<section class="section-surface"><div class="container-shell section-space">`);
    SectionHeading($$renderer2, {
      eyebrow: "Discover",
      title: "A few easy ways into Long Eaton",
      copy: "Food, shops, walks and useful local suggestions gathered in one place."
    });
    $$renderer2.push(`<!----> `);
    if (discoverCategories.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      const each_array = ensure_array_like(discoverCategories);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let category = each_array[$$index];
        DiscoverCard($$renderer2, { category });
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      EmptyState($$renderer2, {
        title: "No guides matched this section",
        message: "Explore the events and businesses pages for current town highlights and local recommendations."
      });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section-muted"><div class="container-shell section-space"><div class="grid gap-6 lg:grid-cols-3"><div class="surface-card p-7"><h2 class="text-2xl text-brand-text">Start with the town centre</h2> <p class="body-copy-sm mt-4">Use Discover to pick up ideas for food, independent shops, waterside walks and easy stops around town.</p></div> <div class="surface-card p-7"><h2 class="text-2xl text-brand-text">Built for everyday plans</h2> <p class="body-copy-sm mt-4">Short local guides help with afternoons out, weekend browsing and familiar routes through Long Eaton.</p></div> <div class="surface-card p-7"><h2 class="text-2xl text-brand-text">Linked to the wider guide</h2> <p class="body-copy-sm mt-4">Move between places to visit, events to catch and businesses to know without losing the thread of the day.</p></div></div></div></section> <section class="section-surface"><div class="container-shell section-space">`);
    CTASection($$renderer2, {
      title: "Want to suggest a local route or recommendation?",
      copy: "If there's a walk, shop trail or useful local tip we should add, send it over.",
      primaryHref: "/contact",
      primaryLabel: "Suggest an idea",
      secondaryHref: "/businesses",
      secondaryLabel: "Browse businesses"
    });
    $$renderer2.push(`<!----></div></section>`);
  });
}
export {
  _page as default
};
