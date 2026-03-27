import { h as head, e as ensure_array_like } from "../../../chunks/index.js";
import { C as CTASection } from "../../../chunks/CTASection.js";
import { D as DiscoverCard, d as discoverCategories } from "../../../chunks/discover.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
function _page($$renderer) {
  head("b0xv90", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Discover | Love Long Eaton</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Explore food, shops, walks and everyday places around Long Eaton."/>`);
  });
  $$renderer.push(`<section class="container-shell section-space">`);
  SectionHeading($$renderer, {
    eyebrow: "Discover",
    title: "A few easy ways into Long Eaton",
    copy: "Start with food, shops, walks or local events."
  });
  $$renderer.push(`<!----> <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
  const each_array = ensure_array_like(discoverCategories);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    DiscoverCard($$renderer, { category });
  }
  $$renderer.push(`<!--]--></div></section> <section class="container-shell section-space pt-0"><div class="grid gap-6 lg:grid-cols-3"><div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Start in the centre</h2> <p class="mt-4 text-sm leading-7 text-ink/72">The town centre is easy to cover on foot, so it works well for a short browse, a coffee stop and a couple of errands in one go.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Mix local with outdoors</h2> <p class="mt-4 text-sm leading-7 text-ink/72">One of the nicer things about Long Eaton is how easy it is to combine shops and cafes with the canal or West Park.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Check back regularly</h2> <p class="mt-4 text-sm leading-7 text-ink/72">The best reasons to come back tend to be simple: a market weekend, a new menu or an event you nearly missed last time.</p></div></div></section> <section class="container-shell section-space pt-0">`);
  CTASection($$renderer, {
    title: "Want to suggest a local route or recommendation?",
    copy: "If there's a walk, shop trail or useful local tip we should add, send it over.",
    primaryHref: "/contact",
    primaryLabel: "Suggest an idea",
    secondaryHref: "/businesses",
    secondaryLabel: "Browse businesses"
  });
  $$renderer.push(`<!----></section>`);
}
export {
  _page as default
};
