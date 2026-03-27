<script lang="ts">
	import { CTASection, EmptyState, DiscoverCard, SectionHeading } from '$components';
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
		copy="This section only publishes real local guides and recommendations."
	/>

	{#if discoverCategories.length}
		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
			{#each discoverCategories as category}
				<DiscoverCard {category} />
			{/each}
		</div>
	{:else}
		<EmptyState
			title="No discover guides are live yet"
			message="Routes, recommendations and local round-ups will appear here once they have been properly added."
		/>
	{/if}
</section>

<section class="container-shell section-space pt-0">
	<div class="grid gap-6 lg:grid-cols-3">
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">Use the live sections</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				For now, the live content is in Events and Businesses, starting with Long Eaton Carnival and Long Eaton BJJ.
			</p>
		</div>
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">No padded-out guides</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				This page is being kept clear until there are real routes, round-ups and local recommendations worth publishing.
			</p>
		</div>
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">Check back as it grows</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				New sections can be added back once there is enough proper local information to make them useful.
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
