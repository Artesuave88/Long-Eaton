<script lang="ts">
  import {
    BusinessCategoryGrid,
    CTASection,
    FeaturedBusinessPanel,
    FeaturedEventPanel,
    HeroCarousel,
    SectionHeading,
  } from "$components";
  import { businesses } from "$data/businesses";
  import { discoverPlaces } from "$data/discover";
  import { regularEvents, sortedEvents } from "$data/events";
  import { getFeaturedBusiness, getHomepageEventSelection, isRepeatedEventText } from "$data/listings";
  import { newsItems } from "$data/news";
  import { formatRecurringLabel } from "$utils/format";
  import type { ActionData } from "./$types";

  export let form: ActionData;

  const { featuredEvent, heroEvents } = getHomepageEventSelection(sortedEvents);
  const featuredBusiness = getFeaturedBusiness(businesses);
  const homepageDiscoverPlaces = discoverPlaces.slice(0, 3);
  const homepageRegularEvents = regularEvents.slice(0, 6);
  const featuredNews = newsItems[0];

  let shareStatus = "";

  async function shareSite() {
    const shareData = {
      title: "Love Long Eaton",
      text: "A handy local guide to events, businesses and places around Long Eaton.",
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        shareStatus = "Thanks for sharing!";
      } else {
        await navigator.clipboard.writeText(shareData.url);
        shareStatus = "Link copied — ready to share!";
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      shareStatus = "Copy the address from your browser to share it.";
    }
  }
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

<section class="border-b border-sky-200 bg-sky-50" aria-labelledby="welcome-heading">
  <div class="container-shell flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
    <div class="max-w-3xl">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">A warm local welcome</p>
      <h2 id="welcome-heading" class="mt-2 text-2xl text-brand-text sm:text-3xl">
        Thanks for visiting, Long Eaton!
      </h2>
      <p class="mt-2 text-sm leading-6 text-brand-muted sm:text-base">
        It’s lovely to see so many new visitors. Bookmark Love Long Eaton so you can easily find
        local events, independent businesses and places to visit—and please share it with someone nearby.
      </p>
    </div>
    <div class="flex shrink-0 flex-col items-start gap-2 sm:items-end">
      <button type="button" class="button-primary whitespace-nowrap" on:click={shareSite}>
        Share Love Long Eaton
      </button>

    </div>
  </div>
</section>

<section class="section-surface" aria-labelledby="newsletter-heading">
  <div class="container-shell pt-8">
    <div class="overflow-hidden rounded-2xl bg-brand-primaryDark text-white shadow-card">
      <div class="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">Your local weekend guide</p>
          <h2 id="newsletter-heading" class="mt-3 text-3xl text-white">What’s on this weekend?</h2>
          <p class="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            Get a short roundup of Long Eaton events, activities and places to visit, delivered to
            your inbox ahead of the weekend.
          </p>
        </div>

        {#if form?.newsletterSuccess}
          <div class="rounded-xl border border-emerald-300/30 bg-emerald-400/15 p-5" role="status">
            <p class="font-semibold text-white">You’re on the list!</p>
            <p class="mt-1 text-sm text-white/75">Look out for your first Long Eaton weekend roundup.</p>
          </div>
        {:else}
          <form method="POST" action="?/subscribe" class="space-y-3">
            <div class="hidden" aria-hidden="true">
              <label for="newsletter-website">Website</label>
              <input id="newsletter-website" name="website" type="text" tabindex="-1" autocomplete="off" />
            </div>
            <div class="flex flex-col gap-3 sm:flex-row">
              <label for="newsletter-email" class="sr-only">Email address</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                value={form?.newsletterEmail ?? ""}
                placeholder="Your email address"
                autocomplete="email"
                inputmode="email"
                required
                class="min-h-12 min-w-0 flex-1 rounded-xl border border-white/20 bg-white px-4 py-3 text-base text-brand-text placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-300/30"
              />
              <button type="submit" class="min-h-12 whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-primaryDark transition hover:bg-sky-50">
                Send me the roundup
              </button>
            </div>
            <label class="flex items-start gap-2 text-xs leading-5 text-white/70">
              <input name="consent" value="yes" type="checkbox" required class="mt-1 rounded border-white/30 text-brand-primary focus:ring-sky-300" />
              <span>I’d like to receive the Love Long Eaton email roundup. Unsubscribe at any time.</span>
            </label>
            {#if form?.newsletterError}
              <p class="rounded-lg bg-red-400/15 px-3 py-2 text-sm text-red-100" role="alert">
                {form.newsletterError}
              </p>
            {/if}
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>

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

<section class="section-surface">
	<div class="container-shell section-space pt-0">
		{#if featuredNews}
			<CTASection
				eyebrow="Local news"
				title={featuredNews.title}
				copy={featuredNews.excerpt}
				primaryHref={`/news#${featuredNews.id}`}
				primaryLabel="Read update"
				secondaryHref="/news"
				secondaryLabel="Browse news"
			/>
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

{#if homepageRegularEvents.length}
  <section class="section-surface">
    <div class="container-shell section-space pt-0">
      <SectionHeading
        eyebrow="Regular activities"
        title="Ongoing groups and weekly events"
        copy="Regular local groups, activities and weekly meet-ups that help the town feel active week to week."
      />
      <div class="section-grid">
        {#each homepageRegularEvents as event}
          <a href={`/events/${event.slug}`} class="surface-card surface-card-hover p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">
              {event.category}
            </p>
            <h3 class="mt-4 text-2xl leading-tight text-brand-text">{event.title}</h3>
            {#if event.recurrence || event.time || event.price}
              <p class="mt-3 text-sm text-brand-muted">
                {#if event.recurrence}
                  {formatRecurringLabel(event)}
                {:else}
                  Ongoing group
                {/if}
                {#if event.time}
                  • {event.time}
                {/if}
                {#if event.price}
                  • {event.price}
                {/if}
              </p>
            {/if}
            {#if event.location}
              <p class="mt-3 text-sm leading-7 text-brand-muted">{event.location}</p>
            {/if}
            {#if !isRepeatedEventText(event.excerpt, event.title)}
              <p class="body-copy-sm mt-4">{event.excerpt}</p>
            {/if}
          </a>
        {/each}
      </div>
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
					<h2 class="mt-3 text-brand-text">Discover Long Eaton</h2>
					<p class="mt-5 max-w-2xl text-lg leading-8 text-brand-muted sm:text-[1.08rem]">
						Explore the town’s favourite hidden gems and parks with our guide to the best places in Long Eaton.
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
