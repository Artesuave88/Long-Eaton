import { h as head, e as ensure_array_like } from "../../../chunks/index.js";
import { C as CTASection } from "../../../chunks/CTASection.js";
import { D as DiscoverCard, d as discoverCategories } from "../../../chunks/discover.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
function _page($$renderer) {
  head("b0xv90", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Discover | Love Long Eaton</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Discover the best of Long Eaton, from independent shopping and food spots to canal walks and community favourites."/>`);
  });
  $$renderer.push(`<section class="container-shell section-space">`);
  SectionHeading($$renderer, {
    eyebrow: "Discover",
    title: "Explore Long Eaton by mood, interest or time of day",
    copy: "This MVP keeps discovery simple: local food, independent shopping, green space and community life."
  });
  $$renderer.push(`<!----> <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
  const each_array = ensure_array_like(discoverCategories);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    DiscoverCard($$renderer, { category });
  }
  $$renderer.push(`<!--]--></div></section> <section class="container-shell section-space pt-0"><div class="grid gap-6 lg:grid-cols-3"><div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Start with the town centre</h2> <p class="mt-4 text-sm leading-7 text-ink/72">Long Eaton’s centre is easy to browse on foot, making it perfect for a low-pressure half-day visit with coffee, shopping and a few spontaneous stops.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Mix local with outdoors</h2> <p class="mt-4 text-sm leading-7 text-ink/72">One of the town’s strengths is how naturally local businesses connect with canals, parks and family-friendly routes.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Come back often</h2> <p class="mt-4 text-sm leading-7 text-ink/72">Seasonal markets, changing menus and one-off community events mean there is always another reason to return.</p></div></div></section> <section class="container-shell section-space pt-0">`);
  CTASection($$renderer, {
    title: "Want to feature a trail, guide or local recommendation?",
    copy: "The discover section is designed to grow into themed guides, maps and seasonal itineraries as the site develops.",
    primaryHref: "/contact",
    primaryLabel: "Suggest local content",
    secondaryHref: "/businesses",
    secondaryLabel: "See local businesses"
  });
  $$renderer.push(`<!----></section>`);
}
export {
  _page as default
};
