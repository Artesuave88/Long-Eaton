<script lang="ts">
	import { EmptyState, NewsCard, SectionHeading } from '$components';
	import { newsItems } from '$data/news';
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
			copy="News, notices and useful updates from around Long Eaton."
			headingLevel="h1"
		/>
		<div class="mb-8 max-w-3xl rounded-2xl border border-brand-border bg-brand-section p-5 text-sm leading-7 text-brand-muted">
			<p><strong class="text-brand-text">How these updates are produced:</strong> the Love Long Eaton editorial team summarises information relevant to the town and identifies the original source where available. Facts can change after publication, so use the source link for the latest official position. <a href="/editorial-policy" class="link-subtle">Read our editorial policy</a>.</p>
		</div>
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
