<script lang="ts">
	import { CTASection, DiscoverPlaceCard, EventCard } from '$components';
	import { discoverPlaces } from '$data/discover';
	import { sortedEvents } from '$data/events';
	import { getEventsForPlace } from '$data/listings';

	const placesWithEvents = discoverPlaces.map((place) => ({
		place,
		events: getEventsForPlace(sortedEvents, place).slice(0, 3)
	}));
</script>

<svelte:head>
	<title>Discover Long Eaton | Love Long Eaton</title>
	<meta
		name="description"
		content="Explore easy local favourites in Long Eaton, including West Park, Trent Lock and the Erewash Canal."
	/>
</svelte:head>

<section class="section-surface">
	<div class="container-shell section-space">
		<div class="max-w-3xl">
			<p class="eyebrow">Discover Long Eaton</p>
			<h1 class="mt-3 text-brand-text">Simple local places to enjoy more of Long Eaton</h1>
		

		</div>
	</div>
</section>

<section class="section-surface">
	<div class="container-shell section-space">
		<div class="space-y-6">
			{#each placesWithEvents as { place, events }}
				<DiscoverPlaceCard {place} />
				{#if events.length}
					<section class="inset-panel p-5 sm:p-6" aria-labelledby={`${place.slug}-events-heading`}>
						<div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<p class="eyebrow">Coming up here</p>
								<h2 id={`${place.slug}-events-heading`} class="mt-2 text-2xl text-brand-text">Events at {place.title}</h2>
							</div>
							<a href="/events" class="button-secondary shrink-0">View all events</a>
						</div>
						<div class="section-grid mt-6">{#each events as event}<EventCard {event} />{/each}</div>
					</section>
				{/if}
			{/each}
		</div>
	</div>
</section>




<section class="section-surface">
	<div class="container-shell section-space">
		<CTASection
			eyebrow="Keep exploring"
			title="Looking for more local ideas after your walk?"
			copy="Find local events, businesses and everyday places worth knowing about in Long Eaton."
			primaryHref="/events"
			primaryLabel="Browse events"
			secondaryHref="/businesses"
			secondaryLabel="See businesses"
		/>
	</div>
</section>
