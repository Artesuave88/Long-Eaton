import { f as fallback, e as ensure_array_like, a6 as attr_class, b as escape_html, c as bind_props, a as attr } from "./index.js";
function CategoryFilter($$renderer, $$props) {
  let categories = fallback($$props["categories"], () => [], true);
  let selected = fallback($$props["selected"], "All");
  $$renderer.push(`<div class="flex flex-wrap gap-2"><!--[-->`);
  const each_array = ensure_array_like(categories);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$renderer.push(`<button type="button"${attr_class(`rounded-sm border px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition ${selected === category ? "border-brand-700 bg-brand-700 text-white shadow-lg shadow-brand-900/15" : "border-ink/10 bg-white text-ink hover:border-brand-300 hover:bg-brand-50"}`)}>${escape_html(category)}</button>`);
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { categories, selected });
}
function EmptyState($$renderer, $$props) {
  let title = $$props["title"];
  let message = $$props["message"];
  $$renderer.push(`<div class="surface-card p-8 text-center sm:p-10"><div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-sm border border-brand-200 bg-brand-50 text-brand-700"><span class="text-sm font-bold uppercase tracking-[0.2em]">None</span></div> <h3 class="font-display text-2xl text-ink">${escape_html(title)}</h3> <p class="mx-auto mt-3 max-w-lg text-base leading-7 text-ink/70">${escape_html(message)}</p></div>`);
  bind_props($$props, { title, message });
}
function SearchBar($$renderer, $$props) {
  let value = fallback($$props["value"], "");
  let placeholder = fallback($$props["placeholder"], "Search");
  $$renderer.push(`<label class="block"><span class="sr-only">${escape_html(placeholder)}</span> <div class="relative"><input${attr("value", value)} type="search"${attr("placeholder", placeholder)} class="field-input"/> <span class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/40">Search</span></div></label>`);
  bind_props($$props, { value, placeholder });
}
export {
  CategoryFilter as C,
  EmptyState as E,
  SearchBar as S
};
