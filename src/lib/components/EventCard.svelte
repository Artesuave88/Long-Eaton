<script lang="ts">
	import type { EventItem } from '$types/content';
	import { formatDisplayDate } from '$utils/format';
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	export let event: EventItem;
</script>

<article class="surface-card overflow-hidden">
	<ImagePlaceholder
		label={event.imageLabel}
		style={event.imageStyle}
		className="h-48 w-full rounded-none"
	/>
	<div class="p-5">
		<div class="flex flex-wrap items-center gap-2">
			<span class="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
				{event.category}
			</span>
			<span class="text-sm text-ink/55">{formatDisplayDate(event.date)}</span>
		</div>
		<h3 class="mt-4 font-display text-[1.7rem] leading-tight text-ink">{event.title}</h3>
		<p class="mt-2 text-sm font-medium text-ink/60">{event.location} • {event.time}</p>
		<p class="mt-4 text-sm leading-7 text-ink/72">{event.excerpt}</p>
		<a
			href={`/events/${event.slug}`}
			class="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900"
		>
			See details
		</a>
	</div>
</article>
