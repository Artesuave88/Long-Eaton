<script lang="ts">
	import { EmptyState, NewsCard, SectionHeading } from '$components';
	import { newsItems } from '$data/news';
	import { formatDisplayDate } from '$utils/format';
</script>

<svelte:head>
	<title>News | Love Long Eaton</title>
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
		/>
		{#if newsItems.length}
			<div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
				<div class="grid gap-6">
					{#each newsItems as item}
						<NewsCard {item} />
					{/each}
				</div>

				<div class="space-y-6">
					{#each newsItems as item}
						<article class="surface-card p-6">
							<p class="eyebrow">{formatDisplayDate(item.date)}</p>
							<h2 class="mt-3 text-2xl text-brand-text">{item.title}</h2>
							<div class="body-copy-sm mt-4 space-y-4">
								{#each item.content as paragraph}
									<p>{paragraph}</p>
								{/each}
							</div>
						</article>
					{/each}
				</div>
			</div>
		{:else}
			<EmptyState
				title="No updates are listed right now"
				message="Check back after the next round of town news, event notices or business updates."
			/>
		{/if}
	</div>
</section>
