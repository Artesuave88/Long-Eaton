<script lang="ts">
	import type { EventItem } from '$types/content';
	import { formatEventDate, formatRecurringLabel } from '$utils/format';
	import { isRepeatedEventText } from '$data/listings';
	import ImagePlaceholder from '../../ui/ImagePlaceholder.svelte';

	export let event: EventItem;
</script>

<article class="surface-card surface-card-hover group relative overflow-hidden">
	<a
		href={`/events/${event.slug}`}
		class="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
		aria-label={`View ${event.title}`}
	></a>

	{#if event.imageSrc}
		<div class="h-48 w-full overflow-hidden bg-brand-primaryDark/10">
			<img
				src={event.imageSrc}
				alt={event.imageAlt ?? event.title}
				loading="lazy"
				decoding="async"
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
	<div class="card-content">
		<p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">{event.category}</p>
		{#if event.ongoing || event.date || event.dateLabel}
			<p class="mt-2 text-sm text-brand-muted">
				{event.ongoing ? formatRecurringLabel(event) : formatEventDate(event)}
				{#if event.price}
					• {event.price}
				{/if}
			</p>
		{/if}
		<h3 class="mt-4 text-[1.45rem] leading-tight text-brand-text transition duration-200 group-hover:text-brand-accent">{event.title}</h3>
		{#if event.time || event.location}
			<p class="mt-2 text-sm font-medium text-brand-muted">
				{#if event.time}{event.time}{/if}
				{#if event.time && event.location} • {/if}
				{#if event.location}{event.location}{/if}
			</p>
		{/if}
		{#if !isRepeatedEventText(event.excerpt, event.title)}
			<p class="body-copy-sm mt-4">{event.excerpt}</p>
		{/if}
		<span class="link-subtle mt-5">See details</span>
	</div>
</article>
