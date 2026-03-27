import { f as fallback, a6 as attr_class, b as escape_html, c as bind_props } from "./index.js";
function ImagePlaceholder($$renderer, $$props) {
  let label = $$props["label"];
  let style = fallback($$props["style"], "from-brand-300 via-brand-100 to-sand");
  let className = fallback($$props["className"], "");
  $$renderer.push(`<div${attr_class(`relative overflow-hidden rounded-xl bg-gradient-to-br ${style} ${className}`)} aria-hidden="true"><div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.38),transparent_34%,rgba(22,22,22,0.08)_100%)]"></div> <div class="absolute bottom-4 left-4 rounded-full border border-white/40 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">${escape_html(label)}</div></div>`);
  bind_props($$props, { label, style, className });
}
export {
  ImagePlaceholder as I
};
