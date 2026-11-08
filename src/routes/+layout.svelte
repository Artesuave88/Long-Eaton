<script lang="ts">
	import { dev } from '$app/environment';
	import '../app.css';
	import { Footer, Header } from '$components';
	import { site } from '$data/site';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	import type { EventItem } from '$types/content';
	import { websiteJsonLd } from '$utils/seo';

	export let data: LayoutData;
	$: canonicalUrl = new URL($page.url.pathname, site.url).href;
	$: shareImage = $page.status >= 400 ? null : (
		$page.data.event ?? $page.data.article ?? $page.data.business ?? $page.data.guide ??
		($page.url.pathname === '/whats-on-this-weekend' ? $page.data.events?.find((event: EventItem) => event.imageSrc) : null) ??
		$page.data.pageImage
	);
	$: shareImageUrl = new URL(shareImage?.imageSrc || '/le-logo.png', site.url).href;
	$: shareImageAlt = shareImage?.imageAlt || site.name;
	const intentionallyNoindex = new Set(['/donate/thank-you', '/jobs']);
	$: isIndexableResponse =
		$page.status >= 200 && $page.status < 400 && !intentionallyNoindex.has($page.url.pathname);
	const globalStructuredData = websiteJsonLd();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<meta
		name="robots"
		content={isIndexableResponse
			? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
			: 'noindex,follow'}
	/>
	{#if isIndexableResponse}<meta property="og:url" content={canonicalUrl} />{/if}
	<meta property="og:image" content={shareImageUrl} />
	<meta property="og:image:alt" content={shareImageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={shareImageUrl} />
	<meta name="twitter:image:alt" content={shareImageAlt} />
	<meta name="theme-color" content="#0124be" />
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/favicon.png" />
	{#if isIndexableResponse}
		<link rel="canonical" href={canonicalUrl} />
		<link rel="alternate" hreflang="en-GB" href={canonicalUrl} />
		<link rel="alternate" hreflang="x-default" href={canonicalUrl} />
	{/if}
	{@html `<script type="application/ld+json">${globalStructuredData}</script>`}
	{#if data.googleSiteVerification}
		<meta name="google-site-verification" content={data.googleSiteVerification} />
	{/if}
</svelte:head>

<div class="min-h-screen bg-brand-background text-brand-text">
	<Header />
	<main class="mx-auto w-full">
		<slot />
	</main>
	<Footer />
</div>
