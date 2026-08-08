<script lang="ts">
	import { dev } from '$app/environment';
	import '../app.css';
	import { Footer, Header } from '$components';
	import { site } from '$data/site';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	import { websiteJsonLd } from '$utils/seo';

	export let data: LayoutData;
	$: canonicalUrl = new URL($page.url.pathname, site.url).href;
	$: isIndexableResponse = $page.status >= 200 && $page.status < 400 && $page.url.pathname !== '/donate/thank-you';
	const pagesWithCompleteSeo = new Set([
		'/events/long-eaton-junior-parkrun',
		'/businesses/dudl-coffee',
		'/guides/independent-shops-in-long-eaton',
		'/guides/best-cafes-in-long-eaton',
		'/events/duchess-theatre-spamalot'
	]);
	$: useDefaultSeo = !pagesWithCompleteSeo.has($page.url.pathname);
	const globalStructuredData = websiteJsonLd();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>{site.name}</title>
	{#if useDefaultSeo}<meta name="description" content={site.tagline} />{/if}
	<meta
		name="robots"
		content={isIndexableResponse
			? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
			: 'noindex,follow'}
	/>
	{#if useDefaultSeo}
		<meta property="og:title" content={site.name} />
		<meta property="og:description" content={site.tagline} />
		<meta property="og:type" content="website" />
	{/if}
	{#if isIndexableResponse}<meta property="og:url" content={canonicalUrl} />{/if}
	<meta property="og:image" content={`${site.url}/le-logo.png`} />
	<meta name="twitter:card" content="summary_large_image" />
	{#if useDefaultSeo}
		<meta name="twitter:title" content={site.name} />
		<meta name="twitter:description" content={site.tagline} />
	{/if}
	<meta name="twitter:image" content={`${site.url}/le-logo.png`} />
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
