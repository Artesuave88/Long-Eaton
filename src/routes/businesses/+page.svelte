<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { BusinessCard, CategoryFilter, EmptyState, SearchBar, SectionHeading } from '$components';
	import {
		businessCategories,
		businessBrowseGroups,
		businesses,
		matchesBusinessBrowseGroup
	} from '$data/businesses';
	import { slugMatches } from '$utils/format';

	let query = '';
	let selectedCategory = 'All';
	let previousSearch = '';

	const orderedBusinesses = [...businesses];
	const featuredBusiness = businesses.find((business) => business.featured) ?? businesses[0];

	const getInitialCategory = () => {
		const category = browser ? page.url.searchParams.get('category') : null;
		return category && businessCategories.includes(category) ? category : 'All';
	};

	$: selectedGroup = browser ? page.url.searchParams.get('group') : null;
	$: selectedLetter = browser ? page.url.searchParams.get('letter')?.toUpperCase() ?? '' : '';
	$: selectedBrowseGroupLabel =
		businessBrowseGroups.find((group) => group.slug === selectedGroup)?.label ?? '';
	$: currentSearch = browser ? page.url.search : '';
	$: if (currentSearch !== previousSearch) {
		selectedCategory = getInitialCategory();
		previousSearch = currentSearch;
	}

	$: filteredBusinesses = orderedBusinesses.filter((business) => {
		const matchesQuery =
			slugMatches(business.name, query) ||
			slugMatches(business.description, query) ||
			slugMatches(business.location, query);
		const matchesCategory =
			selectedCategory === 'All' || business.category === selectedCategory;
		const matchesGroup = matchesBusinessBrowseGroup(business, selectedGroup);
		const matchesLetter =
			!selectedLetter || business.name.trim().toUpperCase().startsWith(selectedLetter);

		return matchesQuery && matchesCategory && matchesGroup && matchesLetter;
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

		{#if selectedBrowseGroupLabel || selectedLetter}
			<div class="surface-card mb-6 flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5">
				<p class="body-copy-sm">
					{#if selectedBrowseGroupLabel}
						Showing <span class="font-semibold text-brand-text">{selectedBrowseGroupLabel}</span> businesses.
					{/if}
					{#if selectedBrowseGroupLabel && selectedLetter}
						{' '}
					{/if}
					{#if selectedLetter}
						{#if selectedBrowseGroupLabel}
							Also filtered to names starting with
						{:else}
							Showing businesses starting with
						{/if}
						<span class="font-semibold text-brand-text">{selectedLetter}</span>.
					{/if}
				</p>
				<a href="/businesses" class="button-subtle">Clear filters</a>
			</div>
		{/if}

		{#if featuredBusiness}
			<div class="surface-card mb-6 flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5">
				<p class="body-copy-sm">
					Spotlight: <span class="font-semibold text-brand-text">{featuredBusiness.name}</span>.
				</p>
				<a href={`/businesses/${featuredBusiness.slug}`} class="button-subtle">View business</a>
			</div>
		{/if}

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
