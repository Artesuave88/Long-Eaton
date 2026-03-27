import { b as escape_html, e as ensure_array_like, a as attr, c as bind_props } from "./index.js";
import { I as ImagePlaceholder } from "./ImagePlaceholder.js";
function DiscoverCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let category = $$props["category"];
    $$renderer2.push(`<article class="surface-card overflow-hidden p-4">`);
    ImagePlaceholder($$renderer2, {
      label: category.imageLabel,
      style: category.imageStyle,
      className: "h-44 w-full"
    });
    $$renderer2.push(`<!----> <div class="px-1 pb-2 pt-5"><h3 class="font-display text-[1.7rem] leading-tight text-ink">${escape_html(category.title)}</h3> <p class="mt-3 text-sm leading-7 text-ink/72">${escape_html(category.description)}</p> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
    const each_array = ensure_array_like(category.highlights);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let highlight = each_array[$$index];
      $$renderer2.push(`<span class="chip">${escape_html(highlight)}</span>`);
    }
    $$renderer2.push(`<!--]--></div> <a${attr("href", category.link)} class="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900">See more</a></div></article>`);
    bind_props($$props, { category });
  });
}
const discoverCategories = [
  {
    id: "discover-1",
    slug: "eat-and-drink",
    title: "Eat & Drink",
    description: "Coffee stops, brunch places, casual dinners and reliable takeaways.",
    highlights: ["Local cafes", "Evening dining", "Sweet treats"],
    imageLabel: "Food trail",
    imageStyle: "from-coral/80 via-sun/60 to-white",
    link: "/businesses"
  },
  {
    id: "discover-2",
    slug: "shop-independents",
    title: "Shop Independents",
    description: "Gift shops, books, home bits and the everyday independents people return to.",
    highlights: ["Lifestyle stores", "Books & gifts", "Personal service"],
    imageLabel: "Independent shops",
    imageStyle: "from-brand-700 via-brand-300 to-sand",
    link: "/businesses"
  },
  {
    id: "discover-3",
    slug: "walks-and-green-spaces",
    title: "Walks & Green Spaces",
    description: "Canal paths, park afternoons and easy walks when you want a slower pace.",
    highlights: ["Canal walks", "West Park", "Family-friendly routes"],
    imageLabel: "Canal and park",
    imageStyle: "from-brand-500 via-brand-100 to-white",
    link: "/discover"
  },
  {
    id: "discover-4",
    slug: "community-and-events",
    title: "Community & Events",
    description: "Markets, local events and weekend plans that give the town a bit of life.",
    highlights: ["Town events", "Community feel", "Weekend ideas"],
    imageLabel: "Community events",
    imageStyle: "from-sun/80 via-coral/70 to-white",
    link: "/events"
  }
];
export {
  DiscoverCard as D,
  discoverCategories as d
};
