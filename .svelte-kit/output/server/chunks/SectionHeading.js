import { f as fallback, a6 as attr_class, b as escape_html, c as bind_props } from "./index.js";
function SectionHeading($$renderer, $$props) {
  let eyebrow = fallback($$props["eyebrow"], "");
  let title = $$props["title"];
  let copy = fallback($$props["copy"], "");
  let align = fallback($$props["align"], "left");
  $$renderer.push(`<div${attr_class("mb-8 max-w-2xl", void 0, { "text-center": align === "center" })}>`);
  if (eyebrow) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p class="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">${escape_html(eyebrow)}</p>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <h2 class="font-display text-3xl leading-tight text-ink sm:text-4xl">${escape_html(title)}</h2> `);
  if (copy) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p class="mt-4 text-base leading-7 text-ink/75 sm:text-lg">${escape_html(copy)}</p>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { eyebrow, title, copy, align });
}
export {
  SectionHeading as S
};
