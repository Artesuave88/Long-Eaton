import { f as fallback, a6 as attr_class, b as escape_html, c as bind_props } from "./index.js";
function ImagePlaceholder($$renderer, $$props) {
  let label = $$props["label"];
  let style = fallback($$props["style"], "bg-brand-section");
  let className = fallback($$props["className"], "");
  $$renderer.push(`<div${attr_class(`relative overflow-hidden rounded-xl ${style} ${className}`)} aria-hidden="true"><div class="absolute inset-0 border border-brand-border"></div> <div class="absolute bottom-4 left-4 rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">${escape_html(label)}</div></div>`);
  bind_props($$props, { label, style, className });
}
export {
  ImagePlaceholder as I
};
