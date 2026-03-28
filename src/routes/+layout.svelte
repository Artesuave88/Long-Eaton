<script lang="ts">
	import { dev } from '$app/environment';
	import '../app.css';
	import { Footer, Header } from '$components';
	import { site } from '$data/site';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>{site.name}</title>
	<meta name="description" content={site.tagline} />
	<meta property="og:title" content={site.name} />
	<meta property="og:description" content={site.tagline} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content={`${site.url}/le-logo.png`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.name} />
	<meta name="twitter:description" content={site.tagline} />
	<meta name="twitter:image" content={`${site.url}/le-logo.png`} />
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/favicon.png" />
</svelte:head>

<div class="min-h-screen bg-brand-background text-brand-text">
	<Header />
	<main class="mx-auto w-full">
		<slot />
	</main>
	<Footer />
</div>
