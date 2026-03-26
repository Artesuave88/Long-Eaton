<script lang="ts">
	import type { DiscoverCategory } from '$types/content';
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	export let category: DiscoverCategory;
</script>

<article class="surface-card overflow-hidden p-4">
	<ImagePlaceholder label={category.imageLabel} style={category.imageStyle} className="h-44 w-full" />
	<div class="px-1 pb-2 pt-5">
		<h3 class="font-display text-2xl text-ink">{category.title}</h3>
		<p class="mt-3 text-sm leading-7 text-ink/72">{category.description}</p>
		<div class="mt-4 flex flex-wrap gap-2">
			{#each category.highlights as highlight}
				<span class="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-ink/70">{highlight}</span>
			{/each}
		</div>
		<a href={category.link} class="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900">
			Explore
		</a>
	</div>
</article>
