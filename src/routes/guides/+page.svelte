<script lang="ts">
	import { SectionHeading } from '$components';
	import { seasonalGuides } from '$data/guides';
</script>
<svelte:head><title>Seasonal guides to Long Eaton | Love Long Eaton</title><meta name="description" content="Practical seasonal guides to events, walks and things to do in Long Eaton." /></svelte:head>
<section class="section-surface"><div class="container-shell section-space">
	<SectionHeading eyebrow="Local guides" title="Explore Long Eaton through the seasons" copy="Useful starting points for local events, outdoor time and flexible days out throughout the year." />
	<div class="section-grid mt-8">{#each seasonalGuides as guide}<a href={`/guides/${guide.slug}`} class="surface-card surface-card-hover p-6"><p class="eyebrow">{guide.eyebrow}</p><h2 class="mt-3 text-2xl text-brand-text">{guide.title}</h2><p class="body-copy-sm mt-4">{guide.description}</p><span class="link-subtle mt-5">Read the guide</span></a>{/each}</div>
</div></section>
