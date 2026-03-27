import { h as head, b as escape_html, a as attr, e as ensure_array_like, c as bind_props } from "../../../../chunks/index.js";
import { I as ImagePlaceholder } from "../../../../chunks/ImagePlaceholder.js";
import { b as businesses } from "../../../../chunks/businesses.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const relatedBusinesses = businesses.filter((business) => business.slug !== data.business.slug).slice(0, 3);
    head("1458vvt", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.business.name)} | Love Long Eaton</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.business.description)}/> <meta property="og:title"${attr("content", `${data.business.name} | Love Long Eaton`)}/> <meta property="og:description"${attr("content", data.business.description)}/>`);
    });
    $$renderer2.push(`<article class="container-shell section-space"><a href="/businesses" class="text-sm font-semibold text-brand-700 hover:text-brand-900">Back to businesses</a> <div class="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><div class="flex flex-wrap items-center gap-2"><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">${escape_html(data.business.category)}</p> `);
    if (data.business.isReal) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="chip">Featured local business</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <h1 class="mt-3 font-display text-4xl text-ink sm:text-5xl">${escape_html(data.business.name)}</h1> <p class="mt-5 max-w-2xl text-lg leading-8 text-ink/72">${escape_html(data.business.description)}</p> <div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3"><div><p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Category</p> <p class="mt-2 text-base font-semibold text-ink">${escape_html(data.business.category)}</p></div> <div><p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Location</p> <p class="mt-2 text-base font-semibold text-ink">${escape_html(data.business.location)}</p></div> `);
    if (data.business.website) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div><p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Website</p> <a${attr("href", data.business.website)} target="_blank" rel="noreferrer" class="mt-2 inline-flex text-base font-semibold text-ink hover:text-brand-700">Visit site</a></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-8 space-y-5 text-base leading-8 text-ink/75"><!--[-->`);
    const each_array = ensure_array_like(data.business.about);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let paragraph = each_array[$$index];
      $$renderer2.push(`<p>${escape_html(paragraph)}</p>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (data.business.website) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mt-8"><a${attr("href", data.business.website)} target="_blank" rel="noreferrer" class="button-primary">Visit website</a></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="space-y-6">`);
    if (data.business.imageSrc) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex h-[24rem] w-full items-center justify-center overflow-hidden rounded-md border border-ink/10 bg-[#0b0b0b] p-10 shadow-card"><img${attr("src", data.business.imageSrc)}${attr("alt", data.business.imageAlt ?? data.business.name)} class="max-h-full max-w-full object-contain"/></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      ImagePlaceholder($$renderer2, {
        label: data.business.imageLabel,
        style: data.business.imageStyle,
        className: "h-[24rem] w-full"
      });
    }
    $$renderer2.push(`<!--]--> <div class="surface-card p-6"><h2 class="font-display text-2xl text-ink">At a glance</h2> <p class="mt-4 text-sm leading-7 text-ink/72">This profile keeps the essentials easy to scan. Opening times, directions and extra details can be added here as more real listings go live.</p> <a href="/contact" class="button-primary mt-5">Get your business listed</a></div></div></div> `);
    if (relatedBusinesses.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<section class="mt-14"><div class="mb-6 max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">More businesses</p> <h2 class="mt-3 font-display text-3xl text-ink">You might also want to look at</h2></div> <div class="grid gap-4 md:grid-cols-3"><!--[-->`);
      const each_array_1 = ensure_array_like(relatedBusinesses);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let business = each_array_1[$$index_1];
        $$renderer2.push(`<a${attr("href", `/businesses/${business.slug}`)} class="surface-card p-5 transition hover:bg-brand-50/60"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">${escape_html(business.category)}</p> <h3 class="mt-3 font-display text-2xl text-ink">${escape_html(business.name)}</h3> <p class="mt-2 text-sm font-medium text-ink/55">${escape_html(business.location)}</p> <p class="mt-4 text-sm leading-7 text-ink/72">${escape_html(business.description)}</p></a>`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></article>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
