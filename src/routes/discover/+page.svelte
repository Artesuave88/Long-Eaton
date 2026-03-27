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

<section class="section-surface">
	<div class="container-shell section-space">
		<SectionHeading
			eyebrow="Discover"
			title="A few easy ways into Long Eaton"
			copy="Food, shops, walks and useful local suggestions gathered in one place."
		/>

		{#if discoverCategories.length}
			<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
				{#each discoverCategories as category}
					<DiscoverCard {category} />
				{/each}
			</div>
		{:else}
			<EmptyState
				title="No guides matched this section"
				message="Explore the events and businesses pages for current town highlights and local recommendations."
			/>
		{/if}
	</div>
</section>

<section class="section-muted">
	<div class="container-shell section-space">
		<div class="grid gap-6 lg:grid-cols-3">
			<div class="surface-card p-7">
				<h2 class="text-2xl text-brand-text">Start with the town centre</h2>
				<p class="body-copy-sm mt-4">
					Use Discover to pick up ideas for food, independent shops, waterside walks and easy stops around town.
				</p>
			</div>
			<div class="surface-card p-7">
				<h2 class="text-2xl text-brand-text">Built for everyday plans</h2>
				<p class="body-copy-sm mt-4">
					Short local guides help with afternoons out, weekend browsing and familiar routes through Long Eaton.
				</p>
			</div>
			<div class="surface-card p-7">
				<h2 class="text-2xl text-brand-text">Linked to the wider guide</h2>
				<p class="body-copy-sm mt-4">
					Move between places to visit, events to catch and businesses to know without losing the thread of the day.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section-surface">
	<div class="container-shell section-space">
		<CTASection
			title="Want to suggest a local route or recommendation?"
			copy="If there's a walk, shop trail or useful local tip we should add, send it over."
			primaryHref="/contact"
			primaryLabel="Suggest an idea"
			secondaryHref="/businesses"
			secondaryLabel="Browse businesses"
		/>
	</div>
</section>
