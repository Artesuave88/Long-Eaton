<script lang="ts">
	import ImagePlaceholder from '$components/ImagePlaceholder.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.business.name} | Love Long Eaton</title>
	<meta name="description" content={data.business.description} />
	<meta property="og:title" content={`${data.business.name} | Love Long Eaton`} />
	<meta property="og:description" content={data.business.description} />
</svelte:head>

<article class="container-shell section-space">
	<a href="/businesses" class="text-sm font-semibold text-brand-700 hover:text-brand-900">Back to businesses</a>

	<div class="mt-6 grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
		<div>
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">{data.business.category}</p>
			<h1 class="mt-3 font-display text-4xl text-ink sm:text-5xl">{data.business.name}</h1>
			<p class="mt-5 max-w-2xl text-lg leading-8 text-ink/72">{data.business.description}</p>

			<div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2">
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Category</p>
					<p class="mt-2 text-base font-semibold text-ink">{data.business.category}</p>
				</div>
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Location</p>
					<p class="mt-2 text-base font-semibold text-ink">{data.business.location}</p>
				</div>
			</div>

			<div class="mt-8 space-y-5 text-base leading-8 text-ink/75">
				{#each data.business.about as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>

		<div class="space-y-6">
			<ImagePlaceholder
				label={data.business.imageLabel}
				style={data.business.imageStyle}
				className="h-[24rem] w-full"
			/>
			<div class="surface-card p-6">
				<h2 class="font-display text-2xl text-ink">Why it matters locally</h2>
				<p class="mt-4 text-sm leading-7 text-ink/72">
					Local businesses are a big part of what makes Long Eaton feel useful, characterful and worth revisiting. This profile format is ready to expand later with opening times, offers and map integration.
				</p>
				<a href="/contact" class="mt-5 inline-flex rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800">
					Feature your business
				</a>
			</div>
		</div>
	</div>
</article>
