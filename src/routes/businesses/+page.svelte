<script lang="ts">
	import { BusinessCard, CategoryFilter, EmptyState, SearchBar, SectionHeading } from '$components';
	import { businessCategories, businesses } from '$data/businesses';
	import { slugMatches } from '$utils/format';

	let query = '';
	let selectedCategory = 'All';

	$: filteredBusinesses = businesses.filter((business) => {
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
		content="Find independent businesses, local services and food spots across Long Eaton."
	/>
</svelte:head>

<section class="container-shell section-space">
	<SectionHeading
		eyebrow="Businesses"
		title="Find the businesses that give Long Eaton its local character"
		copy="Browse a curated starter set of independents, services and everyday favourites."
	/>

	<div class="surface-card mb-8 grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">
		<SearchBar bind:value={query} placeholder="Search businesses, categories or streets" />
		<CategoryFilter categories={businessCategories} bind:selected={selectedCategory} />
	</div>

	{#if filteredBusinesses.length}
		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each filteredBusinesses as business}
				<BusinessCard {business} />
			{/each}
		</div>
	{:else}
		<EmptyState
			title="No businesses matched your search"
			message="Try a different search term or clear the category filter to browse more local favourites."
		/>
	{/if}
</section>
