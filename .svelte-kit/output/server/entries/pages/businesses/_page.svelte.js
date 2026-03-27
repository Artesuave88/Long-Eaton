import { a6 as attr_class, a as attr, b as escape_html, c as bind_props, h as head, e as ensure_array_like } from "../../../chunks/index.js";
import { I as ImagePlaceholder } from "../../../chunks/ImagePlaceholder.js";
import { S as SearchBar, C as CategoryFilter } from "../../../chunks/SearchBar.js";
import { E as EmptyState } from "../../../chunks/EmptyState.js";
import { s as slugMatches } from "../../../chunks/format.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
import { b as businesses, a as businessCategories } from "../../../chunks/businesses.js";
function BusinessCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let business = $$props["business"];
    $$renderer2.push(`<article${attr_class(`surface-card surface-card-hover overflow-hidden ${business.isReal ? "ring-1 ring-brand-200" : ""}`)}>`);
    if (business.imageSrc) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex h-48 w-full items-center justify-center bg-brand-900 p-6"><img${attr("src", business.imageSrc)}${attr("alt", business.imageAlt ?? business.name)} class="max-h-full max-w-full object-contain"/></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      ImagePlaceholder($$renderer2, {
        label: business.imageLabel,
        style: business.imageStyle,
        className: "h-48 w-full rounded-none"
      });
    }
    $$renderer2.push(`<!--]--> <div class="p-5"><div class="flex flex-wrap items-center gap-2"><p class="eyebrow">${escape_html(business.category)}</p> `);
    if (business.isReal) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="chip">Featured local business</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <h3 class="mt-3 text-[1.55rem] leading-tight text-ink">${escape_html(business.name)}</h3> <p class="mt-2 text-sm font-medium text-ink/55">${escape_html(business.location)}</p> <p class="body-copy-sm mt-4">${escape_html(business.description)}</p> <div class="mt-5 flex flex-wrap gap-4"><a${attr("href", `/businesses/${business.slug}`)} class="link-subtle">View details</a> `);
    if (business.website) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", business.website)} target="_blank" rel="noreferrer" class="inline-flex items-center text-sm font-semibold text-ink/65 hover:text-ink">Visit website</a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div></article>`);
    bind_props($$props, { business });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredBusinesses;
    let query = "";
    let selectedCategory = "All";
    const orderedBusinesses = [...businesses];
    filteredBusinesses = orderedBusinesses.filter((business) => {
      const matchesQuery = slugMatches(business.name, query) || slugMatches(business.description, query) || slugMatches(business.location, query);
      const matchesCategory = selectedCategory === "All" || business.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("may73r", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Businesses | Love Long Eaton</title>`);
        });
        $$renderer4.push(`<meta name="description" content="Browse businesses, local services and food spots in and around Long Eaton."/>`);
      });
      $$renderer3.push(`<section class="container-shell section-space">`);
      SectionHeading($$renderer3, {
        eyebrow: "Businesses",
        title: "Browse local businesses in Long Eaton",
        copy: "Only verified local listings are shown here."
      });
      $$renderer3.push(`<!----> <div class="surface-card mb-6 flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5"><p class="body-copy-sm">Currently listed: <span class="font-semibold text-ink">Long Eaton BJJ</span>.</p> <a href="/businesses/long-eaton-bjj" class="button-subtle">View business</a></div> <div class="section-band-muted mb-8 p-3 sm:p-4"><div class="surface-card grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">`);
      SearchBar($$renderer3, {
        placeholder: "Search businesses, categories or streets",
        get value() {
          return query;
        },
        set value($$value) {
          query = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      CategoryFilter($$renderer3, {
        categories: businessCategories,
        get selected() {
          return selectedCategory;
        },
        set selected($$value) {
          selectedCategory = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> `);
      if (filteredBusinesses.length) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="section-grid"><!--[-->`);
        const each_array = ensure_array_like(filteredBusinesses);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let business = each_array[$$index];
          BusinessCard($$renderer3, { business });
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
        EmptyState($$renderer3, {
          title: "No businesses matched your search",
          message: "Try a different search term or clear the category filter to browse the current live listings."
        });
      }
      $$renderer3.push(`<!--]--></section>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
