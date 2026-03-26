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
	import { site } from '$data/site';

	const featuredEvents = events.filter((event) => event.featured).slice(0, 3);
	const featuredBusinesses = businesses.filter((business) => business.featured).slice(0, 3);
	const latestNews = newsItems.slice(0, 3);
</script>

<svelte:head>
	<title>Love Long Eaton | Events, independents and local discovery</title>
	<meta
		name="description"
		content="Discover local events, independent businesses, green spaces and community stories across Long Eaton."
	/>
	<meta property="og:title" content="Love Long Eaton | Events, independents and local discovery" />
	<meta
		property="og:description"
		content="A welcoming, community-first guide to what’s on, where to go and who to support in Long Eaton."
	/>
</svelte:head>

<section class="container-shell section-space">
	<Hero
		title="Long Eaton feels better when you know where to go next."
		copy="Discover markets, food spots, green spaces and independent businesses that make Long Eaton easy to enjoy, whether you live nearby or you’re planning your first visit."
		primaryHref="/events"
		primaryLabel="Explore events"
		secondaryHref="/discover"
		secondaryLabel="Discover the town"
	/>
</section>

<section class="container-shell pb-14 sm:pb-16">
	<div class="grid gap-5 sm:grid-cols-3">
		<div class="surface-card p-6">
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">What’s On</p>
			<h2 class="mt-3 font-display text-2xl text-ink">Events worth showing up for</h2>
			<p class="mt-3 text-sm leading-7 text-ink/72">
				From markets to family afternoons, there is always another reason to spend time in town.
			</p>
		</div>
		<div class="surface-card p-6">
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Discover</p>
			<h2 class="mt-3 font-display text-2xl text-ink">Easy local ideas</h2>
			<p class="mt-3 text-sm leading-7 text-ink/72">
				Plan a food stop, browse independents or take the scenic route along the canal.
			</p>
		</div>
		<div class="surface-card p-6">
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Support Local</p>
			<h2 class="mt-3 font-display text-2xl text-ink">Meet the businesses behind the town</h2>
			<p class="mt-3 text-sm leading-7 text-ink/72">
				Local businesses give Long Eaton its character, service and everyday welcome.
			</p>
		</div>
	</div>
</section>

<section class="container-shell section-space pt-0">
	<div class="flex items-end justify-between gap-4">
		<SectionHeading
			eyebrow="What’s On in Long Eaton"
			title="Featured events to help you make a day of it"
			copy="A strong mix of local favourites, community moments and easy weekend plans."
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
	<SectionHeading
		eyebrow="Discover Long Eaton"
		title="Start with the town’s best-loved themes"
		copy="Whether you are after a coffee stop, a park afternoon or a browse through independents, these are the places to begin."
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
			eyebrow="Featured Businesses"
			title="Independent businesses that make the town feel local"
			copy="Friendly service, thoughtful spaces and everyday places people come back to."
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
	<div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
		<div class="surface-card p-8 sm:p-10">
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Why Long Eaton?</p>
			<h2 class="mt-3 font-display text-3xl text-ink sm:text-4xl">A town with real everyday appeal</h2>
			<p class="mt-5 text-base leading-8 text-ink/72">
				Long Eaton is welcoming, independent and easy to enjoy. You can spend the morning browsing local shops, stop for lunch with friends, head out for a canal walk and still catch a community event later in the day.
			</p>
			<p class="mt-4 text-base leading-8 text-ink/72">
				It is the kind of place that feels useful, friendly and full of small discoveries, which is exactly why it deserves a destination site that reflects that energy.
			</p>
		</div>

		<div class="grid gap-5 sm:grid-cols-2">
			<div class="surface-card p-6">
				<p class="text-4xl font-display text-brand-700">30+</p>
				<p class="mt-3 text-lg font-semibold text-ink">Independent businesses and local services to explore</p>
			</div>
			<div class="surface-card p-6">
				<p class="text-4xl font-display text-brand-700">Year-round</p>
				<p class="mt-3 text-lg font-semibold text-ink">Markets, family events and community moments</p>
			</div>
			<div class="surface-card p-6">
				<p class="text-4xl font-display text-brand-700">Walkable</p>
				<p class="mt-3 text-lg font-semibold text-ink">A compact town centre with parks and canal routes nearby</p>
			</div>
			<div class="surface-card p-6">
				<p class="text-4xl font-display text-brand-700">Local-first</p>
				<p class="mt-3 text-lg font-semibold text-ink">Built around community pride and everyday discovery</p>
			</div>
		</div>
	</div>
</section>

<section class="container-shell section-space">
	<div class="flex items-end justify-between gap-4">
		<SectionHeading
			eyebrow="Latest News"
			title="Fresh stories, offers and town updates"
			copy="Believable starter content that helps the site feel active and useful from day one."
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
		title="Add your business or submit an event for Long Eaton"
		copy="This MVP is set up to grow into a fuller town platform later. For now, use the contact page as the entry point for businesses, organisers and community partners."
		primaryHref="/contact"
		primaryLabel="Add your business"
		secondaryHref="/contact"
		secondaryLabel="Submit an event"
	/>
</section>
