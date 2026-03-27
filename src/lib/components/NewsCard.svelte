<script lang="ts">
	import type { NewsItem } from '$types/content';
	import { formatDisplayDate } from '$utils/format';
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	export let item: NewsItem;
</script>

<article class="surface-card surface-card-hover overflow-hidden">
	<ImagePlaceholder label={item.imageLabel} style={item.imageStyle} className="h-44 w-full rounded-none" />
	<div class="p-5">
		<p class="text-sm text-brand-muted">{formatDisplayDate(item.date)}</p>
		<h3 class="mt-3 text-[1.45rem] leading-tight text-brand-text">{item.title}</h3>
		<p class="body-copy-sm mt-4">{item.excerpt}</p>
		<a href="/news" class="link-subtle mt-5">Read update</a>
	</div>
</article>
