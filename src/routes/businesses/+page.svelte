<script lang="ts">
	import { BusinessCard, CategoryFilter, EmptyState, SearchBar, SectionHeading } from '$components';
	import { businessCategories, businesses } from '$data/businesses';
	import { slugMatches } from '$utils/format';

	let query = '';
	let selectedCategory = 'All';

	const orderedBusinesses = [...businesses];

	$: filteredBusinesses = orderedBusinesses.filter((business) => {
		const matchesQuery =
			slugMatches(business.name, query) ||
			slugMatches(business.description, query) ||
			slugMatches(business.location, query);
		const matchesCategory =
			selectedCategory === 'All' || business.category === selectedCategory;

		return matchesQuery && matchesCategory;
	});
</script>

<svelte:head>
	<title>Businesses | Love Long Eaton</title>
	<meta
		name="description"
		content="Browse businesses, local services and food spots in and around Long Eaton."
	/>
</svelte:head>

<section class="section-surface">
	<div class="container-shell section-space">
		<SectionHeading
			eyebrow="Businesses"
			title="Browse local businesses in Long Eaton"
			copy="Independent businesses, local services and useful town listings in one place."
		/>

		<div class="surface-card mb-6 flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5">
			<p class="body-copy-sm">
				Featured now: <span class="font-semibold text-brand-text">Long Eaton BJJ</span>.
			</p>
			<a href="/businesses/long-eaton-bjj" class="button-subtle">View business</a>
		</div>

		<div class="surface-card mb-8 grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">
			<SearchBar bind:value={query} placeholder="Search businesses, categories or streets" />
			<CategoryFilter categories={businessCategories} bind:selected={selectedCategory} />
		</div>

		{#if filteredBusinesses.length}
			<div class="section-grid">
				{#each filteredBusinesses as business}
					<BusinessCard {business} />
				{/each}
			</div>
		{:else}
			<EmptyState
				title="No businesses matched your search"
				message="Try a different search term or clear the category filter to browse the current listings."
			/>
		{/if}
	</div>
</section>
