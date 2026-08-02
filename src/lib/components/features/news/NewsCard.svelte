<script lang="ts">
	import type { NewsItem } from '$types/content';
	import { formatDisplayDate } from '$utils/format';
	import ImagePlaceholder from '../../ui/ImagePlaceholder.svelte';

	export let item: NewsItem;
</script>

<article class="surface-card surface-card-hover overflow-hidden">
	{#if item.imageSrc}
		<div class={`h-56 w-full overflow-hidden ${item.imageStyle}`}>
			<img
				src={item.imageSrc}
				alt={item.imageAlt ?? item.title}
				class={`h-full w-full ${item.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
			/>
		</div>
	{:else}
		<ImagePlaceholder label={item.imageLabel} style={item.imageStyle} className="h-44 w-full rounded-none" />
	{/if}
	<div class="card-content">
		<p class="text-sm text-brand-muted">{formatDisplayDate(item.date)}</p>
		<h3 class="mt-3 text-[1.45rem] leading-tight text-brand-text">{item.title}</h3>
		<p class="body-copy-sm mt-4">{item.excerpt}</p>
		<a href={`/news#${item.id}`} class="link-subtle mt-5">Read update</a>
	</div>
</article>
