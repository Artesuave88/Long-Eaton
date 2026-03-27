<script lang="ts">
	import '../app.css';
	import { Footer, Header } from '$components';
	import { site } from '$data/site';
</script>

<svelte:head>
	<title>{site.name}</title>
	<meta name="description" content={site.tagline} />
	<meta property="og:title" content={site.name} />
	<meta property="og:description" content={site.tagline} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={site.url} />
</svelte:head>

<div class="min-h-screen bg-transparent">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
