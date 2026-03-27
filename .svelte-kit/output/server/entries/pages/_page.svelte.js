import { f as fallback, e as ensure_array_like, a6 as attr_class, a7 as attr_style, a as attr, b as escape_html, c as bind_props, h as head } from "../../chunks/index.js";
import { C as CTASection } from "../../chunks/CTASection.js";
import { E as EventCard } from "../../chunks/EventCard.js";
import { f as formatEventDate } from "../../chunks/format.js";
/* empty css                                              */
import { S as SectionHeading } from "../../chunks/SectionHeading.js";
import { b as businesses } from "../../chunks/businesses.js";
import { s as sortedEvents } from "../../chunks/events.js";
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let slideshowEvents, totalSlides, animationDuration, hasSlides, useAnimation;
    let eyebrow = fallback($$props["eyebrow"], "Love Long Eaton");
    let title = $$props["title"];
    let copy = $$props["copy"];
    let events = fallback($$props["events"], () => [], true);
    let primaryHref = fallback($$props["primaryHref"], "/events");
    let primaryLabel = fallback($$props["primaryLabel"], "See what’s on");
    let secondaryHref = fallback($$props["secondaryHref"], "/businesses");
    let secondaryLabel = fallback($$props["secondaryLabel"], "Browse businesses");
    const slideSeconds = 6;
    slideshowEvents = events.length ? events : [];
    totalSlides = slideshowEvents.length || 1;
    animationDuration = `${totalSlides * slideSeconds}s`;
    hasSlides = slideshowEvents.length > 0;
    useAnimation = slideshowEvents.length > 1;
    $$renderer2.push(`<section class="hero-shell relative overflow-hidden rounded-[1.75rem] border border-brand-border bg-brand-primaryDark text-white svelte-1q37ri0">`);
    if (hasSlides) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="absolute inset-0 svelte-1q37ri0"><!--[-->`);
      const each_array = ensure_array_like(slideshowEvents);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let event = each_array[index];
        $$renderer2.push(`<article${attr_class(`hero-slide absolute inset-0 ${useAnimation ? "hero-slide-animated" : "hero-slide-static"}`, "svelte-1q37ri0")}${attr_style(`animation-duration: ${animationDuration}; animation-delay: ${index * slideSeconds}s;`)}${attr("aria-hidden", index === 0 ? "false" : "true")}>`);
        if (event.imageSrc) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<img${attr("src", event.imageSrc)}${attr("alt", event.imageAlt ?? event.title)} class="absolute inset-0 h-full w-full object-cover svelte-1q37ri0"/>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_35%),linear-gradient(135deg,rgba(1,36,190,0.9),rgba(7,61,255,0.72))] svelte-1q37ri0"></div>`);
        }
        $$renderer2.push(`<!--]--> <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,41,0.32),rgba(7,18,41,0.72)_48%,rgba(7,18,41,0.92))] svelte-1q37ri0"></div></article>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_35%),linear-gradient(135deg,rgba(1,36,190,0.92),rgba(7,61,255,0.72))] svelte-1q37ri0"></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="relative z-10 flex min-h-[32rem] flex-col justify-end p-6 sm:min-h-[36rem] sm:p-8 lg:min-h-[40rem] lg:p-12 svelte-1q37ri0">`);
    if (hasSlides) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="hero-content-wrap relative svelte-1q37ri0"><!--[-->`);
      const each_array_1 = ensure_array_like(slideshowEvents);
      for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
        let event = each_array_1[index];
        $$renderer2.push(`<div${attr_class(`hero-copy-panel max-w-4xl ${useAnimation ? "hero-copy-animated" : "hero-copy-static"}`, "svelte-1q37ri0")}${attr_style(`animation-duration: ${animationDuration}; animation-delay: ${index * slideSeconds}s;`)}><div class="flex flex-wrap items-center gap-2 svelte-1q37ri0"><p class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 svelte-1q37ri0">${escape_html(eyebrow)}</p> <span class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 svelte-1q37ri0">${escape_html(event.category)}</span></div> <div class="mt-5 max-w-3xl svelte-1q37ri0"><h1 class="text-white svelte-1q37ri0">${escape_html(title)}</h1> <p class="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg svelte-1q37ri0">${escape_html(copy)}</p></div> <div class="mt-8 max-w-2xl rounded-2xl border border-white/15 bg-slate-950/35 p-5 backdrop-blur-sm sm:p-6 svelte-1q37ri0"><p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200 svelte-1q37ri0">Coming up</p> <h2 class="mt-3 text-2xl leading-tight text-white sm:text-[2rem] svelte-1q37ri0">${escape_html(event.title)}</h2> <p class="mt-3 text-sm font-medium text-white/80 svelte-1q37ri0">${escape_html(formatEventDate(event))} • ${escape_html(event.location)}</p> <p class="mt-4 text-sm leading-7 text-white/85 sm:text-base svelte-1q37ri0">${escape_html(event.excerpt)}</p> <div class="mt-6 flex flex-wrap gap-3 svelte-1q37ri0"><a${attr("href", `/events/${event.slug}`)} class="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-50 svelte-1q37ri0">See event details</a> <a${attr("href", primaryHref)} class="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15 svelte-1q37ri0">${escape_html(primaryLabel)}</a> <a${attr("href", secondaryHref)} class="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 svelte-1q37ri0">${escape_html(secondaryLabel)}</a></div></div></div>`);
      }
      $$renderer2.push(`<!--]--></div> `);
      if (slideshowEvents.length > 1) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="mt-8 flex flex-wrap gap-2 svelte-1q37ri0"><!--[-->`);
        const each_array_2 = ensure_array_like(slideshowEvents);
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
          let event = each_array_2[$$index_2];
          $$renderer2.push(`<a${attr("href", `/events/${event.slug}`)} class="rounded-full border border-white/15 bg-slate-950/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm hover:bg-slate-950/45 svelte-1q37ri0">${escape_html(event.title)}</a>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="max-w-3xl svelte-1q37ri0"><p class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 svelte-1q37ri0">${escape_html(eyebrow)}</p> <h1 class="mt-5 text-white svelte-1q37ri0">${escape_html(title)}</h1> <p class="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg svelte-1q37ri0">${escape_html(copy)}</p> <div class="mt-8 flex flex-wrap gap-3 svelte-1q37ri0"><a${attr("href", primaryHref)} class="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-50 svelte-1q37ri0">${escape_html(primaryLabel)}</a> <a${attr("href", secondaryHref)} class="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15 svelte-1q37ri0">${escape_html(secondaryLabel)}</a></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
    bind_props($$props, {
      eyebrow,
      title,
      copy,
      events,
      primaryHref,
      primaryLabel,
      secondaryHref,
      secondaryLabel
    });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const featuredEvents = sortedEvents.filter((event) => event.featured).slice(0, 3);
    const featuredBusiness = businesses[0];
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Love Long Eaton | Local events, businesses and places to go</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Find local events, businesses and places to go around Long Eaton."/> <meta property="og:title" content="Love Long Eaton | Local events, businesses and places to go"/> <meta property="og:description" content="A calm local guide to what's on, where to go and who to know in Long Eaton."/>`);
    });
    $$renderer2.push(`<section class="section-surface"><div class="container-shell section-space">`);
    Hero($$renderer2, {
      title: "Find local events, shops and places around Long Eaton.",
      copy: "A calm local guide to what’s on, where to browse, where to stop and which businesses are worth knowing about in Long Eaton.",
      events: featuredEvents.length ? featuredEvents : sortedEvents.slice(0, 5),
      primaryHref: "/events",
      primaryLabel: "See what's on",
      secondaryHref: "/businesses",
      secondaryLabel: "Browse businesses"
    });
    $$renderer2.push(`<!----></div></section> <section class="section-muted"><div class="container-shell section-space"><div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4"><div class="surface-card p-6"><p class="eyebrow">What’s On</p> <h2 class="mt-3 text-2xl text-brand-text">Events and dates</h2> <p class="body-copy-sm mt-3">Currently led by Long Eaton Carnival, with the main carnival date and seasonal car boots listed with the practical details people usually need.</p> <a href="/events" class="button-subtle mt-5">View events</a></div> <div class="surface-card p-6"><p class="eyebrow">Businesses</p> <h2 class="mt-3 text-2xl text-brand-text">Find a business</h2> <p class="body-copy-sm mt-3">Browse dependable local listings, services and places that are worth keeping close to hand.</p> <a href="/businesses" class="button-subtle mt-5">Browse businesses</a></div> <div class="surface-card p-6"><p class="eyebrow">About</p> <h2 class="mt-3 text-2xl text-brand-text">Why the guide exists</h2> <p class="body-copy-sm mt-3">A simple local guide built around useful event and business information for Long Eaton.</p> <a href="/about" class="button-subtle mt-5">About Love Long Eaton</a></div> <div class="surface-card p-6"><p class="eyebrow">Contact</p> <h2 class="mt-3 text-2xl text-brand-text">Send in details</h2> <p class="body-copy-sm mt-3">Use the contact page to send an event or add a business that should be included in the guide.</p> <a href="/contact" class="button-subtle mt-5">Contact us</a></div></div></div></section> <section class="section-muted"><div class="container-shell section-space"><div class="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]"><div><div class="section-link-row">`);
    SectionHeading($$renderer2, {
      eyebrow: "What’s On",
      title: "Start with the event currently listed in the calendar",
      copy: "The events section stays focused on confirmed local information, starting with Long Eaton Carnival."
    });
    $$renderer2.push(`<!----> <a href="/events" class="button-subtle hidden sm:inline-flex">Events calendar</a></div> <div class="grid gap-6 lg:grid-cols-1"><!--[-->`);
    const each_array = ensure_array_like(featuredEvents);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let event = each_array[$$index];
      EventCard($$renderer2, { event });
    }
    $$renderer2.push(`<!--]--></div></div> <div>`);
    SectionHeading($$renderer2, {
      eyebrow: "Businesses",
      title: "Keep a real local listing close to hand",
      copy: "The directory currently highlights Long Eaton BJJ with clear details and a direct route to the business website."
    });
    $$renderer2.push(`<!----> `);
    if (featuredBusiness) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="surface-card overflow-hidden p-6 sm:p-8"><div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><p class="eyebrow">Featured business</p> <h3 class="mt-3 text-brand-text">${escape_html(featuredBusiness.name)}</h3> <p class="mt-3 text-sm font-medium text-brand-muted">${escape_html(featuredBusiness.category)} • ${escape_html(featuredBusiness.location)}</p> <p class="body-copy mt-5">${escape_html(featuredBusiness.description)}</p> <div class="mt-6 flex flex-wrap gap-3"><a${attr("href", `/businesses/${featuredBusiness.slug}`)} class="button-primary">View business</a> `);
      if (featuredBusiness.website) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", featuredBusiness.website)} target="_blank" rel="noreferrer" class="button-secondary">Visit website</a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div> <div class="surface-card overflow-hidden bg-brand-primaryDark p-8"><img${attr("src", featuredBusiness.imageSrc)}${attr("alt", featuredBusiness.imageAlt ?? featuredBusiness.name)} class="mx-auto max-h-56 w-full object-contain"/></div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div></div></section> <section class="section-muted"><div class="container-shell section-space"><div class="surface-card grid gap-8 p-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"><div><p class="eyebrow">About Love Long Eaton</p> <h2 class="mt-3 text-brand-text">A local guide built around community life in the town</h2> <p class="body-copy mt-4 max-w-2xl">Love Long Eaton brings together what’s on, where to go and who to know about, with a structure that helps people move easily between events, places and local businesses.</p> <div class="mt-6"><a href="/about" class="button-secondary">Find out more</a></div></div> <div><p class="eyebrow">Quick links</p> <div class="mt-4 grid gap-3 sm:grid-cols-2"><a href="/" class="surface-card p-4 text-sm font-semibold text-brand-text hover:text-brand-accent">Home</a> <a href="/events" class="surface-card p-4 text-sm font-semibold text-brand-text hover:text-brand-accent">Events</a> <a href="/businesses" class="surface-card p-4 text-sm font-semibold text-brand-text hover:text-brand-accent">Businesses</a> <a href="/about" class="surface-card p-4 text-sm font-semibold text-brand-text hover:text-brand-accent">About</a> <a href="/contact" class="surface-card p-4 text-sm font-semibold text-brand-text hover:text-brand-accent">Contact</a></div></div></div></div></section> <section class="section-surface"><div class="container-shell section-space">`);
    CTASection($$renderer2, {
      title: "Add a business or send in an event",
      copy: "If you'd like to be included in the guide, use the contact page and share the details.",
      primaryHref: "/contact",
      primaryLabel: "Add your business",
      secondaryHref: "/contact",
      secondaryLabel: "Send an event"
    });
    $$renderer2.push(`<!----></div></section>`);
  });
}
export {
  _page as default
};
