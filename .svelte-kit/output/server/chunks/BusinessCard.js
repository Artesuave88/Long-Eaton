import { a as attr, b as escape_html, c as bind_props } from "./index.js";
import { I as ImagePlaceholder } from "./ImagePlaceholder.js";
function BusinessCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let business = $$props["business"];
    $$renderer2.push(`<article class="surface-card overflow-hidden">`);
    if (business.imageSrc) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex h-48 w-full items-center justify-center bg-[#0b0b0b] p-6"><img${attr("src", business.imageSrc)}${attr("alt", business.imageAlt ?? business.name)} class="max-h-full max-w-full object-contain"/></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      ImagePlaceholder($$renderer2, {
        label: business.imageLabel,
        style: business.imageStyle,
        className: "h-48 w-full rounded-none"
      });
    }
    $$renderer2.push(`<!--]--> <div class="p-5"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">${escape_html(business.category)}</p> <h3 class="mt-3 font-display text-2xl text-ink">${escape_html(business.name)}</h3> <p class="mt-2 text-sm font-medium text-ink/55">${escape_html(business.location)}</p> <p class="mt-4 text-sm leading-7 text-ink/72">${escape_html(business.description)}</p> <div class="mt-5 flex flex-wrap gap-4"><a${attr("href", `/businesses/${business.slug}`)} class="inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900">View business</a> `);
    if (business.website) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", business.website)} target="_blank" rel="noreferrer" class="inline-flex items-center text-sm font-semibold text-ink/65 hover:text-ink">Visit website</a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div></article>`);
    bind_props($$props, { business });
  });
}
export {
  BusinessCard as B
};
