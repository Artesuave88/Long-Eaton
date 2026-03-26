import { h as head, e as ensure_array_like } from "../../../chunks/index.js";
import { S as SearchBar, C as CategoryFilter, E as EmptyState } from "../../../chunks/SearchBar.js";
import { E as EventCard } from "../../../chunks/EventCard.js";
import { s as slugMatches } from "../../../chunks/format.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
import { e as events, a as eventCategories } from "../../../chunks/events.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredEvents;
    let query = "";
    let selectedCategory = "All";
    filteredEvents = events.filter((event) => {
      const matchesQuery = slugMatches(event.title, query) || slugMatches(event.excerpt, query) || slugMatches(event.location, query);
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("13hsgdq", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Events | Love Long Eaton</title>`);
        });
        $$renderer4.push(`<meta name="description" content="Browse upcoming events in Long Eaton, from markets and family activities to food weekends and live music."/>`);
      });
      $$renderer3.push(`<section class="container-shell section-space">`);
      SectionHeading($$renderer3, {
        eyebrow: "Events",
        title: "What’s on in Long Eaton",
        copy: "Browse upcoming events, seasonal favourites and community-led reasons to spend more time in town."
      });
      $$renderer3.push(`<!----> <div class="surface-card mb-8 grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">`);
      SearchBar($$renderer3, {
        placeholder: "Search events, locations or ideas",
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
        categories: eventCategories,
        get selected() {
          return selectedCategory;
        },
        set selected($$value) {
          selectedCategory = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div> `);
      if (filteredEvents.length) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
        const each_array = ensure_array_like(filteredEvents);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let event = each_array[$$index];
          EventCard($$renderer3, { event });
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
        EmptyState($$renderer3, {
          title: "No events matched your search",
          message: "Try a broader search term or switch back to all categories to see more happening across Long Eaton."
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
