<script lang="ts">
	import { NewsCard, SectionHeading } from '$components';
	import { newsItems } from '$data/news';
	import { formatDisplayDate } from '$utils/format';
</script>

<svelte:head>
	<title>News | Love Long Eaton</title>
	<meta
		name="description"
		content="Read the latest Long Eaton stories, seasonal updates and featured local offers."
	/>
</svelte:head>

<section class="container-shell section-space">
	<SectionHeading
		eyebrow="News"
		title="Fresh stories and local updates"
		copy="A simple news page for town highlights, offers and community stories."
	/>

	<div class="grid gap-6 lg:grid-cols-3">
		{#each newsItems as item}
			<NewsCard {item} />
		{/each}
	</div>

	<div class="mt-12 grid gap-6 lg:grid-cols-3">
		{#each newsItems as item}
			<article class="surface-card p-6 lg:col-span-1">
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
</section>
