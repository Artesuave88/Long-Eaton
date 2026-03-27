import { e as ensure_array_like, a as attr, b as escape_html, f as fallback, c as bind_props, h as head, s as slot } from "../../chunks/index.js";
import { n as navLinks, s as site } from "../../chunks/site.js";
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="border-t border-ink/10 bg-[#f5f0e8]/90"><div class="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]"><div><a href="/" class="font-display text-2xl uppercase tracking-[0.08em] text-ink">Love Long Eaton</a> <p class="mt-4 max-w-md text-sm leading-7 text-ink/70">Local events, businesses and everyday places worth knowing about in Long Eaton.</p></div> <div><h2 class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Explore</h2> <div class="mt-4 flex flex-col gap-3"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)} class="text-sm text-ink/72 hover:text-brand-700">${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div><h2 class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Contact</h2> <div class="mt-4 space-y-3 text-sm text-ink/72"><p>${escape_html(site.address)}</p> <p><a${attr("href", `mailto:${site.email}`)} class="hover:text-brand-700">${escape_html(site.email)}</a></p> <p><a${attr("href", `tel:${site.phone}`)} class="hover:text-brand-700">${escape_html(site.phone)}</a></p> <p class="pt-2 text-ink/55">Social links can be added here once live accounts are ready.</p></div></div></div></footer>`);
  });
}
function MobileNav($$renderer, $$props) {
  let open = fallback($$props["open"], false);
  if (open) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="border-t border-ink/10 bg-[#f4eee6] shadow-lg lg:hidden"><nav class="container-shell flex flex-col py-4" aria-label="Mobile"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer.push(`<a${attr("href", link.href)} class="rounded-sm px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-ink hover:bg-white">${escape_html(link.label)}</a>`);
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
    $$renderer2.push(`<header class="sticky top-0 z-50 border-b border-ink/10 bg-sand/90 backdrop-blur-md"><div class="container-shell flex items-center justify-between gap-4 py-4"><a href="/" class="flex flex-col leading-none text-ink"><span class="font-display text-2xl uppercase tracking-[0.08em]">Love Long Eaton</span> <span class="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/55">Town guide</span></a> <nav class="hidden items-center gap-2 lg:flex" aria-label="Primary"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)} class="rounded-sm border border-transparent px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-ink/72 hover:border-ink/10 hover:bg-white hover:text-ink">${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav> <button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ink/10 bg-white text-ink lg:hidden"${attr("aria-expanded", open)} aria-label="Toggle navigation"><div class="space-y-1.5"><span class="block h-0.5 w-5 bg-current"></span> <span class="block h-0.5 w-5 bg-current"></span> <span class="block h-0.5 w-5 bg-current"></span></div></button></div> `);
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
    $$renderer2.push(`<div class="min-h-screen bg-transparent">`);
    Header($$renderer2);
    $$renderer2.push(`<!----> <main><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _layout as default
};
