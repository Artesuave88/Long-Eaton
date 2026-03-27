<script lang="ts">
	import ImagePlaceholder from '$components/ImagePlaceholder.svelte';
	import { formatDisplayDate } from '$utils/format';
	import type { PageData } from './$types';

	export let data: PageData;

	const formatRelatedDate = (date?: string, dateLabel?: string) =>
		date ? formatDisplayDate(date) : dateLabel ?? '';
	const isCarnival = data.event.slug === 'long-eaton-carnival';
</script>

<svelte:head>
	<title>{data.event.title} | Love Long Eaton</title>
	<meta name="description" content={data.event.excerpt} />
	<meta property="og:title" content={`${data.event.title} | Love Long Eaton`} />
	<meta property="og:description" content={data.event.excerpt} />
</svelte:head>

<article class="container-shell section-space">
	<a href="/events" class="text-sm font-semibold text-brand-700 hover:text-brand-900">Back to events</a>

	<div class="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
		<div>
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">{data.event.category}</p>
			<h1 class="mt-3 font-display text-4xl text-ink sm:text-5xl">{data.event.title}</h1>
			{#if data.event.strapline}
				<p class="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink/48">{data.event.strapline}</p>
			{/if}
			<p class="mt-5 max-w-2xl text-lg leading-8 text-ink/72">{data.event.excerpt}</p>

			<div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Date</p>
					<p class="mt-2 text-base font-semibold text-ink">{formatDisplayDate(data.event.date)}</p>
				</div>
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Start</p>
					<p class="mt-2 text-base font-semibold text-ink">{data.event.startTime ?? data.event.time}</p>
				</div>
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Location</p>
					<p class="mt-2 text-base font-semibold text-ink">{data.event.location}</p>
				</div>
				{#if data.event.price}
					<div>
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Entry</p>
						<p class="mt-2 text-base font-semibold text-ink">{data.event.price}</p>
					</div>
				{/if}
			</div>

			<div class="mt-8">
				<h2 class="font-display text-2xl text-ink">About this event</h2>
				<div class="mt-4 space-y-5 text-base leading-8 text-ink/75">
					{#each data.event.description as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			</div>

			<div class="surface-card mt-8 p-6">
				<h2 class="font-display text-2xl text-ink">Timing details</h2>
				<div class="mt-5 grid gap-4 sm:grid-cols-2">
					<div class="inset-panel p-4">
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Starts</p>
						<p class="mt-2 text-base font-semibold text-ink">{data.event.startTime ?? data.event.time}</p>
					</div>
					{#if data.event.endTime || data.event.approximateReturnTime}
						<div class="inset-panel p-4">
							<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
								{data.event.approximateReturnTime ? 'Approximate return' : 'Ends'}
							</p>
							<p class="mt-2 text-base font-semibold text-ink">
								{data.event.approximateReturnTime ?? data.event.endTime}
							</p>
						</div>
					{/if}
				</div>
			</div>

			{#if data.event.volunteerRun}
				<div class="surface-card mt-8 p-6">
					<h2 class="font-display text-2xl text-ink">Organiser</h2>
					<p class="mt-4 text-base leading-8 text-ink/75">
						{data.event.organiser}. The event is run entirely by volunteers.
					</p>
				</div>
			{/if}

			{#if data.event.relatedDates?.length}
				<div class="surface-card mt-8 p-6">
					<h2 class="font-display text-2xl text-ink">Related dates</h2>
					<p class="mt-4 text-sm leading-7 text-ink/72">
						Car boot dates listed alongside the carnival.
					</p>
					<div class="mt-5 grid gap-3 sm:grid-cols-2">
						{#each data.event.relatedDates as item}
							<div class="inset-panel p-4">
								<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{item.title}</p>
								<p class="mt-2 text-base font-semibold text-ink">{formatRelatedDate(item.date, item.dateLabel)}</p>
								{#if item.note}
									<p class="mt-1 text-sm text-ink/60">{item.note}</p>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/if}

			{#if data.event.tags?.length}
				<div class="mt-8 flex flex-wrap gap-2">
					{#each data.event.tags as tag}
						<span class="chip">{tag}</span>
					{/each}
				</div>
			{/if}

			{#if data.event.sourceName}
				<p class="mt-8 text-sm text-ink/55">
					Source: {data.event.sourceName}
					{#if data.event.sourceUrl}
						<a
							href={data.event.sourceUrl}
							target="_blank"
							rel="noreferrer"
							class="font-semibold text-brand-700 hover:text-brand-900"
						>
							Visit source
						</a>
					{/if}
				</p>
			{/if}
		</div>

		<div class="space-y-6">
			<ImagePlaceholder
				label={data.event.image?.label ?? data.event.imageLabel}
				style={data.event.image?.style ?? data.event.imageStyle}
				className="h-[24rem] w-full"
			/>
			<div class="surface-card p-6">
				<h2 class="font-display text-2xl text-ink">Planning your visit</h2>
				<p class="mt-4 text-sm leading-7 text-ink/72">
					{#if isCarnival}
						For the carnival, the day starts with the road parade before the main site activity continues on West Park. The main site is free to enter.
					{:else}
						Pair this event with a stop at a local cafe, a browse through the town centre or a walk through one of Long Eaton’s green spaces.
					{/if}
				</p>
				<div class="mt-5 flex flex-wrap gap-3">
					<a href="/businesses" class="button-primary">
						Find a local business
					</a>
					<a href="/discover" class="button-secondary">
						Discover the town
					</a>
				</div>
			</div>
		</div>
	</div>
</article>
