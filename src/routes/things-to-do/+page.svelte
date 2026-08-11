<script lang="ts">
	import { BusinessCard, DiscoverPlaceCard, EventCard, SectionHeading } from '$components';
	import { businesses } from '$data/businesses';
	import { discoverPlaces } from '$data/discover';
	import { sortedEvents } from '$data/events';
	import { getUpcomingEvents } from '$data/listings';
	import { seasonalGuides } from '$data/guides';
	import { getSeasonFromDate } from '$utils/seasons';

	const upcomingEvents = getUpcomingEvents(sortedEvents);
	const featuredEvents = upcomingEvents.slice(0, 3);
	const familyEvents = upcomingEvents
		.filter((event) =>
			`${event.title} ${event.category} ${event.audience ?? ''} ${(event.tags ?? []).join(' ')}`.match(
				/family|child|children|kids|junior/i
			)
		)
		.slice(0, 3);
	const foodAndDrink = businesses
		.filter((business) => /food|drink|café|cafe|restaurant|pub|bar|coffee/i.test(business.category))
		.slice(0, 3);
	const independentShops = businesses
		.filter((business) => /shopping|books|market|craft|bridal|boutique|retail/i.test(business.category))
		.slice(0, 3);
	const currentSeason = getSeasonFromDate(new Date());
	const currentGuide = seasonalGuides.find((guide) => guide.season === currentSeason) ?? seasonalGuides[0];
	const seasonName = currentSeason.charAt(0).toUpperCase() + currentSeason.slice(1);
</script>

<svelte:head>
	<title>Things to Do in Long Eaton | Events, Walks & Local Places</title>
	<meta
		name="description"
		content="Discover things to do in Long Eaton, including upcoming events, parks and walks, family activities, independent shops, food and drink, and seasonal ideas."
	/>
	<meta property="og:title" content="Things to Do in Long Eaton | Love Long Eaton" />
	<meta
		property="og:description"
		content="Plan time in Long Eaton with local events, outdoor places, family activities, independent businesses and seasonal guides."
	/>
</svelte:head>

