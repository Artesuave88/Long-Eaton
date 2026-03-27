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

<article class="section-surface">
	<div class="container-shell section-space">
		<a href="/businesses" class="button-subtle">Back to businesses</a>

		<div class="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
			<div>
				<p class="eyebrow">{data.business.category}</p>
				<h1 class="mt-3 text-brand-text">{data.business.name}</h1>
				<p class="mt-5 max-w-2xl text-lg leading-8 text-brand-muted">{data.business.description}</p>

				<div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
					<div>
						<p class="eyebrow">Category</p>
						<p class="mt-2 text-base font-semibold text-brand-text">{data.business.category}</p>
					</div>
					<div>
						<p class="eyebrow">Location</p>
						<p class="mt-2 text-base font-semibold text-brand-text">{data.business.location}</p>
					</div>
					{#if data.business.website}
						<div>
							<p class="eyebrow">Website</p>
							<a href={data.business.website} target="_blank" rel="noreferrer" class="mt-2 inline-flex text-base font-semibold text-brand-accent hover:underline">
								Visit site
							</a>
						</div>
					{/if}
				</div>

				<div class="mt-8 space-y-5 text-base leading-8 text-brand-muted">
					{#each data.business.about as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>

				{#if data.business.website}
					<div class="mt-8">
						<a href={data.business.website} target="_blank" rel="noreferrer" class="button-primary">
							Visit website
						</a>
					</div>
				{/if}
			</div>

			<div class="space-y-6">
				{#if data.business.imageSrc}
					<div class="flex h-[24rem] w-full items-center justify-center overflow-hidden rounded-xl border border-brand-border bg-brand-primaryDark p-10 shadow-sm">
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
					<h2 class="text-2xl text-brand-text">At a glance</h2>
					<p class="body-copy-sm mt-4">
						This profile keeps the essentials easy to scan, with location, category and a direct route to the business website.
					</p>
					<a href="/contact" class="button-primary mt-5">Get your business listed</a>
				</div>
			</div>
		</div>

		{#if relatedBusinesses.length}
			<section class="mt-14">
				<div class="mb-6 max-w-2xl">
					<p class="eyebrow">More businesses</p>
					<h2 class="mt-3 text-brand-text">You might also want to look at</h2>
				</div>
				<div class="grid gap-4 md:grid-cols-3">
					{#each relatedBusinesses as business}
						<a href={`/businesses/${business.slug}`} class="surface-card surface-card-hover p-5">
							<p class="eyebrow">{business.category}</p>
							<h3 class="mt-3 text-2xl text-brand-text">{business.name}</h3>
							<p class="mt-2 text-sm font-medium text-brand-muted">{business.location}</p>
							<p class="body-copy-sm mt-4">{business.description}</p>
						</a>
					{/each}
				</div>
			</section>
		{/if}
	</div>
</article>
