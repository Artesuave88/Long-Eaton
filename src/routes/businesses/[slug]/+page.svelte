<script lang="ts">
	import ImagePlaceholder from '$components/ui/ImagePlaceholder.svelte';
	import EventCard from '$components/features/events/EventCard.svelte';
	import { businesses } from '$data/businesses';
	import type { PageData } from './$types';
	import { breadcrumbJsonLd, businessJsonLd, businessMetaDescription, businessSeoTitle } from '$utils/seo';
	import { site } from '$data/site';

	export let data: PageData;

	const relatedBusinesses = businesses
		.filter((business) => business.slug !== data.business.slug)
		.sort((a, b) => Number(b.category === data.business.category) - Number(a.category === data.business.category))
		.slice(0, 3);
	const pageTitle = businessSeoTitle(data.business);
	const pageDescription = businessMetaDescription(data.business);
	const structuredData = businessJsonLd(data.business);
	const breadcrumbs = breadcrumbJsonLd([
		{ name: 'Home', path: '/' },
		{ name: 'Businesses', path: '/businesses' },
		{ name: data.business.name, path: `/businesses/${data.business.slug}` }
	]);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${site.url}/businesses/${data.business.slug}`} />
	{#if data.business.imageSrc}<meta property="og:image" content={data.business.imageSrc.startsWith('http') ? data.business.imageSrc : `${site.url}${data.business.imageSrc}`} />{/if}
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	{@html `<script type="application/ld+json">${structuredData}</script>`}
	{@html `<script type="application/ld+json">${breadcrumbs}</script>`}
</svelte:head>

<article class="section-surface">
	<div class="container-shell section-space">
		<nav aria-label="Breadcrumb">
			<ol class="flex flex-wrap items-center gap-2 text-sm font-medium text-brand-muted">
				<li><a href="/" class="hover:text-brand-accent hover:underline">Home</a></li>
				<li aria-hidden="true">/</li>
				<li><a href="/businesses" class="hover:text-brand-accent hover:underline">Businesses</a></li>
				<li aria-hidden="true">/</li>
				<li aria-current="page" class="text-brand-text">{data.business.name}</li>
			</ol>
		</nav>

		<div class="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
			<div>
				<p class="eyebrow">{data.business.category}</p>
				<h1 class="mt-3 text-brand-text">{data.business.heading ?? data.business.name}</h1>
				<p class="mt-5 max-w-2xl text-lg leading-8 text-brand-muted">{data.business.description}</p>

				<div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
					<div>
						<p class="eyebrow">Category</p>
						<p class="mt-2 text-base font-semibold text-brand-text">{data.business.category}</p>
					</div>
					<div>
						<p class="eyebrow">Address</p>
						<address class="mt-2 text-base font-semibold not-italic text-brand-text">{data.business.location}</address>
					</div>
					{#if data.business.telephone}
						<div>
							<p class="eyebrow">Phone</p>
							<a href={`tel:${data.business.telephone.replace(/\s/g, '')}`} class="mt-2 inline-flex text-base font-semibold text-brand-accent hover:underline">{data.business.telephone}</a>
						</div>
					{/if}
					{#if data.business.email}
						<div>
							<p class="eyebrow">Email</p>
							<a href={`mailto:${data.business.email}`} class="mt-2 inline-flex break-all text-base font-semibold text-brand-accent hover:underline">{data.business.email}</a>
						</div>
					{/if}
					{#if data.business.website}
						<div>
							<p class="eyebrow">Website</p>
							<a href={data.business.website} target="_blank" rel="noreferrer" class="mt-2 inline-flex text-base font-semibold text-brand-accent hover:underline">
								Visit site
							</a>
						</div>
					{/if}
					{#if data.business.instagram}
						<div>
							<p class="eyebrow">Instagram</p>
							<a href={data.business.instagram} target="_blank" rel="noreferrer" class="mt-2 inline-flex text-base font-semibold text-brand-accent hover:underline">
								View profile
							</a>
						</div>
					{/if}
				</div>

				{#if data.business.openingHours?.length}
					<section class="surface-card mt-6 p-6" aria-labelledby="opening-hours-heading">
						<h2 id="opening-hours-heading" class="text-xl text-brand-text">Opening hours</h2>
						<ul class="mt-3 space-y-2 text-base text-brand-muted">
							{#each data.business.openingHours as hours}<li>{hours.label}</li>{/each}
						</ul>
					</section>
				{/if}

				<section class="mt-8" aria-labelledby="about-business-heading">
					<h2 id="about-business-heading" class="text-2xl text-brand-text">About {data.business.name}</h2>
				<div class="mt-4 space-y-5 text-base leading-8 text-brand-muted">
					{#each data.business.about as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
				</section>

				{#if data.business.website || data.business.instagram || data.business.telephone || data.business.email}
					<div class="mt-8 flex flex-wrap gap-3" aria-label={`Contact ${data.business.name}`}>
					{#if data.business.website}
						<a href={data.business.website} target="_blank" rel="noreferrer" class="button-primary">
							Visit {data.business.name} website
						</a>
					{/if}
					{#if data.business.instagram}
						<a href={data.business.instagram} target="_blank" rel="noreferrer" class="button-primary">
							Follow {data.business.name} on Instagram
						</a>
					{/if}
					{#if data.business.telephone}<a href={`tel:${data.business.telephone.replace(/\s/g, '')}`} class="button-primary">Call {data.business.name}</a>{/if}
					{#if data.business.email}<a href={`mailto:${data.business.email}`} class="button-primary">Email {data.business.name}</a>{/if}
					</div>
				{/if}
			</div>

			<div class="space-y-6">
				{#if data.business.imageSrc}
					<div
						class={`flex h-[24rem] w-full items-center justify-center overflow-hidden rounded-xl border border-brand-border shadow-sm ${
							data.business.imageFit === 'cover' ||
							data.business.slug === 'mo-mo-italian-dining'
								? 'p-0'
								: 'p-10'
						} ${
							data.business.slug === 'the-butchers-long-eaton'
								? 'bg-[#f7f2ed]'
								: 'bg-brand-surface'
						}`}
					>
						<img
							src={data.business.imageSrc}
							alt={data.business.imageAlt ?? `${data.business.name} – ${data.business.imageLabel}`}
							decoding="async"
							class={data.business.imageFit === 'cover'
								? 'h-full w-full object-cover'
								: 'max-h-full max-w-full object-contain'}
						/>
					</div>
				{:else}
					<ImagePlaceholder
						label={data.business.imageLabel}
						style={data.business.imageStyle}
						className="h-[24rem] w-full"
					/>
				{/if}
		
			</div>
		</div>

		{#if data.events.length}
			<section class="mt-14" aria-labelledby="business-events-heading">
				<div class="mb-6 max-w-2xl">
					<p class="eyebrow">Coming up</p>
					<h2 id="business-events-heading" class="mt-3 text-brand-text">Events at {data.business.name}</h2>
				</div>
				<div class="section-grid">
					{#each data.events as event}<EventCard {event} />{/each}
				</div>
			</section>
		{/if}

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

		{#if data.business.relatedLinks?.length}
			<nav class="surface-card mt-12 p-6" aria-label={`More local guides related to ${data.business.name}`}>
				<h2 class="text-2xl text-brand-text">Explore more of Long Eaton</h2>
				<div class="mt-5 flex flex-wrap gap-3">
					{#each data.business.relatedLinks as link}
						<a href={link.href} class="button-secondary">{link.label}</a>
					{/each}
				</div>
			</nav>
		{/if}
	</div>
</article>