<main class="section-surface">
	<section class="container-shell pt-8 sm:pt-12">
		<div class="hero-panel relative overflow-hidden px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.28),transparent_35%),linear-gradient(125deg,rgba(1,36,190,0.96),rgba(7,61,255,0.82))]"></div>
			<div class="relative max-w-3xl">
				<p class="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Explore the town</p>
				<h1 class="mt-4 max-w-2xl text-white">Things to do in Long Eaton</h1>
				<p class="mt-5 max-w-2xl text-lg leading-8 text-white/85">
					Find your next local plan, from upcoming events and free outdoor ideas to children’s activities, cafés, restaurants and independent shopping.
				</p>
				<nav class="mt-8 flex flex-wrap gap-2" aria-label="Popular things to do in Long Eaton">
					{#each [
						['/guides/childrens-activities-in-long-eaton', 'Children’s activities'],
						['#free-things-to-do', 'Free things to do'],
						['/events', 'Events'],
						['/whats-on-this-weekend', 'Weekend events'],
						['/guides/best-cafes-in-long-eaton', 'Cafés'],
						['/guides/restaurants-in-long-eaton', 'Restaurants'],
						['#independent-shops', 'Independent shops'],
						['#seasonal-ideas', 'Seasonal ideas']
					] as link}
						<a href={link[0]} class="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">{link[1]}</a>
					{/each}
				</nav>
			</div>
		</div>
	</section>

	<section id="events" class="container-shell section-space scroll-mt-24" aria-labelledby="events-heading">
		<div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
			<SectionHeading eyebrow="Coming up" title="Upcoming events" copy="A quick look at the next dates in the local calendar." />
			<a href="/events" class="button-secondary shrink-0">View all events</a>
		</div>
		{#if featuredEvents.length}
			<div class="section-grid mt-8">{#each featuredEvents as event}<EventCard {event} />{/each}</div>
		{:else}
			<div class="inset-panel mt-8 p-6"><p class="body-copy-sm">No upcoming events have been added yet. Check the full listings for regular activities.</p></div>
		{/if}
	</section>

	<section id="free-things-to-do" class="section-muted scroll-mt-24" aria-labelledby="parks-heading">
		<div class="container-shell section-space">
			<div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
				<SectionHeading eyebrow="Get outdoors" title="Free things to do: parks and walks" copy="Explore green spaces and waterside routes for a stroll, bike ride or family afternoon without an entry fee." />
				<a href="/discover-long-eaton" class="button-secondary shrink-0">Explore all places</a>
			</div>
			<div class="mt-8 space-y-6">{#each discoverPlaces as place}<DiscoverPlaceCard {place} />{/each}</div>
		</div>
	</section>

	<section id="family" class="container-shell section-space scroll-mt-24" aria-labelledby="family-heading">
		<div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
			<SectionHeading eyebrow="For all ages" title="Family activities" copy="Family-friendly events and easy ideas for time together close to home." />
			<a href="/guides/childrens-activities-in-long-eaton" class="button-secondary shrink-0">See the children’s activity guide</a>
		</div>
		{#if familyEvents.length}
			<div class="section-grid mt-8">{#each familyEvents as event}<EventCard {event} />{/each}</div>
		{:else}
			<div class="inset-panel mt-8 p-6"><p class="body-copy-sm">Try West Park, junior parkrun or browse the events calendar for the latest family listings.</p></div>
		{/if}
	</section>

	<section id="food-and-drink" class="section-muted scroll-mt-24" aria-labelledby="food-heading">
		<div class="container-shell section-space">
			<div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
				<SectionHeading eyebrow="Eat local" title="Food and drink" copy="Independent places for coffee, a meal, a drink or something good to take home." />
				<div class="flex flex-wrap gap-3">
					<a href="/guides/best-cafes-in-long-eaton" class="button-secondary shrink-0">Browse cafés</a>
					<a href="/guides/restaurants-in-long-eaton" class="button-secondary shrink-0">Browse restaurants</a>
				</div>
			</div>
			<div class="section-grid mt-8">{#each foodAndDrink as business}<BusinessCard {business} />{/each}</div>
		</div>
	</section>

	<section id="independent-shops" class="container-shell section-space scroll-mt-24" aria-labelledby="shops-heading">
		<div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
			<SectionHeading eyebrow="Shop local" title="Independent shops" copy="Discover local books, makers, markets and specialist shops around the town." />
			<a href="/businesses?category=shopping" class="button-secondary shrink-0">Browse shopping</a>
		</div>
		<div class="section-grid mt-8">{#each independentShops as business}<BusinessCard {business} />{/each}</div>
	</section>

	<section id="seasonal-ideas" class="section-muted scroll-mt-24" aria-labelledby="seasonal-heading">
		<div class="container-shell section-space">
			<SectionHeading eyebrow={`${seasonName} in Long Eaton`} title="Seasonal ideas and local guides" copy="Use the current guide for timely inspiration, or plan ahead for another time of year." />
			{#if currentGuide}
				<div class="panel-card mt-8 overflow-hidden">
					<div class="grid lg:grid-cols-[0.9fr_1.1fr]">
						<div class="bg-brand-primaryDark p-6 text-white sm:p-8">
							<p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">Current guide</p>
							<h2 id="seasonal-heading" class="mt-3 text-white">{currentGuide.title}</h2>
							<p class="mt-4 leading-7 text-white/80">{currentGuide.description}</p>
							<a href={`/guides/${currentGuide.slug}`} class="button-primary mt-6 bg-white text-brand-primaryDark hover:bg-brand-section">Read the guide</a>
						</div>
						<div class="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
							{#each seasonalGuides as guide}
								<a href={`/guides/${guide.slug}`} class="surface-card surface-card-hover p-5">
									<p class="eyebrow">{guide.eyebrow}</p>
									<h3 class="mt-3 text-xl">{guide.title}</h3>
									<p class="body-copy-sm mt-3">{guide.description}</p>
								</a>
							{/each}
						</div>
					</div>
				</div>
			{/if}
			<div class="mt-8 flex flex-wrap gap-3">
				<a href="/guides" class="button-primary">View all seasonal guides</a>
				<a href="/whats-on-this-weekend" class="button-secondary">See what’s on this weekend</a>
			</div>
		</div>
	</section>
</main>
