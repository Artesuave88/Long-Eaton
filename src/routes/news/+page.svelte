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

<section class="container-shell section-space">
	<SectionHeading
		eyebrow="News"
		title="Local updates and short reads"
		copy="Only published local updates appear here."
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
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{formatDisplayDate(item.date)}</p>
						<h2 class="mt-3 font-display text-2xl text-ink">{item.title}</h2>
						<div class="mt-4 space-y-4 text-sm leading-7 text-ink/72">
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
			title="No news has been published yet"
			message="This page will be used for real local updates once there is something useful to post."
		/>
	{/if}
</section>
