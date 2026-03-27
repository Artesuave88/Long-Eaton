import { f as fallback, b as escape_html, a as attr, c as bind_props, h as head, e as ensure_array_like } from "../../chunks/index.js";
import { B as BusinessCard } from "../../chunks/BusinessCard.js";
import { C as CTASection } from "../../chunks/CTASection.js";
import { D as DiscoverCard, d as discoverCategories } from "../../chunks/discover.js";
import { E as EventCard } from "../../chunks/EventCard.js";
import { N as NewsCard, n as newsItems } from "../../chunks/news.js";
import { S as SectionHeading } from "../../chunks/SectionHeading.js";
import { b as businesses } from "../../chunks/businesses.js";
import { e as events } from "../../chunks/events.js";
function Hero($$renderer, $$props) {
  let eyebrow = fallback($$props["eyebrow"], "Love Long Eaton");
  let title = $$props["title"];
  let copy = $$props["copy"];
  let primaryHref = fallback($$props["primaryHref"], "/events");
  let primaryLabel = fallback($$props["primaryLabel"], "See what’s on");
  let secondaryHref = fallback($$props["secondaryHref"], "/businesses");
  let secondaryLabel = fallback($$props["secondaryLabel"], "Browse businesses");
  $$renderer.push(`<section class="overflow-hidden rounded-md border border-ink/15 bg-hero-glow px-6 py-10 shadow-card sm:px-8 sm:py-14 lg:px-12 lg:py-16"><div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"><div class="max-w-2xl"><p class="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-brand-200">${escape_html(eyebrow)}</p> <h1 class="font-display text-4xl uppercase leading-tight text-white sm:text-5xl lg:text-6xl">${escape_html(title)}</h1> <p class="mt-5 max-w-xl text-base leading-8 text-white/76 sm:text-lg">${escape_html(copy)}</p> <div class="mt-8 flex flex-col gap-3 sm:flex-row"><a${attr("href", primaryHref)} class="button-secondary">${escape_html(primaryLabel)}</a> <a${attr("href", secondaryHref)} class="rounded-sm border border-white/24 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">${escape_html(secondaryLabel)}</a></div></div> <div class="surface-card relative overflow-hidden border-white/10 bg-white/8 p-5 backdrop-blur-sm sm:p-6"><div class="absolute inset-x-8 top-0 h-20 bg-sun/10 blur-2xl"></div> <div class="space-y-4"><div class="rounded-sm border border-white/10 bg-black/25 p-5 text-white"><p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">This week</p> <p class="mt-3 font-display text-2xl">Markets, walks and a few good reasons to stay local</p> <p class="mt-3 text-sm leading-6 text-white/80">Check what's on, pick a stop for lunch and make a proper afternoon of it.</p></div> <div class="grid gap-4 sm:grid-cols-2"><div class="rounded-sm border border-white/10 bg-white/90 p-5"><p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Local guide</p> <p class="mt-2 text-lg font-semibold text-ink">Shops, events and places worth knowing about</p></div> <div class="rounded-sm border border-white/10 bg-brand-50 p-5"><p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral">Growing listings</p> <p class="mt-2 text-lg font-semibold text-ink">Real local businesses are starting to be added</p></div></div></div></div></div></section>`);
  bind_props($$props, {
    eyebrow,
    title,
    copy,
    primaryHref,
    primaryLabel,
    secondaryHref,
    secondaryLabel
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const featuredEvents = events.filter((event) => event.featured).slice(0, 3);
    const featuredBusiness = businesses.find((business) => business.isReal);
    const featuredBusinesses = businesses.filter((business) => business.featured && !business.isReal).slice(0, 2);
    const latestNews = newsItems.slice(0, 3);
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Love Long Eaton | Local events, businesses and places to go</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Find local events, businesses and places to go around Long Eaton."/> <meta property="og:title" content="Love Long Eaton | Local events, businesses and places to go"/> <meta property="og:description" content="A calm local guide to what's on, where to go and who to know in Long Eaton."/>`);
    });
    $$renderer2.push(`<section class="container-shell section-space">`);
    Hero($$renderer2, {
      title: "Find local events, shops and places around Long Eaton.",
      copy: "A straightforward guide to what's on, where to eat, where to browse and a few places worth knowing about.",
      primaryHref: "/events",
      primaryLabel: "See what's on",
      secondaryHref: "/businesses",
      secondaryLabel: "Browse businesses"
    });
    $$renderer2.push(`<!----></section> <section class="container-shell pb-14 sm:pb-16"><div class="grid gap-5 sm:grid-cols-3"><div class="surface-card p-6"><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">What’s On</p> <h2 class="mt-3 font-display text-2xl text-ink">Plan the week</h2> <p class="mt-3 text-sm leading-7 text-ink/72">Markets, park days, late openings and easy reasons to head into town.</p></div> <div class="surface-card p-6"><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Discover</p> <h2 class="mt-3 font-display text-2xl text-ink">Keep it simple</h2> <p class="mt-3 text-sm leading-7 text-ink/72">Find a lunch spot, browse a few independents or take the canal route home.</p></div> <div class="surface-card p-6"><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Local Listings</p> <h2 class="mt-3 font-display text-2xl text-ink">Real businesses are starting to be added</h2> <p class="mt-3 text-sm leading-7 text-ink/72">We're keeping the directory useful while fuller local listings are built up.</p></div></div></section> <section class="container-shell section-space pt-0"><div class="flex items-end justify-between gap-4">`);
    SectionHeading($$renderer2, {
      eyebrow: "What’s On in Long Eaton",
      title: "A few upcoming events",
      copy: "Start here if you're planning a weekend, a family afternoon or a quick stop in town."
    });
    $$renderer2.push(`<!----> <a href="/events" class="hidden text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex">View all events</a></div> <div class="grid gap-6 lg:grid-cols-3"><!--[-->`);
    const each_array = ensure_array_like(featuredEvents);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let event = each_array[$$index];
      EventCard($$renderer2, { event });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="container-shell section-space">`);
    if (featuredBusiness) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="surface-card grid gap-6 overflow-hidden p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Featured local business</p> <h2 class="mt-3 font-display text-3xl text-ink sm:text-4xl">${escape_html(featuredBusiness.name)}</h2> <p class="mt-3 text-sm font-medium text-ink/55">${escape_html(featuredBusiness.category)} • ${escape_html(featuredBusiness.location)}</p> <p class="mt-5 max-w-2xl text-base leading-8 text-ink/72">${escape_html(featuredBusiness.description)}</p> <p class="mt-4 max-w-2xl text-base leading-8 text-ink/72">This is one of the first real businesses now added to the guide, with more local listings to follow.</p> <div class="mt-6 flex flex-wrap gap-3"><a${attr("href", `/businesses/${featuredBusiness.slug}`)} class="button-primary">View business</a> `);
      if (featuredBusiness.website) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", featuredBusiness.website)} target="_blank" rel="noreferrer" class="button-secondary">Visit website</a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div> <div class="surface-card overflow-hidden bg-[#0b0b0b] p-8"><img${attr("src", featuredBusiness.imageSrc)}${attr("alt", featuredBusiness.imageAlt ?? featuredBusiness.name)} class="mx-auto max-h-64 w-full object-contain"/></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></section> <section class="container-shell section-space pt-0">`);
    SectionHeading($$renderer2, {
      eyebrow: "Discover Long Eaton",
      title: "Useful ways to explore the town",
      copy: "Start with food, shops, green space or what's on next."
    });
    $$renderer2.push(`<!----> <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
    const each_array_1 = ensure_array_like(discoverCategories);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let category = each_array_1[$$index_1];
      DiscoverCard($$renderer2, { category });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="container-shell section-space"><div class="flex items-end justify-between gap-4">`);
    SectionHeading($$renderer2, {
      eyebrow: "Businesses",
      title: "More local places in the directory",
      copy: "A small mix of food, retail and everyday services while the listings grow."
    });
    $$renderer2.push(`<!----> <a href="/businesses" class="hidden text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex">Browse businesses</a></div> <div class="grid gap-6 lg:grid-cols-3"><!--[-->`);
    const each_array_2 = ensure_array_like(featuredBusinesses);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let business = each_array_2[$$index_2];
      BusinessCard($$renderer2, { business });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="container-shell section-space"><div class="grid gap-5 lg:grid-cols-3"><div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Easy to browse</h2> <p class="mt-4 text-sm leading-7 text-ink/72">The centre suits a short wander, a quick errand run or a slower Saturday with coffee and a few stops.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Useful mix</h2> <p class="mt-4 text-sm leading-7 text-ink/72">Food, services, green space and events all sit close enough together to make the town practical as well as enjoyable.</p></div> <div class="surface-card p-7"><h2 class="font-display text-2xl text-ink">Built up gradually</h2> <p class="mt-4 text-sm leading-7 text-ink/72">Some listings are still mock content for now, so the focus is on keeping the guide clear and credible rather than crowded.</p></div></div></section> <section class="container-shell section-space"><div class="flex items-end justify-between gap-4">`);
    SectionHeading($$renderer2, {
      eyebrow: "Latest News",
      title: "Local updates",
      copy: "Short reads on what's changing, what's returning and what's worth keeping an eye on."
    });
    $$renderer2.push(`<!----> <a href="/news" class="hidden text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex">View all news</a></div> <div class="grid gap-6 lg:grid-cols-3"><!--[-->`);
    const each_array_3 = ensure_array_like(latestNews);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let item = each_array_3[$$index_3];
      NewsCard($$renderer2, { item });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="container-shell section-space pt-0">`);
    CTASection($$renderer2, {
      title: "Add a business or send in an event",
      copy: "If you'd like to be included, use the contact page and we'll pick it up from there.",
      primaryHref: "/contact",
      primaryLabel: "Add your business",
      secondaryHref: "/contact",
      secondaryLabel: "Send an event"
    });
    $$renderer2.push(`<!----></section>`);
  });
}
export {
  _page as default
};
