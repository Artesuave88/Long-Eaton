<script lang="ts">
	import { ImagePlaceholder, NewsCard } from '$components';
	import { site } from '$data/site';
	import { formatDisplayDate } from '$utils/format';
	import { breadcrumbJsonLd } from '$utils/seo';
	import { isNewsExpired } from '$data/news';
	import VisitDetails from '$components/ui/VisitDetails.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const articleUrl = `${site.url}/news/${data.article.id}`;
	const breadcrumbs = breadcrumbJsonLd([
		{ name: 'Home', path: '/' },
		{ name: 'News', path: '/news' },
		{ name: data.article.title, path: `/news/${data.article.id}` }
	]);
	const structuredData = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'NewsArticle',
		headline: data.article.title,
		description: data.article.excerpt,
		datePublished: data.article.date,
		dateModified: data.article.checkedOn ?? data.article.date,
		url: articleUrl,
		mainEntityOfPage: articleUrl,
		author: { '@type': 'Organization', name: 'Love Long Eaton' },
		publisher: { '@type': 'Organization', name: site.name, url: site.url },
		...(data.article.imageSrc
			? { image: data.article.imageSrc.startsWith('http') ? data.article.imageSrc : `${site.url}${data.article.imageSrc}` }
			: {})
	}).replace(/</g, '\\u003c');
</script>

<svelte:head>
	<title>{data.article.title} | Love Long Eaton</title>
	<meta name="description" content={data.article.excerpt} />
	<meta property="og:title" content={data.article.title} />
	<meta property="og:description" content={data.article.excerpt} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={data.article.date} />
	<meta property="og:image:alt" content={data.article.imageAlt ?? data.article.title} />
	<meta name="twitter:title" content={data.article.title} />
	<meta name="twitter:description" content={data.article.excerpt} />
	<meta name="twitter:image:alt" content={data.article.imageAlt ?? data.article.title} />
	{@html `<script type="application/ld+json">${structuredData}</script>`}
	{@html `<script type="application/ld+json">${breadcrumbs}</script>`}
</svelte:head>

<main class="section-surface">
	<article class="container-shell section-space">
		<a href="/news" class="button-subtle">Back to news</a>

		<header class="mt-8 max-w-4xl">
			<p class="eyebrow">Published {formatDisplayDate(data.article.date)} · Love Long Eaton editorial team</p>
			<h1 class="mt-4 text-brand-text">{data.article.title}</h1>
			<p class="mt-5 max-w-3xl text-lg leading-8 text-brand-muted">{data.article.excerpt}</p>
		</header>
		{#if isNewsExpired(data.article)}
			<div class="mt-7 max-w-3xl rounded-2xl border border-brand-border bg-brand-section p-5 text-brand-muted">
				<p class="font-semibold text-brand-text">This offer has ended</p>
				<p class="mt-2 leading-7">It ended on {formatDisplayDate(data.article.validUntil!)}. This article is kept as a dated record; it does not describe a current offer.</p>
			</div>
		{/if}

		<div class="mt-9 max-w-5xl overflow-hidden rounded-2xl">
			{#if data.article.imageSrc}
				<div class={`h-64 w-full overflow-hidden sm:h-80 lg:h-[28rem] ${data.article.imageStyle}`}>
					<img
						src={data.article.imageSrc}
						alt={data.article.imageAlt ?? data.article.title}
						style:object-position={data.article.imagePosition ?? 'center'}
						class={`h-full w-full ${data.article.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
					/>
				</div>
			{:else}
				<ImagePlaceholder label={data.article.imageLabel} style={data.article.imageStyle} className="h-64 w-full rounded-none sm:h-80" />
			{/if}
		</div>

		{#if data.article.imageCredit}
			<p class="mt-3 text-xs leading-6 text-brand-muted">Image: {data.article.imageCredit}</p>
		{/if}

		<div class="body-copy mt-9 max-w-3xl space-y-5">
			{#each data.article.content as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>

		<div class="max-w-3xl"><VisitDetails sections={data.article.planning} /></div>

		{#if data.relatedNews.length}
			<section class="mt-14 border-t border-brand-border pt-10" aria-labelledby="more-news-heading">
				<h2 id="more-news-heading" class="text-3xl text-brand-text">More local news</h2>
				<div class="section-grid mt-7">
					{#each data.relatedNews as item}<NewsCard {item} />{/each}
				</div>
			</section>
		{/if}
	</article>
</main>
