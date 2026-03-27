<script lang="ts">
	import { CategoryFilter, EmptyState, EventCard, SearchBar, SectionHeading } from '$components';
	import { eventCategories, events } from '$data/events';
	import { slugMatches } from '$utils/format';

	let query = '';
	let selectedCategory = 'All';

	$: filteredEvents = events.filter((event) => {
		const matchesQuery =
			slugMatches(event.title, query) ||
			slugMatches(event.excerpt, query) ||
			slugMatches(event.location, query);
		const matchesCategory =
			selectedCategory === 'All' || event.category === selectedCategory;

		return matchesQuery && matchesCategory;
	});
</script>

<svelte:head>
	<title>Events | Love Long Eaton</title>
	<meta
		name="description"
		content="See upcoming events in Long Eaton, from markets and family days to walks and live music."
	/>
</svelte:head>

<section class="section-surface">
	<div class="container-shell section-space">
		<SectionHeading
			eyebrow="Events"
			title="What’s on in Long Eaton"
			copy="Markets, family days, live music, waterside walks and established town events across the year."
		/>

		<div class="surface-card mb-8 grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">
			<SearchBar bind:value={query} placeholder="Search events, locations or ideas" />
			<CategoryFilter categories={eventCategories} bind:selected={selectedCategory} />
		</div>

		{#if filteredEvents.length}
			<div class="section-grid">
				{#each filteredEvents as event}
					<EventCard {event} />
				{/each}
			</div>
		{:else}
			<EmptyState
				title="No events matched your search"
				message="Try a broader search term or switch categories to see more events happening across Long Eaton."
			/>
		{/if}
	</div>
</section>
