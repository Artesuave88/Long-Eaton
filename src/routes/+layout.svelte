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

<div class="min-h-screen bg-[linear-gradient(180deg,#f7f2ea_0%,#fcfaf5_38%,#f3faf6_100%)]">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
