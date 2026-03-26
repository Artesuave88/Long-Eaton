import { h as head } from "../../../chunks/index.js";
import { C as CTASection } from "../../../chunks/CTASection.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
function _page($$renderer) {
  head("cwls5q", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>About | Love Long Eaton</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Learn about the purpose of Love Long Eaton and how the platform can support local discovery and promotion."/>`);
  });
  $$renderer.push(`<section class="container-shell section-space">`);
  SectionHeading($$renderer, {
    eyebrow: "About",
    title: "A simple, modern showcase for Long Eaton",
    copy: "Love Long Eaton is positioned as a clearer, more community-first town-promotion website that highlights what is happening locally and why the town is worth visiting."
  });
  $$renderer.push(`<!----> <div class="grid gap-6 lg:grid-cols-3"><div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Community-first</h2> <p class="mt-4 text-sm leading-7 text-ink/72">The site puts residents, independents and everyday local life at the centre instead of feeling formal or overly corporate.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Built for growth</h2> <p class="mt-4 text-sm leading-7 text-ink/72">This MVP uses clean mock data and reusable components so it can later connect to a CMS, database or business directory workflow.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Ready to pitch</h2> <p class="mt-4 text-sm leading-7 text-ink/72">The homepage is designed to feel polished enough for a client walkthrough while staying practical to extend.</p></div></div></section> <section class="container-shell section-space pt-0"><div class="surface-card p-8 sm:p-10"><h2 class="font-display text-3xl text-ink">What this MVP includes</h2> <div class="mt-6 grid gap-5 md:grid-cols-2"><div class="rounded-[1.5rem] bg-sand p-5"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Content pillars</p> <p class="mt-3 text-base leading-7 text-ink/72">Events, discover, businesses, news, about and contact pages with realistic starter copy.</p></div> <div class="rounded-[1.5rem] bg-sand p-5"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Reusable UI</p> <p class="mt-3 text-base leading-7 text-ink/72">Cards, CTA blocks, responsive navigation, filters and empty states for a cleaner editing experience later.</p></div> <div class="rounded-[1.5rem] bg-sand p-5"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Performance-friendly</p> <p class="mt-3 text-base leading-7 text-ink/72">No unnecessary server complexity, making deployment to Vercel straightforward.</p></div> <div class="rounded-[1.5rem] bg-sand p-5"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">SEO basics</p> <p class="mt-3 text-base leading-7 text-ink/72">Semantic sections, page metadata, clean slug routes and strong descriptive headings.</p></div></div></div></section> <section class="container-shell section-space pt-0">`);
  CTASection($$renderer, {
    title: "Want to shape the next phase of the site?",
    copy: "The next logical steps are adding richer directories, a proper news detail view, CMS-backed editing and map-based discovery.",
    primaryHref: "/contact",
    primaryLabel: "Talk about next steps",
    secondaryHref: "/news",
    secondaryLabel: "See site content"
  });
  $$renderer.push(`<!----></section>`);
}
export {
  _page as default
};
