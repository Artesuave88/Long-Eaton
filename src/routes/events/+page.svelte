<script lang="ts">
	import { EmptyState, EventCard, SearchBar, SectionHeading } from '$components';
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

		<div class="surface-card mb-8 overflow-hidden">
			<div class="flex flex-wrap gap-3 border-b border-brand-border bg-brand-surface p-5 sm:p-6">
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

			<div class="bg-brand-section/60 p-5 sm:p-6">
				<div class="grid gap-4 md:grid-cols-[minmax(0,1fr)_20rem] md:items-end">
					<div>
						<label for="event-search" class="text-sm font-semibold text-brand-text">
							Search events
						</label>
						<div class="mt-2">
							<SearchBar
								id="event-search"
								bind:value={query}
								placeholder="Try an event, location or activity…"
							/>
						</div>
					</div>

					<div>
						<label for="event-category" class="text-sm font-semibold text-brand-text">
							Category
						</label>
						<select
							id="event-category"
							bind:value={selectedCategory}
							class="field-input mt-2 cursor-pointer"
						>
							{#each eventCategories as category}
								<option value={category}>
									{category === 'All' ? 'All categories' : category}
								</option>
							{/each}
						</select>
					</div>
				</div>

				<p class="mt-4 text-sm font-medium text-brand-muted" aria-live="polite">
					Showing {filteredEvents.length}
					{filteredEvents.length === 1 ? 'event' : 'events'}
				</p>
			</div>
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
