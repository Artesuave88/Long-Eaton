import { h as head } from "../../../chunks/index.js";
import { C as CTASection } from "../../../chunks/CTASection.js";
/* empty css                                                 */
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
function _page($$renderer) {
  head("cwls5q", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>About | Love Long Eaton</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Learn what Love Long Eaton is for and how the local guide is being built."/>`);
  });
  $$renderer.push(`<section class="section-surface"><div class="container-shell section-space">`);
  SectionHeading($$renderer, {
    eyebrow: "About",
    title: "A local guide for Long Eaton",
    copy: "Love Long Eaton is a simple town guide for what's on, where to go and which local businesses to know about."
  });
  $$renderer.push(`<!----> <div class="grid gap-6 lg:grid-cols-3"><div class="surface-card p-7"><h2 class="text-2xl text-brand-text">Made to be useful</h2> <p class="body-copy-sm mt-4">The aim is to make local information easier to find without turning it into a formal directory or a sales pitch.</p></div> <div class="surface-card p-7"><h2 class="text-2xl text-brand-text">Clear and current</h2> <p class="body-copy-sm mt-4">Listings, events and updates are written to be easy to scan, with enough context to be genuinely helpful.</p></div> <div class="surface-card p-7"><h2 class="text-2xl text-brand-text">Local tone first</h2> <p class="body-copy-sm mt-4">The site is designed to feel calm, direct and familiar rather than promotional or overworked.</p></div></div></div></section> <section class="section-muted"><div class="container-shell section-space"><div class="surface-card p-8 sm:p-10"><h2 class="text-brand-text">What you'll find here</h2> <div class="mt-6 grid gap-5 md:grid-cols-2"><div class="inset-panel p-5"><p class="eyebrow">Town guide</p> <p class="body-copy mt-3">Events, business listings, local ideas and a simple way to keep up with town updates.</p></div> <div class="inset-panel p-5"><p class="eyebrow">Clear structure</p> <p class="body-copy mt-3">Consistent layouts, readable cards and sections that stay easy to browse on mobile and desktop.</p></div> <div class="inset-panel p-5"><p class="eyebrow">Useful details</p> <p class="body-copy mt-3">Dates, locations, categories and direct links all stay close to the information people need most.</p></div> <div class="inset-panel p-5"><p class="eyebrow">Local perspective</p> <p class="body-copy mt-3">A guide shaped around everyday town life, from one-off events to dependable places people return to regularly.</p></div></div></div></div></section> <section class="section-surface"><div class="container-shell section-space">`);
  CTASection($$renderer, {
    title: "Want to add a listing or suggest an update?",
    copy: "If you've got a business, event or useful local detail to add, get in touch.",
    primaryHref: "/contact",
    primaryLabel: "Contact us",
    secondaryHref: "/businesses",
    secondaryLabel: "Browse listings"
  });
  $$renderer.push(`<!----></div></section>`);
}
export {
  _page as default
};
