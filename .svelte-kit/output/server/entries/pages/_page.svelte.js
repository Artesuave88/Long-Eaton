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
  $$renderer.push(`<section class="overflow-hidden rounded-[2rem] bg-hero-glow px-6 py-10 shadow-card sm:px-8 sm:py-14 lg:px-12 lg:py-16"><div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div class="max-w-2xl"><p class="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">${escape_html(eyebrow)}</p> <h1 class="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">${escape_html(title)}</h1> <p class="mt-5 max-w-xl text-base leading-8 text-ink/75 sm:text-lg">${escape_html(copy)}</p> <div class="mt-8 flex flex-col gap-3 sm:flex-row"><a${attr("href", primaryHref)} class="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800">${escape_html(primaryLabel)}</a> <a${attr("href", secondaryHref)} class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-brand-100">${escape_html(secondaryLabel)}</a></div></div> <div class="surface-card relative overflow-hidden p-5 sm:p-6"><div class="absolute inset-x-8 top-0 h-24 rounded-b-full bg-sun/20 blur-3xl"></div> <div class="grid gap-4 sm:grid-cols-2"><div class="rounded-[1.5rem] bg-brand-700 p-5 text-white"><p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">This week</p> <p class="mt-3 font-display text-2xl">Markets, park days and canal walks</p> <p class="mt-3 text-sm leading-6 text-white/80">Easy reasons to spend more time local and discover what’s happening next.</p></div> <div class="space-y-4"><div class="rounded-[1.5rem] bg-sand p-5"><p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Independent town</p> <p class="mt-2 text-lg font-semibold text-ink">Food, shopping and friendly local service</p></div> <div class="rounded-[1.5rem] bg-white p-5"><p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral">Make a day of it</p> <p class="mt-2 text-lg font-semibold text-ink">Explore green spaces, high street finds and community events</p></div></div></div></div></div></section>`);
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
    const featuredBusinesses = businesses.filter((business) => business.featured).slice(0, 3);
    const latestNews = newsItems.slice(0, 3);
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Love Long Eaton | Events, independents and local discovery</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Discover local events, independent businesses, green spaces and community stories across Long Eaton."/> <meta property="og:title" content="Love Long Eaton | Events, independents and local discovery"/> <meta property="og:description" content="A welcoming, community-first guide to what’s on, where to go and who to support in Long Eaton."/>`);
    });
    $$renderer2.push(`<section class="container-shell section-space">`);
    Hero($$renderer2, {
      title: "Long Eaton feels better when you know where to go next.",
      copy: "Discover markets, food spots, green spaces and independent businesses that make Long Eaton easy to enjoy, whether you live nearby or you’re planning your first visit.",
      primaryHref: "/events",
      primaryLabel: "Explore events",
      secondaryHref: "/discover",
      secondaryLabel: "Discover the town"
    });
    $$renderer2.push(`<!----></section> <section class="container-shell pb-14 sm:pb-16"><div class="grid gap-5 sm:grid-cols-3"><div class="surface-card p-6"><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">What’s On</p> <h2 class="mt-3 font-display text-2xl text-ink">Events worth showing up for</h2> <p class="mt-3 text-sm leading-7 text-ink/72">From markets to family afternoons, there is always another reason to spend time in town.</p></div> <div class="surface-card p-6"><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Discover</p> <h2 class="mt-3 font-display text-2xl text-ink">Easy local ideas</h2> <p class="mt-3 text-sm leading-7 text-ink/72">Plan a food stop, browse independents or take the scenic route along the canal.</p></div> <div class="surface-card p-6"><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Support Local</p> <h2 class="mt-3 font-display text-2xl text-ink">Meet the businesses behind the town</h2> <p class="mt-3 text-sm leading-7 text-ink/72">Local businesses give Long Eaton its character, service and everyday welcome.</p></div></div></section> <section class="container-shell section-space pt-0"><div class="flex items-end justify-between gap-4">`);
    SectionHeading($$renderer2, {
      eyebrow: "What’s On in Long Eaton",
      title: "Featured events to help you make a day of it",
      copy: "A strong mix of local favourites, community moments and easy weekend plans."
    });
    $$renderer2.push(`<!----> <a href="/events" class="hidden text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex">View all events</a></div> <div class="grid gap-6 lg:grid-cols-3"><!--[-->`);
    const each_array = ensure_array_like(featuredEvents);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let event = each_array[$$index];
      EventCard($$renderer2, { event });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="container-shell section-space">`);
    SectionHeading($$renderer2, {
      eyebrow: "Discover Long Eaton",
      title: "Start with the town’s best-loved themes",
      copy: "Whether you are after a coffee stop, a park afternoon or a browse through independents, these are the places to begin."
    });
    $$renderer2.push(`<!----> <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
    const each_array_1 = ensure_array_like(discoverCategories);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let category = each_array_1[$$index_1];
      DiscoverCard($$renderer2, { category });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="container-shell section-space"><div class="flex items-end justify-between gap-4">`);
    SectionHeading($$renderer2, {
      eyebrow: "Featured Businesses",
      title: "Independent businesses that make the town feel local",
      copy: "Friendly service, thoughtful spaces and everyday places people come back to."
    });
    $$renderer2.push(`<!----> <a href="/businesses" class="hidden text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex">Browse businesses</a></div> <div class="grid gap-6 lg:grid-cols-3"><!--[-->`);
    const each_array_2 = ensure_array_like(featuredBusinesses);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let business = each_array_2[$$index_2];
      BusinessCard($$renderer2, { business });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="container-shell section-space"><div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div class="surface-card p-8 sm:p-10"><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Why Long Eaton?</p> <h2 class="mt-3 font-display text-3xl text-ink sm:text-4xl">A town with real everyday appeal</h2> <p class="mt-5 text-base leading-8 text-ink/72">Long Eaton is welcoming, independent and easy to enjoy. You can spend the morning browsing local shops, stop for lunch with friends, head out for a canal walk and still catch a community event later in the day.</p> <p class="mt-4 text-base leading-8 text-ink/72">It is the kind of place that feels useful, friendly and full of small discoveries, which is exactly why it deserves a destination site that reflects that energy.</p></div> <div class="grid gap-5 sm:grid-cols-2"><div class="surface-card p-6"><p class="text-4xl font-display text-brand-700">30+</p> <p class="mt-3 text-lg font-semibold text-ink">Independent businesses and local services to explore</p></div> <div class="surface-card p-6"><p class="text-4xl font-display text-brand-700">Year-round</p> <p class="mt-3 text-lg font-semibold text-ink">Markets, family events and community moments</p></div> <div class="surface-card p-6"><p class="text-4xl font-display text-brand-700">Walkable</p> <p class="mt-3 text-lg font-semibold text-ink">A compact town centre with parks and canal routes nearby</p></div> <div class="surface-card p-6"><p class="text-4xl font-display text-brand-700">Local-first</p> <p class="mt-3 text-lg font-semibold text-ink">Built around community pride and everyday discovery</p></div></div></div></section> <section class="container-shell section-space"><div class="flex items-end justify-between gap-4">`);
    SectionHeading($$renderer2, {
      eyebrow: "Latest News",
      title: "Fresh stories, offers and town updates",
      copy: "Believable starter content that helps the site feel active and useful from day one."
    });
    $$renderer2.push(`<!----> <a href="/news" class="hidden text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex">View all news</a></div> <div class="grid gap-6 lg:grid-cols-3"><!--[-->`);
    const each_array_3 = ensure_array_like(latestNews);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let item = each_array_3[$$index_3];
      NewsCard($$renderer2, { item });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="container-shell section-space pt-0">`);
    CTASection($$renderer2, {
      title: "Add your business or submit an event for Long Eaton",
      copy: "This MVP is set up to grow into a fuller town platform later. For now, use the contact page as the entry point for businesses, organisers and community partners.",
      primaryHref: "/contact",
      primaryLabel: "Add your business",
      secondaryHref: "/contact",
      secondaryLabel: "Submit an event"
    });
    $$renderer2.push(`<!----></section>`);
  });
}
export {
  _page as default
};
