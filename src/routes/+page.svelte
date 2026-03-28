<script lang="ts">
  import {
    BusinessCategoryGrid,
    FeaturedBusinessPanel,
    FeaturedEventPanel,
    HeroCarousel,
    SectionHeading,
  } from "$components";
  import { businesses } from "$data/businesses";
  import { discoverPlaces } from "$data/discover";
  import { sortedEvents } from "$data/events";
  import { getFeaturedBusiness, getHomepageEventSelection } from "$data/listings";

  const { featuredEvent, heroEvents } = getHomepageEventSelection(sortedEvents);
  const featuredBusiness = getFeaturedBusiness(businesses);
  const homepageDiscoverPlaces = discoverPlaces.slice(0, 3);
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
		<article class="panel-card overflow-hidden">
			<div class="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
				<div class="panel-content flex flex-col justify-center">
					<p class="eyebrow">Local places</p>
					<h1 class="mt-3 text-brand-text">Discover Long Eaton</h1>
					<p class="mt-5 max-w-2xl text-lg leading-8 text-brand-muted sm:text-[1.08rem]">
						Explore the town’s easiest local favourites, from parks to walking, cycling and slower afternoons outdoors.
					</p>
					<div class="mt-7 flex flex-wrap gap-3">
						<a href="/discover-long-eaton" class="button-primary">Explore places</a>
					</div>
				</div>

        <div class="relative min-h-[18rem] overflow-hidden border-t border-brand-border bg-brand-primaryDark lg:min-h-full lg:border-l lg:border-t-0">
					<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_34%),linear-gradient(135deg,rgba(8,25,55,0.96),rgba(40,89,116,0.82))]"></div>
					<div class="relative flex h-full min-h-[18rem] flex-col justify-end p-6 text-white sm:p-8">
						<p class="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/72">
              Parks, waterside and canal walks
						</p>
						<p class="mt-4 max-w-sm text-2xl leading-tight sm:text-[2rem]">
              Local spots that are easy to get to and fit everything from family time to bike rides.
						</p>
					</div>
				</div>
			</div>
		</article>
	</div>
</section>

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
