<script lang="ts">
	import { EventCard, SectionHeading } from '$components';
	import type { PageData } from './$types';
	export let data: PageData;
</script>
<svelte:head><title>{data.guide.title} | Love Long Eaton</title><meta name="description" content={data.guide.description} /></svelte:head>
<article class="section-surface"><div class="container-shell section-space">
	<a href="/guides" class="button-subtle">Back to guides</a>
	<div class="mt-8"><SectionHeading eyebrow={data.guide.eyebrow} title={data.guide.title} copy={data.guide.description} /></div>
	<div class="mt-7 max-w-3xl space-y-5 text-base leading-8 text-brand-muted">{#each data.guide.intro as paragraph}<p>{paragraph}</p>{/each}</div>
	<div class="mt-10 grid gap-6 lg:grid-cols-3">{#each data.guide.sections as section}<section class="surface-card p-6"><h2 class="text-2xl text-brand-text">{section.title}</h2><p class="body-copy-sm mt-4">{section.copy}</p>{#if section.href}<a href={section.href} class="link-subtle mt-5">{section.linkLabel}</a>{/if}</section>{/each}</div>
	{#if data.events.length}<section class="mt-12"><h2 class="text-3xl text-brand-text">{"season" in data.guide ? "Dated events for the season" : "Related upcoming events"}</h2><p class="body-copy-sm mt-3">Confirmed listings currently in the calendar. Check each page for the latest details.</p><div class="section-grid mt-7">{#each data.events as event}<EventCard {event} />{/each}</div></section>{/if}
	{#if data.relatedGuides.length}
		<section class="mt-12 border-t border-brand-border pt-10" aria-labelledby="related-guides-heading">
			<h2 id="related-guides-heading" class="text-3xl text-brand-text">Related local guides</h2>
			<div class="section-grid mt-7">
				{#each data.relatedGuides as guide}
					<a href={`/guides/${guide.slug}`} class="surface-card surface-card-hover p-6">
						<p class="eyebrow">{guide.eyebrow}</p>
						<h3 class="mt-3 text-2xl text-brand-text">{guide.title}</h3>
						<p class="body-copy-sm mt-4">{guide.description}</p>
						<span class="link-subtle mt-5">Read guide</span>
					</a>
				{/each}
			</div>
		</section>
	{/if}
</div></article>
