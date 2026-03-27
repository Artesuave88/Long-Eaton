import { h as head, e as ensure_array_like } from "../../../chunks/index.js";
import { B as BusinessCard } from "../../../chunks/BusinessCard.js";
import { S as SearchBar, C as CategoryFilter, E as EmptyState } from "../../../chunks/SearchBar.js";
import { s as slugMatches } from "../../../chunks/format.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
import { b as businesses, a as businessCategories } from "../../../chunks/businesses.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredBusinesses;
    let query = "";
    let selectedCategory = "All";
    const orderedBusinesses = [...businesses].sort((a, b) => Number(Boolean(b.isReal)) - Number(Boolean(a.isReal)));
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
        copy: "One real listing has been added so far, with the wider directory still being built up."
      });
      $$renderer3.push(`<!----> <div class="surface-card mb-6 flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5"><p class="text-sm leading-7 text-ink/72">Featured first: <span class="font-semibold text-ink">Long Eaton BJJ</span> is the first live business now in the directory.</p> <a href="/businesses/long-eaton-bjj" class="text-sm font-semibold text-brand-700 hover:text-brand-900">View featured business</a></div> <div class="surface-card mb-8 grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">`);
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
      $$renderer3.push(`<!----></div> `);
      if (filteredBusinesses.length) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
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
          message: "Try a different search term or clear the category filter to browse more local favourites."
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
