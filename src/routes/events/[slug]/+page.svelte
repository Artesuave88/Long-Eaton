<script lang="ts">
	import ImagePlaceholder from '$components/ImagePlaceholder.svelte';
	import { formatDisplayDate } from '$utils/format';
	import type { PageData } from './$types';

	export let data: PageData;
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
			<p class="mt-5 max-w-2xl text-lg leading-8 text-ink/72">{data.event.excerpt}</p>

			<div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-3">
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Date</p>
					<p class="mt-2 text-base font-semibold text-ink">{formatDisplayDate(data.event.date)}</p>
				</div>
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Time</p>
					<p class="mt-2 text-base font-semibold text-ink">{data.event.time}</p>
				</div>
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Location</p>
					<p class="mt-2 text-base font-semibold text-ink">{data.event.location}</p>
				</div>
			</div>

			<div class="mt-8 space-y-5 text-base leading-8 text-ink/75">
				{#each data.event.description as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>

		<div class="space-y-6">
			<ImagePlaceholder
				label={data.event.imageLabel}
				style={data.event.imageStyle}
				className="h-[24rem] w-full"
			/>
			<div class="surface-card p-6">
				<h2 class="font-display text-2xl text-ink">Planning your visit</h2>
				<p class="mt-4 text-sm leading-7 text-ink/72">
					Pair this event with a stop at a local cafe, a browse through the town centre or a walk through one of Long Eaton’s green spaces.
				</p>
				<div class="mt-5 flex flex-wrap gap-3">
					<a href="/businesses" class="rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800">
						Find a local business
					</a>
					<a href="/discover" class="rounded-full bg-sand px-5 py-3 text-sm font-semibold text-ink hover:bg-brand-100">
						Discover the town
					</a>
				</div>
			</div>
		</div>
	</div>
</article>
