<script lang="ts">
	import { EmptyState, EventCard, SectionHeading } from '$components';
	import { formatDisplayDate } from '$utils/format';
	import type { PageData } from './$types';
	export let data: PageData;
</script>
<svelte:head>
	<title>What’s on in Long Eaton this weekend | Love Long Eaton</title>
	<meta name="description" content={`Things to do and events in Long Eaton from ${formatDisplayDate(data.start)} to ${formatDisplayDate(data.end)}.`} />
</svelte:head>
<section class="section-surface"><div class="container-shell section-space">
	<SectionHeading eyebrow="This weekend" title="What’s on in Long Eaton this weekend" copy={`${formatDisplayDate(data.start)} to ${formatDisplayDate(data.end)}. Upcoming events and regular weekend activities, gathered in one place.`} headingLevel="h1" />
	{#if data.events.length}<div class="section-grid mt-8">{#each data.events as event}<EventCard {event} />{/each}</div>
	{:else}<div class="mt-8"><EmptyState title="Nothing is listed for this weekend yet" message="New events are added regularly. You can also browse all upcoming and weekly activities." /></div>{/if}
	<div class="mt-8 flex flex-wrap gap-3"><a href="/events" class="button-primary">Browse all events</a><a href="/contact" class="button-secondary">Tell us about an event</a></div>
</div></section>
