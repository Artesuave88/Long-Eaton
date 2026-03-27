<script lang="ts">
	import {
		CTASection,
		EventCard,
		HeroCarousel,
		SectionHeading
	} from '$components';
	import { businesses } from '$data/businesses';
	import { sortedEvents } from '$data/events';

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const isUpcomingEvent = (event: (typeof sortedEvents)[number]) => {
		if (!event.date) {
			return false;
		}

		const eventDate = new Date(event.date);
		eventDate.setHours(0, 0, 0, 0);

		return eventDate >= today;
	};

	const upcomingEvents = sortedEvents.filter(isUpcomingEvent);
	const upcomingFeaturedEvents = upcomingEvents.filter((event) => event.featured);
	const heroEvents = (upcomingFeaturedEvents.length ? upcomingFeaturedEvents : upcomingEvents).slice(0, 5);
	const featuredEvents = upcomingFeaturedEvents.slice(0, 3);
	const featuredBusiness = businesses.find((business) => business.featured) ?? businesses[0];
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



<section class="section-muted">
	<div class="container-shell section-space">
		<div class="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
			<div>
				<div class="section-link-row">
					<SectionHeading
						eyebrow="What’s On"
						title="Find events in Long Eaton"
						copy="Browse upcoming performances, community dates and local events across the town."
					/>
					<a href="/events" class="button-subtle hidden sm:inline-flex">Events calendar</a>
				</div>
				<div class="grid gap-6 lg:grid-cols-1">
					{#each featuredEvents as event}
						<EventCard {event} />
					{/each}
				</div>
			</div>

			<div>
				<SectionHeading
					eyebrow="Businesses"
					title="Browse local businesses"
					copy="Explore independent businesses, services and useful local listings in Long Eaton."
				/>
				{#if featuredBusiness}
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
				{/if}
			</div>
		</div>
	</div>
</section>

<section class="section-muted">
	<div class="container-shell section-space">
		<div class="surface-card grid gap-8 p-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
			<div>
				<p class="eyebrow">About Love Long Eaton</p>
				<h2 class="mt-3 text-brand-text">A local guide built around community life in the town</h2>
				<p class="body-copy mt-4 max-w-2xl">
					Love Long Eaton brings together what’s on, where to go and who to know about, with a structure that helps people move easily between events, places and local businesses.
				</p>
				<div class="mt-6">
					<a href="/about" class="button-secondary">Find out more</a>
				</div>
			</div>
			<div>
				<p class="eyebrow">Quick links</p>
				<div class="mt-4 grid gap-3 sm:grid-cols-2">
					<a href="/" class="surface-card p-4 text-sm font-semibold text-brand-text hover:text-brand-accent">Home</a>
					<a href="/events" class="surface-card p-4 text-sm font-semibold text-brand-text hover:text-brand-accent">Events</a>
					<a href="/businesses" class="surface-card p-4 text-sm font-semibold text-brand-text hover:text-brand-accent">Businesses</a>
					<a href="/about" class="surface-card p-4 text-sm font-semibold text-brand-text hover:text-brand-accent">About</a>
					<a href="/contact" class="surface-card p-4 text-sm font-semibold text-brand-text hover:text-brand-accent">Contact</a>
				</div>
			</div>
		</div>
	</div>
</section>

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
