<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { BusinessCard, EmptyState, SearchBar, SectionHeading } from '$components';
	import { businessCategories, businessBrowseGroups, businesses } from '$data/businesses';
	import { filterBusinesses } from '$data/listings';

	let query = '';
	let selectedCategory = 'All';
	let previousSearch = '';

	const orderedBusinesses = [...businesses];

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

	$: filteredBusinesses = filterBusinesses(orderedBusinesses, {
		query,
		category: selectedCategory,
		group: selectedGroup,
		letter: selectedLetter
	});
</script>

<svelte:head>
	<title>Long Eaton Business Directory | Shops, Food & Services</title>
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
			headingLevel="h1"
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
		<div class="surface-card mb-8 bg-brand-section/60 p-5 sm:p-6">
			<div class="grid gap-4 md:grid-cols-[minmax(0,1fr)_20rem] md:items-end">
					<div>
						<label for="business-search" class="text-sm font-semibold text-brand-text">
							Search local businesses
						</label>
						<div class="mt-2">
							<SearchBar
								id="business-search"
								bind:value={query}
								placeholder="Try a business name, category or street…"
							/>
						</div>
					</div>

					<div>
						<label for="business-category" class="text-sm font-semibold text-brand-text">
							Category
						</label>
						<select
							id="business-category"
							bind:value={selectedCategory}
							class="field-input mt-2 cursor-pointer"
						>
							{#each businessCategories as category}
								<option value={category}>
									{category === 'All' ? 'All categories' : category}
								</option>
							{/each}
						</select>
					</div>
			</div>
			<p class="mt-4 text-sm font-medium text-brand-muted" aria-live="polite">
				Showing {filteredBusinesses.length}
				{filteredBusinesses.length === 1 ? 'business' : 'businesses'}
			</p>
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
