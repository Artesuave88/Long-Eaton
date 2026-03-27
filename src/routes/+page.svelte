<script lang="ts">
	import {
		CTASection,
		EventCard,
		Hero,
		SectionHeading
	} from '$components';
	import { businesses } from '$data/businesses';
	import { sortedEvents } from '$data/events';

	const featuredEvents = sortedEvents.filter((event) => event.featured).slice(0, 3);
	const featuredBusiness = businesses[0];
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
			events={featuredEvents.length ? featuredEvents : sortedEvents.slice(0, 5)}
			primaryHref="/events"
			primaryLabel="See what's on"
			secondaryHref="/businesses"
			secondaryLabel="Browse businesses"
		/>
	</div>
</section>

<section class="section-muted">
	<div class="container-shell section-space">
		<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
			<div class="surface-card p-6">
				<p class="eyebrow">What’s On</p>
				<h2 class="mt-3 text-2xl text-brand-text">Events and dates</h2>
				<p class="body-copy-sm mt-3">
					Currently led by Long Eaton Carnival, with the main carnival date and seasonal car boots listed with the practical details people usually need.
				</p>
				<a href="/events" class="button-subtle mt-5">View events</a>
			</div>
			<div class="surface-card p-6">
				<p class="eyebrow">Businesses</p>
				<h2 class="mt-3 text-2xl text-brand-text">Find a business</h2>
				<p class="body-copy-sm mt-3">
					Browse dependable local listings, services and places that are worth keeping close to hand.
				</p>
				<a href="/businesses" class="button-subtle mt-5">Browse businesses</a>
			</div>
			<div class="surface-card p-6">
				<p class="eyebrow">About</p>
				<h2 class="mt-3 text-2xl text-brand-text">Why the guide exists</h2>
				<p class="body-copy-sm mt-3">
					A simple local guide built around useful event and business information for Long Eaton.
				</p>
				<a href="/about" class="button-subtle mt-5">About Love Long Eaton</a>
			</div>
			<div class="surface-card p-6">
				<p class="eyebrow">Contact</p>
				<h2 class="mt-3 text-2xl text-brand-text">Send in details</h2>
				<p class="body-copy-sm mt-3">
					Use the contact page to send an event or add a business that should be included in the guide.
				</p>
				<a href="/contact" class="button-subtle mt-5">Contact us</a>
			</div>
		</div>
	</div>
</section>

<section class="section-muted">
	<div class="container-shell section-space">
		<div class="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
			<div>
				<div class="section-link-row">
					<SectionHeading
						eyebrow="What’s On"
						title="Start with the event currently listed in the calendar"
						copy="The events section stays focused on confirmed local information, starting with Long Eaton Carnival."
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
					title="Keep a real local listing close to hand"
					copy="The directory currently highlights Long Eaton BJJ with clear details and a direct route to the business website."
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
