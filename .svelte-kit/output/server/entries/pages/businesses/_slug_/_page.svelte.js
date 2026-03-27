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
    $$renderer2.push(`<article class="section-surface"><div class="container-shell section-space"><a href="/businesses" class="button-subtle">Back to businesses</a> <div class="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><div class="flex flex-wrap items-center gap-2"><p class="eyebrow">${escape_html(data.business.category)}</p> `);
    if (data.business.isReal) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="chip">Featured listing</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <h1 class="mt-3 text-brand-text">${escape_html(data.business.name)}</h1> <p class="mt-5 max-w-2xl text-lg leading-8 text-brand-muted">${escape_html(data.business.description)}</p> <div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3"><div><p class="eyebrow">Category</p> <p class="mt-2 text-base font-semibold text-brand-text">${escape_html(data.business.category)}</p></div> <div><p class="eyebrow">Location</p> <p class="mt-2 text-base font-semibold text-brand-text">${escape_html(data.business.location)}</p></div> `);
    if (data.business.website) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div><p class="eyebrow">Website</p> <a${attr("href", data.business.website)} target="_blank" rel="noreferrer" class="mt-2 inline-flex text-base font-semibold text-brand-accent hover:underline">Visit site</a></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-8 space-y-5 text-base leading-8 text-brand-muted"><!--[-->`);
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
      $$renderer2.push(`<div class="flex h-[24rem] w-full items-center justify-center overflow-hidden rounded-xl border border-brand-border bg-brand-primaryDark p-10 shadow-sm"><img${attr("src", data.business.imageSrc)}${attr("alt", data.business.imageAlt ?? data.business.name)} class="max-h-full max-w-full object-contain"/></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      ImagePlaceholder($$renderer2, {
        label: data.business.imageLabel,
        style: data.business.imageStyle,
        className: "h-[24rem] w-full"
      });
    }
    $$renderer2.push(`<!--]--> <div class="surface-card p-6"><h2 class="text-2xl text-brand-text">At a glance</h2> <p class="body-copy-sm mt-4">This profile keeps the essentials easy to scan, with location, category and a direct route to the business website.</p> <a href="/contact" class="button-primary mt-5">Get your business listed</a></div></div></div> `);
    if (relatedBusinesses.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<section class="mt-14"><div class="mb-6 max-w-2xl"><p class="eyebrow">More businesses</p> <h2 class="mt-3 text-brand-text">You might also want to look at</h2></div> <div class="grid gap-4 md:grid-cols-3"><!--[-->`);
      const each_array_1 = ensure_array_like(relatedBusinesses);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let business = each_array_1[$$index_1];
        $$renderer2.push(`<a${attr("href", `/businesses/${business.slug}`)} class="surface-card surface-card-hover p-5"><p class="eyebrow">${escape_html(business.category)}</p> <h3 class="mt-3 text-2xl text-brand-text">${escape_html(business.name)}</h3> <p class="mt-2 text-sm font-medium text-brand-muted">${escape_html(business.location)}</p> <p class="body-copy-sm mt-4">${escape_html(business.description)}</p></a>`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></article>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
