import { b as escape_html, e as ensure_array_like, a as attr, c as bind_props } from "./index.js";
import { I as ImagePlaceholder } from "./ImagePlaceholder.js";
function DiscoverCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let category = $$props["category"];
    $$renderer2.push(`<article class="surface-card surface-card-hover overflow-hidden p-4">`);
    ImagePlaceholder($$renderer2, {
      label: category.imageLabel,
      style: category.imageStyle,
      className: "h-44 w-full"
    });
    $$renderer2.push(`<!----> <div class="px-1 pb-2 pt-5"><h3 class="text-[1.55rem] leading-tight text-ink">${escape_html(category.title)}</h3> <p class="body-copy-sm mt-3">${escape_html(category.description)}</p> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
    const each_array = ensure_array_like(category.highlights);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let highlight = each_array[$$index];
      $$renderer2.push(`<span class="chip">${escape_html(highlight)}</span>`);
    }
    $$renderer2.push(`<!--]--></div> <a${attr("href", category.link)} class="link-subtle mt-5">See more</a></div></article>`);
    bind_props($$props, { category });
  });
}
const discoverCategories = [];
export {
  DiscoverCard as D,
  discoverCategories as d
};
