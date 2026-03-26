<script lang="ts">
	import { CTASection, DiscoverCard, SectionHeading } from '$components';
	import { discoverCategories } from '$data/discover';
</script>

<svelte:head>
	<title>Discover | Love Long Eaton</title>
	<meta
		name="description"
		content="Discover the best of Long Eaton, from independent shopping and food spots to canal walks and community favourites."
	/>
</svelte:head>

<section class="container-shell section-space">
	<SectionHeading
		eyebrow="Discover"
		title="Explore Long Eaton by mood, interest or time of day"
		copy="This MVP keeps discovery simple: local food, independent shopping, green space and community life."
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
			<h2 class="font-display text-2xl text-ink">Start with the town centre</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				Long Eaton’s centre is easy to browse on foot, making it perfect for a low-pressure half-day visit with coffee, shopping and a few spontaneous stops.
			</p>
		</div>
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">Mix local with outdoors</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				One of the town’s strengths is how naturally local businesses connect with canals, parks and family-friendly routes.
			</p>
		</div>
		<div class="surface-card p-7">
			<h2 class="font-display text-2xl text-ink">Come back often</h2>
			<p class="mt-4 text-sm leading-7 text-ink/72">
				Seasonal markets, changing menus and one-off community events mean there is always another reason to return.
			</p>
		</div>
	</div>
</section>

<section class="container-shell section-space pt-0">
	<CTASection
		title="Want to feature a trail, guide or local recommendation?"
		copy="The discover section is designed to grow into themed guides, maps and seasonal itineraries as the site develops."
		primaryHref="/contact"
		primaryLabel="Suggest local content"
		secondaryHref="/businesses"
		secondaryLabel="See local businesses"
	/>
</section>
