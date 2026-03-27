<script lang="ts">
	import {
		CTASection,
		DiscoverCard,
		EventCard,
		Hero,
		NewsCard,
		SectionHeading
	} from '$components';
	import { businesses } from '$data/businesses';
	import { discoverCategories } from '$data/discover';
	import { events } from '$data/events';
	import { newsItems } from '$data/news';

	const featuredEvents = events.filter((event) => event.featured).slice(0, 3);
	const featuredBusiness = businesses[0];
	const latestNews = newsItems.slice(0, 3);
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

<section class="container-shell section-space">
	<Hero
		title="Find local events, shops and places around Long Eaton."
		copy="A straightforward guide to what’s on, where to eat, where to browse and a few places worth knowing about, including real local events like Long Eaton Carnival."
		primaryHref="/events"
		primaryLabel="See what's on"
		secondaryHref="/businesses"
		secondaryLabel="Browse businesses"
	/>
</section>

<section class="container-shell pb-14 sm:pb-16">
	<div class="grid gap-5 sm:grid-cols-3">
		<div class="surface-card p-6">
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">What’s On</p>
			<h2 class="mt-3 font-display text-2xl text-ink">Plan the week</h2>
			<p class="mt-3 text-sm leading-7 text-ink/72">
				Markets, park days, late openings and easy reasons to head into town.
			</p>
		</div>
		<div class="surface-card p-6">
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Discover</p>
			<h2 class="mt-3 font-display text-2xl text-ink">Keep it simple</h2>
			<p class="mt-3 text-sm leading-7 text-ink/72">
				Find a lunch spot, browse a few independents or take the canal route home.
			</p>
		</div>
		<div class="surface-card p-6">
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Local Listings</p>
			<h2 class="mt-3 font-display text-2xl text-ink">Verified local listings only</h2>
			<p class="mt-3 text-sm leading-7 text-ink/72">
				The directory now shows only businesses that have been properly added, rather than padded-out placeholders.
			</p>
		</div>
	</div>
</section>

<section class="container-shell section-space pt-0">
	<div class="flex items-end justify-between gap-4">
		<SectionHeading
			eyebrow="What’s On in Long Eaton"
			title="A few upcoming events"
			copy="Start with Long Eaton Carnival, then use the listings for smaller events, family afternoons and local weekends."
		/>
		<a href="/events" class="hidden text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex">
			View all events
		</a>
	</div>
	<div class="grid gap-6 lg:grid-cols-3">
		{#each featuredEvents as event}
			<EventCard {event} />
		{/each}
	</div>
</section>

<section class="container-shell section-space">
	{#if featuredBusiness}
		<div class="surface-card grid gap-6 overflow-hidden p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
			<div>
				<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Featured local business</p>
				<h2 class="mt-3 font-display text-3xl text-ink sm:text-4xl">{featuredBusiness.name}</h2>
				<p class="mt-3 text-sm font-medium text-ink/55">{featuredBusiness.category} • {featuredBusiness.location}</p>
				<p class="mt-5 max-w-2xl text-base leading-8 text-ink/72">{featuredBusiness.description}</p>
				<p class="mt-4 max-w-2xl text-base leading-8 text-ink/72">This is a live listing in the guide, with more genuine local entries to be added over time.</p>
				<div class="mt-6 flex flex-wrap gap-3">
					<a
						href={`/businesses/${featuredBusiness.slug}`}
						class="button-primary"
					>
						View business
					</a>
					{#if featuredBusiness.website}
						<a
							href={featuredBusiness.website}
							target="_blank"
							rel="noreferrer"
							class="button-secondary"
						>
							Visit website
						</a>
					{/if}
				</div>
			</div>
			<div class="surface-card overflow-hidden bg-[#0b0b0b] p-8">
				<img
					src={featuredBusiness.imageSrc}
					alt={featuredBusiness.imageAlt ?? featuredBusiness.name}
					class="mx-auto max-h-64 w-full object-contain"
				/>
			</div>
		</div>
	{/if}
</section>

{#if discoverCategories.length}
	<section class="container-shell section-space pt-0">
		<SectionHeading
			eyebrow="Discover Long Eaton"
			title="Useful ways to explore the town"
			copy="Start with food, shops, green space or what's on next."
		/>
		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
			{#each discoverCategories as category}
				<DiscoverCard {category} />
			{/each}
		</div>
	</section>
{/if}

<section class="container-shell section-space">
	<div class="surface-card grid gap-6 p-7 lg:grid-cols-[1fr_auto] lg:items-end">
		<div>
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Businesses</p>
			<h2 class="mt-3 font-display text-3xl text-ink">The directory is now real-content only</h2>
			<p class="mt-4 max-w-2xl text-base leading-8 text-ink/72">
				Long Eaton BJJ is the first live business listing. More entries can be added once they are properly checked and written up.
			</p>
		</div>
		<a href="/businesses" class="button-primary">Browse businesses</a>
	</div>
</section>

<section class="container-shell section-space">
	<div class="grid gap-5 lg:grid-cols-3">
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">One real anchor event</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				Long Eaton Carnival gives the events section a proper local fixture, with a clear date, route and park site already in place.
			</p>
		</div>
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">Useful timings</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				Featured events now carry more of the details people actually need, including start times, return times and whether an event is free.
			</p>
		</div>
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">No filler content</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				Anything still on the site now is there because it has been added as a real local listing or event, not as stand-in demo content.
			</p>
		</div>
	</div>
</section>

{#if latestNews.length}
	<section class="container-shell section-space">
		<div class="flex items-end justify-between gap-4">
			<SectionHeading
				eyebrow="Latest News"
				title="Local updates"
				copy="Short reads on what's changing, what's returning and what's worth keeping an eye on."
			/>
			<a href="/news" class="hidden text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex">
				View all news
			</a>
		</div>
		<div class="grid gap-6 lg:grid-cols-3">
			{#each latestNews as item}
				<NewsCard {item} />
			{/each}
		</div>
	</section>
{/if}

<section class="container-shell section-space pt-0">
	<CTASection
		title="Add a business or send in an event"
		copy="If you'd like to be included, use the contact page and we'll pick it up from there."
		primaryHref="/contact"
		primaryLabel="Add your business"
		secondaryHref="/contact"
		secondaryLabel="Send an event"
	/>
</section>
