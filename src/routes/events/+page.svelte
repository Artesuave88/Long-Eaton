<script lang="ts">
	import { CategoryFilter, EmptyState, EventCard, SearchBar, SectionHeading } from '$components';
	import { eventCategories, regularEvents, upcomingEvents } from '$data/events';
	import { filterEvents } from '$data/listings';

	let query = '';
	let selectedCategory = 'All';
	let viewMode: 'upcoming' | 'regular' = 'upcoming';

	$: activeEvents = viewMode === 'regular' ? regularEvents : upcomingEvents;
	$: filteredEvents = filterEvents(activeEvents, { query, category: selectedCategory });
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
			copy="One-off dates, weekly activities and regular local events across Long Eaton."
		/>

		<div class="listing-toolbar">
			<div class="flex flex-wrap gap-3">
				<button
					type="button"
					class={viewMode === 'upcoming' ? 'button-primary' : 'button-secondary'}
					on:click={() => (viewMode = 'upcoming')}
				>
					Upcoming events
				</button>
				<button
					type="button"
					class={viewMode === 'regular' ? 'button-primary' : 'button-secondary'}
					on:click={() => (viewMode = 'regular')}
				>
					Regular events
				</button>
			</div>
			<SearchBar bind:value={query} placeholder="Search events, locations or ideas" />
			<CategoryFilter categories={eventCategories} bind:value={selectedCategory} />
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
