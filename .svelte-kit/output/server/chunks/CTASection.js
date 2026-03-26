import { f as fallback, b as escape_html, a as attr, c as bind_props } from "./index.js";
function CTASection($$renderer, $$props) {
  let title = $$props["title"];
  let copy = $$props["copy"];
  let primaryHref = fallback($$props["primaryHref"], "/contact");
  let primaryLabel = fallback($$props["primaryLabel"], "Get in touch");
  let secondaryHref = fallback($$props["secondaryHref"], "/events");
  let secondaryLabel = fallback($$props["secondaryLabel"], "See what’s on");
  $$renderer.push(`<section class="overflow-hidden rounded-[2rem] bg-brand-800 px-6 py-10 text-white shadow-card sm:px-8 lg:px-12"><div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div class="max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">Join the town story</p> <h2 class="mt-3 font-display text-3xl sm:text-4xl">${escape_html(title)}</h2> <p class="mt-4 text-base leading-8 text-white/80">${escape_html(copy)}</p></div> <div class="flex flex-col gap-3 sm:flex-row lg:flex-col"><a${attr("href", primaryHref)} class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-brand-100">${escape_html(primaryLabel)}</a> <a${attr("href", secondaryHref)} class="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">${escape_html(secondaryLabel)}</a></div></div></section>`);
  bind_props($$props, {
    title,
    copy,
    primaryHref,
    primaryLabel,
    secondaryHref,
    secondaryLabel
  });
}
export {
  CTASection as C
};
