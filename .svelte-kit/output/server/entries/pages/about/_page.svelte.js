import { h as head } from "../../../chunks/index.js";
import { C as CTASection } from "../../../chunks/CTASection.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
function _page($$renderer) {
  head("cwls5q", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>About | Love Long Eaton</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Learn what Love Long Eaton is for and how the local guide is being built."/>`);
  });
  $$renderer.push(`<section class="container-shell section-space">`);
  SectionHeading($$renderer, {
    eyebrow: "About",
    title: "A local guide for Long Eaton",
    copy: "Love Long Eaton is a simple town guide for what's on, where to go and which local businesses to know about."
  });
  $$renderer.push(`<!----> <div class="grid gap-6 lg:grid-cols-3"><div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Made to be useful</h2> <p class="mt-4 text-sm leading-7 text-ink/72">The aim is to make local information easier to find without turning it into a formal directory or a sales pitch.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Real-content only</h2> <p class="mt-4 text-sm leading-7 text-ink/72">The guide now removes stand-in content and only shows listings, events and updates that have been properly added.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Local tone first</h2> <p class="mt-4 text-sm leading-7 text-ink/72">The site is meant to sound calm, direct and local rather than promotional or overworked.</p></div></div></section> <section class="container-shell section-space pt-0"><div class="surface-card p-8 sm:p-10"><h2 class="font-display text-3xl text-ink">What you'll find here</h2> <div class="mt-6 grid gap-5 md:grid-cols-2"><div class="inset-panel p-5"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Town guide</p> <p class="mt-3 text-base leading-7 text-ink/72">Events, business listings, local ideas and a simple way to keep up with town updates.</p></div> <div class="inset-panel p-5"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Clear structure</p> <p class="mt-3 text-base leading-7 text-ink/72">A layout that can handle more real content later without needing to rebuild the whole site.</p></div> <div class="inset-panel p-5"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Room to expand</p> <p class="mt-3 text-base leading-7 text-ink/72">Opening times, maps, richer business profiles and better event detail can all be added in stages.</p></div> <div class="inset-panel p-5"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Build carefully</p> <p class="mt-3 text-base leading-7 text-ink/72">New sections can be added gradually, but only when there is enough real local material to make them worth reading.</p></div></div></div></section> <section class="container-shell section-space pt-0">`);
  CTASection($$renderer, {
    title: "Want to add a listing or suggest an update?",
    copy: "If you've got a business, event or useful local detail to add, get in touch.",
    primaryHref: "/contact",
    primaryLabel: "Contact us",
    secondaryHref: "/businesses",
    secondaryLabel: "Browse listings"
  });
  $$renderer.push(`<!----></section>`);
}
export {
  _page as default
};
