import { e as ensure_array_like, a as attr, b as escape_html, f as fallback, c as bind_props, h as head, s as slot } from "../../chunks/index.js";
import { n as navLinks, s as site } from "../../chunks/site.js";
/* empty css                                              */
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="border-t border-brand-border bg-brand-surface"><div class="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]"><div><a href="/" class="font-display text-2xl tracking-[-0.03em] text-brand-text">Love Long Eaton</a> <p class="body-copy-sm mt-4 max-w-md">Local events, businesses and everyday places worth knowing about in Long Eaton.</p></div> <div><h2 class="eyebrow">Explore</h2> <div class="mt-4 flex flex-col gap-3"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)} class="text-sm text-brand-muted hover:text-brand-accent">${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div><h2 class="eyebrow">Contact</h2> <div class="mt-4 space-y-3 text-sm text-brand-muted"><p>${escape_html(site.address)}</p> <p><a${attr("href", `mailto:${site.email}`)} class="hover:text-brand-accent">${escape_html(site.email)}</a></p> <p><a${attr("href", `tel:${site.phone}`)} class="hover:text-brand-accent">${escape_html(site.phone)}</a></p></div></div></div></footer>`);
  });
}
function MobileNav($$renderer, $$props) {
  let open = fallback($$props["open"], false);
  if (open) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="border-t border-white/10 bg-brand-primaryDark shadow-sm lg:hidden"><nav class="container-shell flex flex-col py-4" aria-label="Mobile"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer.push(`<a${attr("href", link.href)} class="rounded-lg px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white">${escape_html(link.label)}</a>`);
    }
    $$renderer.push(`<!--]--></nav></div>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]-->`);
  bind_props($$props, { open });
}
function Header($$renderer) {
  let open = false;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<header class="sticky top-0 z-50 bg-brand-primaryDark text-white shadow-sm"><div class="container-shell flex items-center justify-between gap-4 py-4"><a href="/" class="flex flex-col leading-none text-white"><span class="font-display text-[1.65rem] tracking-[-0.03em]">Love Long Eaton</span> <span class="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">Town guide</span></a> <nav class="hidden items-center gap-2 lg:flex" aria-label="Primary"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)} class="rounded-lg px-4 py-2 text-sm font-medium text-white/80 hover:text-white">${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav> <button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white lg:hidden"${attr("aria-expanded", open)} aria-label="Toggle navigation"><div class="space-y-1.5"><span class="block h-0.5 w-5 bg-current"></span> <span class="block h-0.5 w-5 bg-current"></span> <span class="block h-0.5 w-5 bg-current"></span></div></button></div> `);
    MobileNav($$renderer2, {
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----></header>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", site.tagline)}/> <meta property="og:title"${attr("content", site.name)}/> <meta property="og:description"${attr("content", site.tagline)}/> <meta property="og:type" content="website"/> <meta property="og:url"${attr("content", site.url)}/>`);
    });
    $$renderer2.push(`<div class="min-h-screen bg-brand-background text-brand-text">`);
    Header($$renderer2);
    $$renderer2.push(`<!----> <main class="mx-auto w-full"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _layout as default
};
