<script lang="ts">
	import ImagePlaceholder from '$components/ImagePlaceholder.svelte';
	import { businesses } from '$data/businesses';
	import type { PageData } from './$types';

	export let data: PageData;

	const relatedBusinesses = businesses
		.filter((business) => business.slug !== data.business.slug)
		.slice(0, 3);
</script>

<svelte:head>
	<title>{data.business.name} | Love Long Eaton</title>
	<meta name="description" content={data.business.description} />
	<meta property="og:title" content={`${data.business.name} | Love Long Eaton`} />
	<meta property="og:description" content={data.business.description} />
</svelte:head>

<article class="container-shell section-space">
	<a href="/businesses" class="text-sm font-semibold text-brand-700 hover:text-brand-900">Back to businesses</a>

	<div class="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
		<div>
			<div class="flex flex-wrap items-center gap-2">
				<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">{data.business.category}</p>
				{#if data.business.isReal}
					<span class="chip">
						Featured local business
					</span>
				{/if}
			</div>
			<h1 class="mt-3 font-display text-4xl text-ink sm:text-5xl">{data.business.name}</h1>
			<p class="mt-5 max-w-2xl text-lg leading-8 text-ink/72">{data.business.description}</p>

			<div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Category</p>
					<p class="mt-2 text-base font-semibold text-ink">{data.business.category}</p>
				</div>
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Location</p>
					<p class="mt-2 text-base font-semibold text-ink">{data.business.location}</p>
				</div>
				{#if data.business.website}
					<div>
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Website</p>
						<a
							href={data.business.website}
							target="_blank"
							rel="noreferrer"
							class="mt-2 inline-flex text-base font-semibold text-ink hover:text-brand-700"
						>
							Visit site
						</a>
					</div>
				{/if}
			</div>

			<div class="mt-8 space-y-5 text-base leading-8 text-ink/75">
				{#each data.business.about as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>

			{#if data.business.website}
				<div class="mt-8">
					<a
						href={data.business.website}
						target="_blank"
						rel="noreferrer"
						class="button-primary"
					>
						Visit website
					</a>
				</div>
			{/if}
		</div>

		<div class="space-y-6">
			{#if data.business.imageSrc}
				<div class="flex h-[24rem] w-full items-center justify-center overflow-hidden rounded-md border border-ink/10 bg-[#0b0b0b] p-10 shadow-card">
					<img
						src={data.business.imageSrc}
						alt={data.business.imageAlt ?? data.business.name}
						class="max-h-full max-w-full object-contain"
					/>
				</div>
			{:else}
				<ImagePlaceholder
					label={data.business.imageLabel}
					style={data.business.imageStyle}
					className="h-[24rem] w-full"
				/>
			{/if}
			<div class="surface-card p-6">
				<h2 class="font-display text-2xl text-ink">At a glance</h2>
				<p class="mt-4 text-sm leading-7 text-ink/72">
					This profile keeps the essentials easy to scan. Opening times, directions and extra details can be added here as more real listings go live.
				</p>
				<a href="/contact" class="button-primary mt-5">
					Get your business listed
				</a>
			</div>
		</div>
	</div>

	{#if relatedBusinesses.length}
		<section class="mt-14">
			<div class="mb-6 max-w-2xl">
				<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">More businesses</p>
				<h2 class="mt-3 font-display text-3xl text-ink">You might also want to look at</h2>
			</div>
			<div class="grid gap-4 md:grid-cols-3">
				{#each relatedBusinesses as business}
					<a href={`/businesses/${business.slug}`} class="surface-card p-5 transition hover:bg-brand-50/60">
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{business.category}</p>
						<h3 class="mt-3 font-display text-2xl text-ink">{business.name}</h3>
						<p class="mt-2 text-sm font-medium text-ink/55">{business.location}</p>
						<p class="mt-4 text-sm leading-7 text-ink/72">{business.description}</p>
					</a>
				{/each}
			</div>
		</section>
	{/if}
</article>
