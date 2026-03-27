<script lang="ts">
	import type { BusinessItem } from '$types/content';
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	export let business: BusinessItem;
</script>

<article class={`surface-card surface-card-hover overflow-hidden ${business.isReal ? 'ring-1 ring-brand-accent/25' : ''}`}>
	{#if business.imageSrc}
		<div class="flex h-48 w-full items-center justify-center bg-brand-primaryDark p-6">
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
			<p class="eyebrow">{business.category}</p>
			{#if business.isReal}
				<span class="chip">Featured listing</span>
			{/if}
		</div>
		<h3 class="mt-3 text-[1.45rem] leading-tight text-brand-text">{business.name}</h3>
		<p class="mt-2 text-sm font-medium text-brand-muted">{business.location}</p>
		<p class="body-copy-sm mt-4">{business.description}</p>
		<div class="mt-5 flex flex-wrap gap-4">
			<a href={`/businesses/${business.slug}`} class="link-subtle">View details</a>
			{#if business.website}
				<a
					href={business.website}
					target="_blank"
					rel="noreferrer"
					class="inline-flex items-center text-sm font-semibold text-brand-text hover:text-brand-accent"
				>
					Visit website
				</a>
			{/if}
		</div>
	</div>
</article>
