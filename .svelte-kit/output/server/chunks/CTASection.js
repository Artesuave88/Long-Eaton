import { f as fallback, b as escape_html, a as attr, c as bind_props } from "./index.js";
function CTASection($$renderer, $$props) {
  let title = $$props["title"];
  let copy = $$props["copy"];
  let primaryHref = fallback($$props["primaryHref"], "/contact");
  let primaryLabel = fallback($$props["primaryLabel"], "Get in touch");
  let secondaryHref = fallback($$props["secondaryHref"], "/events");
  let secondaryLabel = fallback($$props["secondaryLabel"], "See what’s on");
  $$renderer.push(`<section class="overflow-hidden rounded-[2rem] border border-brand-900/10 bg-brand-800 px-6 py-10 text-white shadow-lift sm:px-8 lg:px-12"><div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div class="max-w-2xl"><p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">Get listed</p> <h2 class="mt-3 text-3xl leading-tight text-white sm:text-[2.15rem]">${escape_html(title)}</h2> <p class="mt-4 text-base leading-8 text-white/80">${escape_html(copy)}</p></div> <div class="flex flex-col gap-3 sm:flex-row lg:flex-col"><a${attr("href", primaryHref)} class="button-primary border-white/10 bg-white text-brand-900 hover:border-white/10 hover:bg-brand-50 hover:text-brand-900">${escape_html(primaryLabel)}</a> <a${attr("href", secondaryHref)} class="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">${escape_html(secondaryLabel)}</a></div></div></section>`);
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
