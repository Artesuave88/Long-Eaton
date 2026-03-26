import { h as head, b as escape_html, e as ensure_array_like, c as bind_props, a as attr } from "../../../../chunks/index.js";
import { I as ImagePlaceholder } from "../../../../chunks/ImagePlaceholder.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    head("1458vvt", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.business.name)} | Love Long Eaton</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.business.description)}/> <meta property="og:title"${attr("content", `${data.business.name} | Love Long Eaton`)}/> <meta property="og:description"${attr("content", data.business.description)}/>`);
    });
    $$renderer2.push(`<article class="container-shell section-space"><a href="/businesses" class="text-sm font-semibold text-brand-700 hover:text-brand-900">Back to businesses</a> <div class="mt-6 grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start"><div><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">${escape_html(data.business.category)}</p> <h1 class="mt-3 font-display text-4xl text-ink sm:text-5xl">${escape_html(data.business.name)}</h1> <p class="mt-5 max-w-2xl text-lg leading-8 text-ink/72">${escape_html(data.business.description)}</p> <div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2"><div><p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Category</p> <p class="mt-2 text-base font-semibold text-ink">${escape_html(data.business.category)}</p></div> <div><p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Location</p> <p class="mt-2 text-base font-semibold text-ink">${escape_html(data.business.location)}</p></div></div> <div class="mt-8 space-y-5 text-base leading-8 text-ink/75"><!--[-->`);
    const each_array = ensure_array_like(data.business.about);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let paragraph = each_array[$$index];
      $$renderer2.push(`<p>${escape_html(paragraph)}</p>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="space-y-6">`);
    ImagePlaceholder($$renderer2, {
      label: data.business.imageLabel,
      style: data.business.imageStyle,
      className: "h-[24rem] w-full"
    });
    $$renderer2.push(`<!----> <div class="surface-card p-6"><h2 class="font-display text-2xl text-ink">Why it matters locally</h2> <p class="mt-4 text-sm leading-7 text-ink/72">Local businesses are a big part of what makes Long Eaton feel useful, characterful and worth revisiting. This profile format is ready to expand later with opening times, offers and map integration.</p> <a href="/contact" class="mt-5 inline-flex rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800">Feature your business</a></div></div></div></article>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
