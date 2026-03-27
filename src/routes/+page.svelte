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
const discoverHighlights = discoverCategories.slice(0, 2);
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
		<Hero
			title="Find local events, shops and places around Long Eaton."
			copy="A calm local guide to what’s on, where to browse, where to stop and which businesses are worth knowing about in Long Eaton."
			primaryHref="/events"
			primaryLabel="See what's on"
			secondaryHref="/businesses"
			secondaryLabel="Browse businesses"
		/>
	</div>
</section>

<section class="section-muted">
	<div class="container-shell section-space">
		<SectionHeading
			eyebrow="Start Here"
			title="Three simple ways into the town"
			copy="Use the homepage like a starting point: what’s happening, what to explore and which local businesses to keep handy."
		/>
		<div class="grid gap-5 sm:grid-cols-3">
			<div class="surface-card p-6">
				<p class="eyebrow">What’s On</p>
				<h2 class="mt-3 text-2xl text-brand-text">Plan the week</h2>
				<p class="body-copy-sm mt-3">
					Markets, park days, late openings and easy reasons to head into town.
				</p>
			</div>
			<div class="surface-card p-6">
				<p class="eyebrow">Discover</p>
				<h2 class="mt-3 text-2xl text-brand-text">Keep it simple</h2>
				<p class="body-copy-sm mt-3">
					Find a lunch spot, browse a few independents or take the canal route home.
				</p>
			</div>
			<div class="surface-card p-6">
				<p class="eyebrow">Local Listings</p>
				<h2 class="mt-3 text-2xl text-brand-text">Local businesses at a glance</h2>
				<p class="body-copy-sm mt-3">
					Browse independent businesses, community favourites and everyday places that help shape the town.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section-surface">
	<div class="container-shell section-space">
		<div class="section-link-row">
			<SectionHeading
				eyebrow="What’s On in Long Eaton"
				title="A few upcoming events to build a day around"
				copy="Long Eaton Carnival leads the calendar, alongside markets, family days and smaller local dates through the season."
			/>
			<a href="/events" class="button-subtle hidden sm:inline-flex">View all events</a>
		</div>
		<div class="grid gap-6 lg:grid-cols-3">
			{#each featuredEvents as event}
				<EventCard {event} />
			{/each}
		</div>
	</div>
</section>

<section class="section-muted">
	<div class="container-shell section-space">
		<div class="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
			{#if discoverHighlights.length}
				<div>
					<SectionHeading
						eyebrow="Discover Long Eaton"
						title="Pick a direction and explore a little further"
						copy="Food, shops, green space and everyday routes that help the town feel connected and easy to enjoy."
					/>
					<div class="grid gap-6 md:grid-cols-2">
						{#each discoverHighlights as category}
							<DiscoverCard {category} />
						{/each}
					</div>
					<div class="mt-6">
						<a href="/discover" class="button-secondary">Explore discover</a>
					</div>
				</div>
			{/if}

			{#if featuredBusiness}
				<div>
					<SectionHeading
						eyebrow="Businesses"
						title="Keep a reliable local business close to hand"
						copy="The directory is there for classes, services and places you may want to return to more than once."
					/>
					<div class="surface-card overflow-hidden p-6 sm:p-8">
						<div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
							<div>
								<p class="eyebrow">Featured business</p>
								<h3 class="mt-3 text-brand-text">{featuredBusiness.name}</h3>
								<p class="mt-3 text-sm font-medium text-brand-muted">{featuredBusiness.category} • {featuredBusiness.location}</p>
								<p class="body-copy mt-5">{featuredBusiness.description}</p>
								<div class="mt-6 flex flex-wrap gap-3">
									<a href={`/businesses/${featuredBusiness.slug}`} class="button-primary">View business</a>
									{#if featuredBusiness.website}
										<a href={featuredBusiness.website} target="_blank" rel="noreferrer" class="button-secondary">
											Visit website
										</a>
									{/if}
								</div>
							</div>
							<div class="surface-card overflow-hidden bg-brand-primaryDark p-8">
								<img
									src={featuredBusiness.imageSrc}
									alt={featuredBusiness.imageAlt ?? featuredBusiness.name}
									class="mx-auto max-h-56 w-full object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<section class="section-surface">
	<div class="container-shell section-space">
		<div class="grid gap-5 lg:grid-cols-3">
			<div class="surface-card p-7">
				<p class="eyebrow">Community</p>
				<h2 class="mt-3 text-2xl text-brand-text">Anchored in the town calendar</h2>
				<p class="body-copy-sm mt-4">
					Flagship events such as Long Eaton Carnival sit alongside smaller dates that help shape weekends and evenings.
				</p>
			</div>
			<div class="surface-card p-7">
				<p class="eyebrow">About the guide</p>
				<h2 class="mt-3 text-2xl text-brand-text">Easy to scan</h2>
				<p class="body-copy-sm mt-4">
					Timings, locations and categories stay consistent across the site so it is quick to compare what is happening.
				</p>
			</div>
			<div class="surface-card p-7">
				<p class="eyebrow">Local focus</p>
				<h2 class="mt-3 text-2xl text-brand-text">Made for everyday use</h2>
				<p class="body-copy-sm mt-4">
					The layout stays calm and practical, with enough detail to be useful without getting in the way.
				</p>
			</div>
		</div>
		<div class="mt-8 flex justify-start">
			<a href="/about" class="button-secondary">About Love Long Eaton</a>
		</div>
	</div>
</section>

{#if latestNews.length}
	<section class="section-muted">
		<div class="container-shell section-space">
			<div class="section-link-row">
				<SectionHeading
					eyebrow="Latest News"
					title="Local updates"
					copy="Short reads on what's changing, what's returning and what's worth keeping an eye on."
				/>
				<a href="/news" class="button-subtle hidden sm:inline-flex">View all news</a>
			</div>
			<div class="grid gap-6 lg:grid-cols-3">
				{#each latestNews as item}
					<NewsCard {item} />
				{/each}
			</div>
		</div>
	</section>
{/if}

<section class="section-surface">
	<div class="container-shell section-space">
		<CTASection
			title="Add a business or send in an event"
			copy="If you'd like to be included in the guide, use the contact page and share the details."
			primaryHref="/contact"
			primaryLabel="Add your business"
			secondaryHref="/contact"
			secondaryLabel="Send an event"
		/>
	</div>
</section>
