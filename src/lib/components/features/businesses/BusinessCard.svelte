<script lang="ts">
	import type { BusinessItem } from '$types/content';
	import ImagePlaceholder from '../../ui/ImagePlaceholder.svelte';

	export let business: BusinessItem;
</script>

<article
	class={`surface-card surface-card-hover group relative overflow-hidden ${business.isReal ? 'ring-1 ring-brand-accent/20' : ''}`}
>
	<a
		href={`/businesses/${business.slug}`}
		class="absolute inset-0 z-10"
		aria-label={`View ${business.name}`}
	></a>

	{#if business.imageSrc}
		<div
			class="relative flex h-56 w-full items-center justify-center overflow-hidden border-b border-brand-border bg-brand-surface p-6"
		>
			<img
				src={business.imageSrc}
				alt={business.imageAlt ?? business.name}
				loading="lazy"
				decoding="async"
				class="h-full w-full object-contain object-center transition duration-200 group-hover:scale-[1.02]"
			/>
		</div>
	{:else}
		<ImagePlaceholder
			label={business.imageLabel}
			style={business.imageStyle}
			className="h-56 w-full rounded-none border-b border-brand-border"
		/>
	{/if}

	<div class="card-content relative">
		<p class="eyebrow">{business.category}</p>

		<h3 class="mt-3 text-[1.45rem] leading-tight text-brand-text transition duration-200 group-hover:text-brand-accent">
			{business.name}
		</h3>
		<p class="mt-2 text-sm font-medium text-brand-muted">{business.location}</p>
		<p class="body-copy-sm mt-4">{business.description}</p>

		<div class="mt-5 flex flex-wrap items-center justify-between gap-4">
			<span class="link-subtle">View details</span>
			{#if business.website}
				<a
					href={business.website}
					target="_blank"
					rel="noreferrer"
					class="relative z-20 inline-flex items-center text-sm font-semibold text-brand-text hover:text-brand-accent"
				>
					Visit website
				</a>
			{/if}
		</div>
	</div>
</article>
