import { f as fallback, b as escape_html, a as attr, c as bind_props } from "./index.js";
function CTASection($$renderer, $$props) {
  let title = $$props["title"];
  let copy = $$props["copy"];
  let primaryHref = fallback($$props["primaryHref"], "/contact");
  let primaryLabel = fallback($$props["primaryLabel"], "Get in touch");
  let secondaryHref = fallback($$props["secondaryHref"], "/events");
  let secondaryLabel = fallback($$props["secondaryLabel"], "See what’s on");
  $$renderer.push(`<section class="overflow-hidden rounded-xl border border-brand-border bg-brand-surface"><div class="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12"><div class="max-w-2xl"><p class="eyebrow">Get in touch</p> <h2 class="mt-3 text-brand-text">${escape_html(title)}</h2> <p class="body-copy mt-4">${escape_html(copy)}</p></div> <div class="flex flex-col gap-3 sm:flex-row lg:flex-col"><a${attr("href", primaryHref)} class="button-primary">${escape_html(primaryLabel)}</a> <a${attr("href", secondaryHref)} class="button-secondary">${escape_html(secondaryLabel)}</a></div></div></section>`);
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
