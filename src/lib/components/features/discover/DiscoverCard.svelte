<script lang="ts">
	import type { DiscoverCategory } from '$types/content';
	import ImagePlaceholder from '../../ui/ImagePlaceholder.svelte';

	export let category: DiscoverCategory;
</script>

<article class="surface-card surface-card-hover overflow-hidden p-4">
	<ImagePlaceholder label={category.imageLabel} style={category.imageStyle} className="h-44 w-full" />
	<div class="px-1 pb-2 pt-5">
		<h3 class="text-[1.45rem] leading-tight text-brand-text">{category.title}</h3>
		<p class="body-copy-sm mt-3">{category.description}</p>
		<div class="mt-4 flex flex-wrap gap-2">
			{#each category.highlights as highlight}
				<span class="chip">{highlight}</span>
			{/each}
		</div>
		<a href={category.link} class="link-subtle mt-5">See more</a>
	</div>
</article>
