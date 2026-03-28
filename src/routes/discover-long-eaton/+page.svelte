<script lang="ts">
	import { CTASection, DiscoverPlaceCard } from '$components';
	import { discoverPlaces } from '$data/discover';
</script>

<svelte:head>
	<title>Discover Long Eaton | Love Long Eaton</title>
	<meta
		name="description"
		content="Explore easy local favourites in Long Eaton, including West Park, Trent Lock and the Erewash Canal."
	/>
</svelte:head>

<section class="section-surface">
	<div class="container-shell section-space">
		<div class="max-w-3xl">
			<p class="eyebrow">Discover Long Eaton</p>
			<h1 class="mt-3 text-brand-text">Simple local places to enjoy more of Long Eaton</h1>
		

		</div>
	</div>
</section>

<section class="section-surface">
	<div class="container-shell section-space">
		<div class="space-y-6">
			{#each discoverPlaces as place}
				<DiscoverPlaceCard {place} />
			{/each}
		</div>
	</div>
</section>




<section class="section-surface">
	<div class="container-shell section-space">
		<CTASection
			eyebrow="Keep exploring"
			title="Looking for more local ideas after your walk?"
			copy="Find local events, businesses and everyday places worth knowing about in Long Eaton."
			primaryHref="/events"
			primaryLabel="Browse events"
			secondaryHref="/businesses"
			secondaryLabel="See businesses"
		/>
	</div>
</section>
