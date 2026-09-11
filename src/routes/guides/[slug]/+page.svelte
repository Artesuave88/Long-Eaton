<script lang="ts">
	import VisitDetails from '$components/ui/VisitDetails.svelte';
	import { EventCard, NewsletterSignup, SectionHeading } from '$components';
	import type { PageData } from './$types';
	import type { ActionData } from './$types';
	import { breadcrumbJsonLd, guideJsonLd } from '$utils/seo';
	export let data: PageData;
	export let form: ActionData;
	 $: breadcrumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides' }, { name: data.guide.title, path: `/guides/${data.guide.slug}` }]);
	 $: structuredData = guideJsonLd(data.guide);
</script>
<svelte:head><title>{data.guide.seoTitle ?? `${data.guide.title} | Love Long Eaton`}</title><meta name="description" content={data.guide.description} /><meta property="og:title" content={data.guide.seoTitle ?? `${data.guide.title} | Love Long Eaton`} /><meta property="og:description" content={data.guide.description} /><meta property="og:type" content="article" /><meta name="twitter:title" content={data.guide.seoTitle ?? `${data.guide.title} | Love Long Eaton`} /><meta name="twitter:description" content={data.guide.description} />{@html `<script type="application/ld+json">${structuredData}</script>`}{@html `<script type="application/ld+json">${breadcrumbs}</script>`}</svelte:head>
<article class="section-surface"><div class="container-shell section-space">
	<a href="/guides" class="button-subtle">Back to guides</a>
	<div class="mt-8"><SectionHeading eyebrow={data.guide.eyebrow} title={data.guide.heading ?? data.guide.title} headingLevel="h1" /></div>
	<div class="mt-7 max-w-3xl space-y-5 text-base leading-8 text-brand-muted">{#each data.guide.intro as paragraph}<p>{paragraph}</p>{/each}</div>
	<div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-brand-muted">
		<span>By the Love Long Eaton editorial team</span>
		{#if "lastUpdated" in data.guide && data.guide.lastUpdated}<span>Updated: {data.guide.lastUpdated}</span>{/if}
		<a href="/editorial-policy" class="underline underline-offset-4 hover:text-brand-accent">How we check our guides</a>
	</div>
	{#if data.guide.comparison}
    <section class="mt-10" aria-labelledby="comparison-heading">
      <h2 id="comparison-heading" class="text-2xl text-brand-text">{data.guide.comparison.caption}</h2>
      <!-- The scroll container is focusable so keyboard users can read every column. -->
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <div class="mt-5 overflow-x-auto rounded-xl border border-brand-border focus-visible:outline focus-visible:outline-brand-primary" role="region" aria-label="Comparison table; scroll horizontally on small screens" tabindex="0">
        <table class="w-full min-w-[38rem] border-collapse text-left text-sm leading-7">
          <caption class="sr-only">{data.guide.comparison.caption}</caption>
          <thead class="bg-brand-section text-brand-text"><tr><th scope="col" class="p-4">Place or activity</th><th scope="col" class="p-4">Works well for</th><th scope="col" class="p-4">Plan ahead</th></tr></thead>
          <tbody>{#each data.guide.comparison.rows as row}<tr class="border-t border-brand-border"><th scope="row" class="p-4 align-top"><a href={row.href} class="text-brand-accent underline underline-offset-4">{row.name}</a></th><td class="p-4 align-top text-brand-muted">{row.suits}</td><td class="p-4 align-top text-brand-muted">{row.check}</td></tr>{/each}</tbody>
        </table>
      </div>
    </section>
  {/if}
  <div class="max-w-4xl"><VisitDetails sections={data.guide.planning} sources={data.guide.sources} /></div>
  <section class="mt-10" aria-label="Places and activities in this guide">
    <div class="section-grid">
      {#each data.guide.sections as section}
        <article class="surface-card p-6">
          {#if section.group}<p class="eyebrow">{section.group}</p>{/if}
          <h2 class="text-2xl text-brand-text">{section.title}</h2>
          <p class="body-copy-sm mt-4">{section.copy}</p>
          <a href={section.href} class="link-subtle mt-5">{section.linkLabel}</a>
        </article>
      {/each}
    </div>
  </section>
	<NewsletterSignup {form} source="guide" embedded />
	{#if data.events.length}<section class="mt-12"><h2 class="text-3xl text-brand-text">{data.guide.slug === "childrens-activities-in-long-eaton" ? "Upcoming and limited-date children’s activities" : "Related upcoming events"}</h2><p class="body-copy-sm mt-3">{data.guide.slug === "childrens-activities-in-long-eaton" ? "Confirmed one-off or limited-date listings, kept separate from the recurring activities above. Check each page for the latest details." : "Confirmed listings currently in the calendar. Check each page for the latest details."}</p><div class="section-grid mt-7">{#each data.events as event}<EventCard {event} />{/each}</div><div class="mt-7 flex flex-wrap gap-3"><a href="/events" class="button-secondary">View all events</a><a href="/whats-on-this-weekend" class="button-secondary">See what’s on this weekend</a></div></section>{/if}
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
	<section class="mt-12 rounded-2xl bg-brand-primaryDark px-6 py-8 text-white sm:px-8" aria-labelledby="keep-guide-current-heading">
		<h2 id="keep-guide-current-heading" class="text-2xl text-white">Help keep this guide useful</h2>
		<p class="mt-3 max-w-3xl leading-7 text-white/80">Send us a missing place, activity or correction.</p>
		<div class="mt-6 flex flex-wrap gap-3">
			<a href="/contact" class="button-primary bg-white text-brand-primaryDark hover:bg-brand-section hover:text-brand-primaryDark">Submit a place or correction</a>
			<a href="/whats-on-this-weekend" class="button-primary border border-white/30 bg-white/10 text-white hover:bg-white/20">See what’s on this weekend</a>
		</div>
	</section>
</div></article>
