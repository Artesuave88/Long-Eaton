import { h as head, e as ensure_array_like } from "../../../chunks/index.js";
import { C as CTASection } from "../../../chunks/CTASection.js";
import { d as discoverCategories, D as DiscoverCard } from "../../../chunks/discover.js";
import { E as EmptyState } from "../../../chunks/EmptyState.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("b0xv90", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Discover | Love Long Eaton</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Explore food, shops, walks and everyday places around Long Eaton."/>`);
    });
    $$renderer2.push(`<section class="container-shell section-space">`);
    SectionHeading($$renderer2, {
      eyebrow: "Discover",
      title: "A few easy ways into Long Eaton",
      copy: "This section only publishes real local guides and recommendations."
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
        title: "No discover guides are live yet",
        message: "Routes, recommendations and local round-ups will appear here once they have been properly added."
      });
    }
    $$renderer2.push(`<!--]--></section> <section class="container-shell section-space pt-0"><div class="grid gap-6 lg:grid-cols-3"><div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Use the live sections</h2> <p class="mt-4 text-sm leading-7 text-ink/72">For now, the live content is in Events and Businesses, starting with Long Eaton Carnival and Long Eaton BJJ.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">No padded-out guides</h2> <p class="mt-4 text-sm leading-7 text-ink/72">This page is being kept clear until there are real routes, round-ups and local recommendations worth publishing.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Check back as it grows</h2> <p class="mt-4 text-sm leading-7 text-ink/72">New sections can be added back once there is enough proper local information to make them useful.</p></div></div></section> <section class="container-shell section-space pt-0">`);
    CTASection($$renderer2, {
      title: "Want to suggest a local route or recommendation?",
      copy: "If there's a walk, shop trail or useful local tip we should add, send it over.",
      primaryHref: "/contact",
      primaryLabel: "Suggest an idea",
      secondaryHref: "/businesses",
      secondaryLabel: "Browse businesses"
    });
    $$renderer2.push(`<!----></section>`);
  });
}
export {
  _page as default
};
