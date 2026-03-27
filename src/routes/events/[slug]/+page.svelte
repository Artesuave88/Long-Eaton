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

<article class="section-surface">
	<div class="container-shell section-space">
		<a href="/events" class="button-subtle">Back to events</a>

		<div class="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
			<div>
				<p class="eyebrow">{data.event.category}</p>
				<h1 class="mt-3 text-brand-text">{data.event.title}</h1>
				{#if data.event.strapline}
					<p class="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">{data.event.strapline}</p>
				{/if}
				<p class="mt-5 max-w-2xl text-lg leading-8 text-brand-muted">{data.event.excerpt}</p>

				<div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
					<div>
						<p class="eyebrow">Date</p>
						<p class="mt-2 text-base font-semibold text-brand-text">{formatDisplayDate(data.event.date)}</p>
					</div>
					<div>
						<p class="eyebrow">Start</p>
						<p class="mt-2 text-base font-semibold text-brand-text">{data.event.startTime ?? data.event.time}</p>
					</div>
					<div>
						<p class="eyebrow">Location</p>
						<p class="mt-2 text-base font-semibold text-brand-text">{data.event.location}</p>
					</div>
					{#if data.event.price}
						<div>
							<p class="eyebrow">Entry</p>
							<p class="mt-2 text-base font-semibold text-brand-text">{data.event.price}</p>
						</div>
					{/if}
				</div>

				<div class="mt-8">
					<h2 class="text-2xl text-brand-text">About this event</h2>
					<div class="mt-4 space-y-5 text-base leading-8 text-brand-muted">
						{#each data.event.description as paragraph}
							<p>{paragraph}</p>
						{/each}
					</div>
				</div>

				<div class="surface-card mt-8 p-6">
					<h2 class="text-2xl text-brand-text">Timing details</h2>
					<div class="mt-5 grid gap-4 sm:grid-cols-2">
						<div class="inset-panel p-4">
							<p class="eyebrow">Starts</p>
							<p class="mt-2 text-base font-semibold text-brand-text">{data.event.startTime ?? data.event.time}</p>
						</div>
						{#if data.event.endTime || data.event.approximateReturnTime}
							<div class="inset-panel p-4">
								<p class="eyebrow">{data.event.approximateReturnTime ? 'Approximate return' : 'Ends'}</p>
								<p class="mt-2 text-base font-semibold text-brand-text">
									{data.event.approximateReturnTime ?? data.event.endTime}
								</p>
							</div>
						{/if}
					</div>
				</div>

				{#if data.event.volunteerRun}
					<div class="surface-card mt-8 p-6">
						<h2 class="text-2xl text-brand-text">Organiser</h2>
						<p class="mt-4 text-base leading-8 text-brand-muted">
							{data.event.organiser}. The event is run entirely by volunteers.
						</p>
					</div>
				{/if}

				{#if data.event.relatedDates?.length}
					<div class="surface-card mt-8 p-6">
						<h2 class="text-2xl text-brand-text">Related dates</h2>
						<p class="body-copy-sm mt-4">Useful extra dates connected with this event.</p>
						<div class="mt-5 grid gap-3 sm:grid-cols-2">
							{#each data.event.relatedDates as item}
								<div class="inset-panel p-4">
									<p class="eyebrow">{item.title}</p>
									<p class="mt-2 text-base font-semibold text-brand-text">{formatRelatedDate(item.date, item.dateLabel)}</p>
									{#if item.note}
										<p class="mt-1 text-sm text-brand-muted">{item.note}</p>
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
					<p class="mt-8 text-sm text-brand-muted">
						Source: {data.event.sourceName}
						{#if data.event.sourceUrl}
							<a href={data.event.sourceUrl} target="_blank" rel="noreferrer" class="ml-2 font-semibold text-brand-accent hover:underline">
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
					<h2 class="text-2xl text-brand-text">Planning your visit</h2>
					<p class="body-copy-sm mt-4">
						{#if isCarnival}
							For the carnival, the day starts with the road parade before the main site activity continues on West Park. The main site is free to enter.
						{:else}
							Pair this event with a stop at a local cafe, a browse through the town centre or a walk through one of Long Eaton’s green spaces.
						{/if}
					</p>
					<div class="mt-5 flex flex-wrap gap-3">
						<a href="/businesses" class="button-primary">Find a local business</a>
						<a href="/contact" class="button-secondary">Send an event</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</article>
