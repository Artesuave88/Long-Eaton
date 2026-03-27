import { b as escape_html, c as bind_props } from "./index.js";
function EmptyState($$renderer, $$props) {
  let title = $$props["title"];
  let message = $$props["message"];
  $$renderer.push(`<div class="surface-card p-8 text-center sm:p-10"><div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-brand-700"><span class="text-sm font-bold uppercase tracking-[0.2em]">None</span></div> <h3 class="text-2xl text-ink">${escape_html(title)}</h3> <p class="mx-auto mt-3 max-w-lg text-base leading-8 text-ink/70">${escape_html(message)}</p></div>`);
  bind_props($$props, { title, message });
}
export {
  EmptyState as E
};
