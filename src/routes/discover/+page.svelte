<script lang="ts">
	import { CTASection, DiscoverCard, SectionHeading } from '$components';
	import { discoverCategories } from '$data/discover';
</script>

<svelte:head>
	<title>Discover | Love Long Eaton</title>
	<meta
		name="description"
		content="Explore food, shops, walks and everyday places around Long Eaton."
	/>
</svelte:head>

<section class="container-shell section-space">
	<SectionHeading
		eyebrow="Discover"
		title="A few easy ways into Long Eaton"
		copy="Start with food, shops, walks or local events."
	/>

	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
		{#each discoverCategories as category}
			<DiscoverCard {category} />
		{/each}
	</div>
</section>

<section class="container-shell section-space pt-0">
	<div class="grid gap-6 lg:grid-cols-3">
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">Start in the centre</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				The town centre is easy to cover on foot, so it works well for a short browse, a coffee stop and a couple of errands in one go.
			</p>
		</div>
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">Mix local with outdoors</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				One of the nicer things about Long Eaton is how easy it is to combine shops and cafes with the canal or West Park.
			</p>
		</div>
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">Check back regularly</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				The best reasons to come back tend to be simple: a market weekend, a new menu or an event you nearly missed last time.
			</p>
		</div>
	</div>
</section>

<section class="container-shell section-space pt-0">
	<CTASection
		title="Want to suggest a local route or recommendation?"
		copy="If there's a walk, shop trail or useful local tip we should add, send it over."
		primaryHref="/contact"
		primaryLabel="Suggest an idea"
		secondaryHref="/businesses"
		secondaryLabel="Browse businesses"
	/>
</section>
