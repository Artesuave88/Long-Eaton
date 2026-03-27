import { f as fallback, a6 as attr_class, b as escape_html, c as bind_props } from "./index.js";
function SectionHeading($$renderer, $$props) {
  let eyebrow = fallback($$props["eyebrow"], "");
  let title = $$props["title"];
  let copy = fallback($$props["copy"], "");
  let align = fallback($$props["align"], "left");
  $$renderer.push(`<div${attr_class("mb-8 max-w-2xl", void 0, { "text-center": align === "center" })}>`);
  if (eyebrow) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p class="eyebrow mb-3">${escape_html(eyebrow)}</p>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <h2 class="max-w-xl text-brand-text">${escape_html(title)}</h2> `);
  if (copy) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p class="mt-4 max-w-xl text-base leading-8 text-brand-muted sm:text-[1.05rem]">${escape_html(copy)}</p>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { eyebrow, title, copy, align });
}
export {
  SectionHeading as S
};
