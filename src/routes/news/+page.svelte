<script lang="ts">
	import { EmptyState, SectionHeading } from '$components';
	import { newsItems } from '$data/news';
	import { formatDisplayDate } from '$utils/format';
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
		{#if newsItems.length}
			<div class="mx-auto grid max-w-5xl gap-8">
				{#each newsItems as item}
					<article id={item.id} class="surface-card scroll-mt-32 overflow-hidden">
						{#if item.imageSrc}
							<div class={`h-52 w-full overflow-hidden sm:h-64 ${item.imageStyle}`}>
								<img
									src={item.imageSrc}
									alt={item.imageAlt ?? item.title}
									class={`h-full w-full ${item.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
								/>
							</div>
						{/if}
						<div class="p-6 sm:p-8 lg:p-10">
							<p class="eyebrow">{formatDisplayDate(item.date)}</p>
							<h2 class="mt-3 text-3xl leading-tight text-brand-text">{item.title}</h2>
							<p class="mt-4 text-lg leading-relaxed text-brand-muted">{item.excerpt}</p>
							<div class="body-copy-sm mt-6 space-y-4">
								{#each item.content as paragraph}
									<p>{paragraph}</p>
								{/each}
							</div>
							{#if item.sourceUrl}
								<a
									href={item.sourceUrl}
									target="_blank"
									rel="noreferrer"
									class="link-subtle mt-6"
								>
									{item.sourceLabel ?? 'Read the original update'}
								</a>
							{/if}
						</div>
					</article>
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
