<script lang="ts">
	import type { NewsItem } from '$types/content';
	import { formatDisplayDate } from '$utils/format';
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	export let item: NewsItem;
</script>

<article class="surface-card overflow-hidden">
	<ImagePlaceholder label={item.imageLabel} style={item.imageStyle} className="h-44 w-full rounded-none" />
	<div class="p-5">
		<p class="text-sm text-ink/55">{formatDisplayDate(item.date)}</p>
		<h3 class="mt-3 font-display text-2xl text-ink">{item.title}</h3>
		<p class="mt-4 text-sm leading-7 text-ink/72">{item.excerpt}</p>
		<a href="/news" class="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900">
			Read more
		</a>
	</div>
</article>
