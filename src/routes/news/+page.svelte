<script lang="ts">
	import { EmptyState, NewsCard, SectionHeading } from '$components';
	import { getCurrentNews } from '$data/news';
	const newsItems = getCurrentNews();
</script>

<svelte:head>
	<title>Long Eaton News & Local Updates | Love Long Eaton</title>
	<meta
		name="description"
		content="Read local updates, seasonal notes and business news from around Long Eaton."
	/>
</svelte:head>

<section class="section-surface">
	<div class="container-shell section-space">
		<SectionHeading
			eyebrow="News"
			title="Local updates and short reads"
			headingLevel="h1"
		/>
		{#if newsItems.length}
			<div class="section-grid mt-8">
				{#each newsItems as item}
					<NewsCard {item} />
				{/each}
			</div>
		{:else}
			<EmptyState
				title="No updates are listed right now"
				message="Check back after the next round of town news, event notices or business updates."
			/>
		{/if}
	</div>
</section>
