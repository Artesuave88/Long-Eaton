<script lang="ts">
	import { EmptyState, NewsCard, SectionHeading } from '$components';
	import { getNewsSections } from '$data/news';
	const { archived } = getNewsSections();
</script>

<svelte:head>
	<title>News Archive | Love Long Eaton</title>
	<meta name="description" content="Browse older news stories and local updates from Love Long Eaton." />
</svelte:head>

<section class="section-surface">
	<div class="container-shell section-space">
		<a href="/news" class="button-subtle">Back to latest news</a>
		<div class="mt-8">
			<SectionHeading eyebrow="News" title="News archive" headingLevel="h1" />
		</div>
		{#if archived.length}
			<div class="section-grid mt-8">
				{#each archived as item}
					<NewsCard {item} />
				{/each}
			</div>
		{:else}
			<EmptyState title="No archived stories yet" message="Older stories will appear here as new updates are added." />
		{/if}
	</div>
</section>
