<script lang="ts">
	import { EventCard, NewsletterSignup, SectionHeading } from '$components';
	import type { PageData } from './$types';
	import type { ActionData } from './$types';
	import { breadcrumbJsonLd, guideJsonLd } from '$utils/seo';
	export let data: PageData;
	export let form: ActionData;
	const breadcrumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides' }, { name: data.guide.title, path: `/guides/${data.guide.slug}` }]);
	const structuredData = guideJsonLd(data.guide);
</script>
<svelte:head><title>{data.guide.seoTitle ?? `${data.guide.title} | Love Long Eaton`}</title><meta name="description" content={data.guide.description} /><meta property="og:title" content={data.guide.seoTitle ?? `${data.guide.title} | Love Long Eaton`} /><meta property="og:description" content={data.guide.description} /><meta property="og:type" content="article" /><meta name="twitter:title" content={data.guide.seoTitle ?? `${data.guide.title} | Love Long Eaton`} /><meta name="twitter:description" content={data.guide.description} />{@html `<script type="application/ld+json">${structuredData}</script>`}{@html `<script type="application/ld+json">${breadcrumbs}</script>`}</svelte:head>
<article class="section-surface"><div class="container-shell section-space">
	<a href="/guides" class="button-subtle">Back to guides</a>
	<div class="mt-8"><SectionHeading eyebrow={data.guide.eyebrow} title={data.guide.heading ?? data.guide.title} copy={data.guide.description} headingLevel="h1" /></div>
	<div class="mt-7 max-w-3xl space-y-5 text-base leading-8 text-brand-muted">{#each data.guide.intro as paragraph}<p>{paragraph}</p>{/each}</div>
	{#if "season" in data.guide}
		<div class="mt-10 grid gap-6 lg:grid-cols-3">{#each data.guide.sections as section}<section class="surface-card p-6"><h2 class="text-2xl text-brand-text">{section.title}</h2><p class="body-copy-sm mt-4">{section.copy}</p>{#if section.href}<a href={section.href} class="link-subtle mt-5">{section.linkLabel}</a>{/if}</section>{/each}</div>
	{:else}
		<section class="mt-10" aria-labelledby="guide-places-heading">
			<h2 id="guide-places-heading" class="text-3xl text-brand-text">Places in this guide</h2>
			<p class="body-copy-sm mt-3">Compare the options below, then open a listing for its address and official links.</p>
			<div class="section-grid mt-7">
				{#each data.guide.sections as section}
					<article class="surface-card p-6">
						<h3 class="text-2xl text-brand-text">{section.title}</h3>
						<p class="body-copy-sm mt-4">{section.copy}</p>
						<a href={section.href} class="link-subtle mt-5">{section.linkLabel}</a>
					</article>
				{/each}
			</div>
		</section>
	{/if}
	<NewsletterSignup {form} source="guide" embedded />
	{#if data.events.length}<section class="mt-12"><h2 class="text-3xl text-brand-text">{"season" in data.guide ? "Dated events for the season" : "Related upcoming events"}</h2><p class="body-copy-sm mt-3">Confirmed listings currently in the calendar. Check each page for the latest details.</p><div class="section-grid mt-7">{#each data.events as event}<EventCard {event} />{/each}</div><a href="/events" class="button-secondary mt-7">View more events</a></section>{/if}
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
