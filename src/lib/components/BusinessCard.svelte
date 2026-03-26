<script lang="ts">
	import type { BusinessItem } from '$types/content';
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	export let business: BusinessItem;
</script>

<article class="surface-card overflow-hidden">
	<ImagePlaceholder
		label={business.imageLabel}
		style={business.imageStyle}
		className="h-48 w-full rounded-none"
	/>
	<div class="p-5">
		<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{business.category}</p>
		<h3 class="mt-3 font-display text-2xl text-ink">{business.name}</h3>
		<p class="mt-2 text-sm font-medium text-ink/55">{business.location}</p>
		<p class="mt-4 text-sm leading-7 text-ink/72">{business.description}</p>
		<a
			href={`/businesses/${business.slug}`}
			class="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900"
		>
			View business
		</a>
	</div>
</article>
