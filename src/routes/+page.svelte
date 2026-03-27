<script lang="ts">
  import {
    BusinessAZNav,
    BusinessCategoryGrid,
    FeaturedBusinessPanel,
    FeaturedEventPanel,
    HeroCarousel,
    SectionHeading,
  } from "$components";
  import { businesses } from "$data/businesses";
  import { sortedEvents } from "$data/events";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isUpcomingEvent = (event: (typeof sortedEvents)[number]) => {
    if (!event.date) {
      return false;
    }

    const eventDate = new Date(event.endDate ?? event.date);
    eventDate.setHours(0, 0, 0, 0);

    return eventDate >= today;
  };

  const upcomingEvents = sortedEvents.filter(isUpcomingEvent);
  const upcomingFeaturedEvents = upcomingEvents.filter((event) => event.featured);
  const heroEvents = (upcomingFeaturedEvents.length ? upcomingFeaturedEvents : upcomingEvents).slice(0, 5);
  const featuredEvent = upcomingFeaturedEvents[0] ?? upcomingEvents[0];
  const featuredBusinesses = businesses.filter((business) => business.featured);
  const featuredBusiness = featuredBusinesses[0] ?? businesses[0];
</script>

<svelte:head>
  <title>Love Long Eaton | Local events, businesses and places to go</title>
  <meta
    name="description"
    content="Find local events, businesses and places to go around Long Eaton."
  />
  <meta property="og:title" content="Love Long Eaton | Local events, businesses and places to go" />
  <meta
    property="og:description"
    content="A calm local guide to what's on, where to go and who to know in Long Eaton."
  />
</svelte:head>

<section class="section-surface">
  <div class="container-shell section-space">
    {#if heroEvents.length}
      <HeroCarousel events={heroEvents} />
    {:else}
      <section class="relative overflow-hidden rounded-[1.9rem] border border-brand-border bg-brand-primaryDark text-white shadow-[0_28px_90px_rgba(7,18,41,0.24)]">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),linear-gradient(120deg,rgba(4,14,39,0.96),rgba(11,44,109,0.78))]"></div>
        <div class="relative z-10 flex min-h-[24rem] items-end p-6 sm:min-h-[28rem] sm:p-8 lg:min-h-[38rem] lg:p-12">
          <div class="max-w-2xl rounded-[1.65rem] border border-white/12 bg-slate-950/22 p-5 backdrop-blur-md sm:p-7 lg:p-8">
            <span class="inline-flex items-center rounded-full border border-white/16 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/88">
              What’s On
            </span>
            <h1 class="mt-4 max-w-[12ch] text-[2.15rem] leading-[0.98] text-white sm:text-[2.9rem] lg:text-[3.45rem]">
              Find events in Long Eaton
            </h1>
            <p class="mt-4 max-w-xl text-sm leading-7 text-white/84 sm:text-base">
              Browse upcoming dates, local performances and town events in one place.
            </p>
            <div class="mt-7 flex flex-wrap gap-3">
              <a href="/events" class="button-primary">View events</a>
            </div>
          </div>
        </div>
      </section>
    {/if}
  </div>
</section>

{#if featuredEvent}
  <section class="section-surface">
    <div class="container-shell section-space pt-0">

      <FeaturedEventPanel event={featuredEvent} />
    </div>
  </section>
{/if}

{#if featuredBusiness}
  <section class="section-muted">
    <div class="container-shell section-space">

      <FeaturedBusinessPanel business={featuredBusiness} />
    </div>
  </section>
{/if}

<section class="section-surface">
  <div class="container-shell section-space">
    <SectionHeading
      eyebrow="Businesses"
      title="Browse businesses by category"
      copy="Start with a broad category and head into the directory from there."
    />
    <BusinessCategoryGrid />
  </div>
</section>

<!-- <section class="section-muted">
  <div class="container-shell section-space">
    <SectionHeading
      eyebrow="Businesses"
      title="Browse businesses A–Z"
      copy="Use the alphabet to jump into the directory by business name."
    />
    <div class="surface-card p-5 sm:p-6">
      <BusinessAZNav />
    </div>
  </div>
</section> -->
