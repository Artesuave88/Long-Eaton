<script lang="ts">
	import {
		BusinessCard,
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
	const featuredBusiness = businesses.find((business) => business.isReal);
	const featuredBusinesses = businesses
		.filter((business) => business.featured && !business.isReal)
		.slice(0, 2);
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
		copy="A straightforward guide to what's on, where to eat, where to browse and a few places worth knowing about."
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
			<h2 class="mt-3 font-display text-2xl text-ink">Real businesses are starting to be added</h2>
			<p class="mt-3 text-sm leading-7 text-ink/72">
				We're keeping the directory useful while fuller local listings are built up.
			</p>
		</div>
	</div>
</section>

<section class="container-shell section-space pt-0">
	<div class="flex items-end justify-between gap-4">
		<SectionHeading
			eyebrow="What’s On in Long Eaton"
			title="A few upcoming events"
			copy="Start here if you're planning a weekend, a family afternoon or a quick stop in town."
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
				<p class="mt-4 max-w-2xl text-base leading-8 text-ink/72">
					This is one of the first real businesses now added to the guide, with more local listings to follow.
				</p>
				<div class="mt-6 flex flex-wrap gap-3">
					<a
						href={`/businesses/${featuredBusiness.slug}`}
						class="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800"
					>
						View business
					</a>
					{#if featuredBusiness.website}
						<a
							href={featuredBusiness.website}
							target="_blank"
							rel="noreferrer"
							class="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold text-ink hover:bg-brand-100"
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

<section class="container-shell section-space">
	<div class="flex items-end justify-between gap-4">
		<SectionHeading
			eyebrow="Businesses"
			title="More local places in the directory"
			copy="A small mix of food, retail and everyday services while the listings grow."
		/>
		<a href="/businesses" class="hidden text-sm font-semibold text-brand-700 hover:text-brand-900 sm:inline-flex">
			Browse businesses
		</a>
	</div>
	<div class="grid gap-6 lg:grid-cols-3">
		{#each featuredBusinesses as business}
			<BusinessCard {business} />
		{/each}
	</div>
</section>

<section class="container-shell section-space">
	<div class="grid gap-5 lg:grid-cols-3">
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">Easy to browse</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				The centre suits a short wander, a quick errand run or a slower Saturday with coffee and a few stops.
			</p>
		</div>
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">Useful mix</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				Food, services, green space and events all sit close enough together to make the town practical as well as enjoyable.
			</p>
		</div>
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">Built up gradually</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				Some listings are still mock content for now, so the focus is on keeping the guide clear and credible rather than crowded.
			</p>
		</div>
	</div>
</section>

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
