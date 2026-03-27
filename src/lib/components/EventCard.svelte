<script lang="ts">
	import type { EventItem } from '$types/content';
	import { formatEventDate } from '$utils/format';
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	export let event: EventItem;
</script>

<article class="surface-card surface-card-hover overflow-hidden">
	{#if event.imageSrc}
		<div class="h-48 w-full overflow-hidden bg-brand-primaryDark/10">
			<img
				src={event.imageSrc}
				alt={event.imageAlt ?? event.title}
				class={`h-full w-full ${event.imageFit === 'contain' ? 'bg-white p-4 object-contain' : 'object-cover'}`}
			/>
		</div>
	{:else}
		<ImagePlaceholder
			label={event.image?.label ?? event.imageLabel}
			style={event.image?.style ?? event.imageStyle}
			className="h-48 w-full rounded-none"
		/>
	{/if}
	<div class="p-5">
		<div class="flex flex-wrap items-center gap-2">
			<span class="chip">{event.category}</span>
			<span class="text-sm text-brand-muted">{formatEventDate(event)}</span>
		</div>
		<h3 class="mt-4 text-[1.45rem] leading-tight text-brand-text">{event.title}</h3>
		<p class="mt-2 text-sm font-medium text-brand-muted">{event.location} • {event.time}</p>
		{#if event.tags?.length}
			<p class="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">{event.tags.slice(0, 2).join(' • ')}</p>
		{/if}
		<p class="body-copy-sm mt-4">{event.excerpt}</p>
		<a href={`/events/${event.slug}`} class="link-subtle mt-5">See details</a>
	</div>
</article>
