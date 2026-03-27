<script lang="ts">
	import type { BusinessItem } from '$types/content';
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	export let business: BusinessItem;
</script>

<article class={`surface-card overflow-hidden ${business.isReal ? 'ring-1 ring-brand-300' : ''}`}>
	{#if business.imageSrc}
		<div class="flex h-48 w-full items-center justify-center bg-[#0b0b0b] p-6">
			<img
				src={business.imageSrc}
				alt={business.imageAlt ?? business.name}
				class="max-h-full max-w-full object-contain"
			/>
		</div>
	{:else}
		<ImagePlaceholder
			label={business.imageLabel}
			style={business.imageStyle}
			className="h-48 w-full rounded-none"
		/>
	{/if}
	<div class="p-5">
		<div class="flex flex-wrap items-center gap-2">
			<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{business.category}</p>
			{#if business.isReal}
				<span class="chip">
					Featured local business
				</span>
			{/if}
		</div>
		<h3 class="mt-3 font-display text-[1.7rem] leading-tight text-ink">{business.name}</h3>
		<p class="mt-2 text-sm font-medium text-ink/55">{business.location}</p>
		<p class="mt-4 text-sm leading-7 text-ink/72">{business.description}</p>
		<div class="mt-5 flex flex-wrap gap-4">
			<a
				href={`/businesses/${business.slug}`}
				class="inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900"
			>
				View details
			</a>
			{#if business.website}
				<a
					href={business.website}
					target="_blank"
					rel="noreferrer"
					class="inline-flex items-center text-sm font-semibold text-ink/65 hover:text-ink"
				>
					Visit website
				</a>
			{/if}
		</div>
	</div>
</article>
