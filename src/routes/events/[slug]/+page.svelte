<script lang="ts">
	import ImagePlaceholder from '$components/ui/ImagePlaceholder.svelte';
	import { formatDisplayDate, formatEventDate, formatRecurringLabel } from '$utils/format';
	import type { PageData } from './$types';

	export let data: PageData;

	const formatRelatedDate = (date?: string, dateLabel?: string) =>
		date ? formatDisplayDate(date) : dateLabel ?? '';
	const isCarnival = data.event.slug === 'long-eaton-carnival';
	const isParkrun = data.event.slug === 'long-eaton-parkrun';
	const isJuniorParkrun = data.event.slug === 'long-eaton-junior-parkrun';
	const isActivity = data.event.type === 'activity';
	const isArtRoomEvent = data.event.sourceUrl === 'https://www.longeatonartroom.co.uk/whats-available/events/';
	const hasVisitDetails =
		Boolean(data.event.priceSummary) || Boolean(data.event.locationNote) || Boolean(data.event.fundraisingNote);
	type SummaryItem = {
		label: string;
		value: string;
	};
	const summaryItems = [
		data.event.status
			? {
					label: 'Status',
					value: data.event.status
				}
			: null,
		{
			label: data.event.ongoing ? (data.event.recurrence ? 'When' : 'Status') : 'Date',
			value: data.event.ongoing ? formatRecurringLabel(data.event) : formatEventDate(data.event)
		},
		data.event.startTime ?? data.event.time
			? {
					label: 'Time',
					value: data.event.startTime ?? data.event.time
				}
			: null,
		data.event.location
			? {
					label: 'Location',
					value: data.event.location
				}
			: null,
		data.event.price
			? {
					label: 'Entry',
					value: data.event.price
				}
			: null
	].filter((item): item is SummaryItem => Boolean(item));
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

				{#if isParkrun}
					<p class="mt-4 text-sm text-brand-muted">Weekly community event with free entry.</p>
				{/if}

				<div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
					{#each summaryItems as item}
						<div>
							<p class="eyebrow">{item.label}</p>
							<p class="mt-2 text-base font-semibold text-brand-text">{item.value}</p>
						</div>
					{/each}
				</div>

				<div class="mt-8">
					<h2 class="text-2xl text-brand-text">{isActivity ? 'About this group' : 'About this event'}</h2>
					<div class="mt-4 space-y-5 text-base leading-8 text-brand-muted">
						{#each data.event.description as paragraph}
							<p>{paragraph}</p>
						{/each}
					</div>
					{#if isParkrun || isJuniorParkrun}
						<div class="surface-card mt-6 p-6">
							<h3 class="text-xl text-brand-text">What parkrun is</h3>
							<p class="mt-4 text-base leading-8 text-brand-muted">
								{#if isJuniorParkrun}
									junior parkrun is a weekly 2k event for children aged 4 to 14. Families can come along to take part, volunteer or spectate.
								{:else}
									parkrun is a weekly 5k community event. People can walk, jog, run, volunteer or spectate.
								{/if}
							</p>
						</div>
					{/if}
					{#if data.event.audience}
						<div class="surface-card mt-6 p-6">
							<h3 class="text-xl text-brand-text">Who it is for</h3>
							<p class="mt-4 text-base leading-8 text-brand-muted">{data.event.audience}</p>
						</div>
					{/if}
					{#if data.event.contactName}
						<div class="surface-card mt-6 p-6">
							<h3 class="text-xl text-brand-text">Group contact</h3>
							<p class="mt-4 text-base leading-8 text-brand-muted">{data.event.contactName}</p>
						</div>
					{/if}
				</div>

				{#if !isArtRoomEvent && (data.event.startTime || data.event.time || data.event.endTime || data.event.approximateReturnTime)}
					<div class="surface-card mt-8 p-6">
						<h2 class="text-2xl text-brand-text">Timing details</h2>
						<div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							<div class="inset-panel p-4">
								<p class="eyebrow">Starts</p>
								<p class="mt-2 text-base font-semibold text-brand-text">{data.event.startTime ?? data.event.time}</p>
							</div>
							{#if data.event.time !== data.event.startTime}
								<div class="inset-panel p-4">
									<p class="eyebrow">At a glance</p>
									<p class="mt-2 text-base font-semibold text-brand-text">{data.event.time}</p>
								</div>
							{/if}
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
				{/if}

				{#if data.event.sellerInfo?.length || data.event.buyerInfo?.length}
					<div class="mt-8 grid gap-6 lg:grid-cols-2">
						{#if data.event.sellerInfo?.length}
							<div class="surface-card p-6">
								<h2 class="text-2xl text-brand-text">Sellers</h2>
								<ul class="mt-4 space-y-3 text-base leading-7 text-brand-muted">
									{#each data.event.sellerInfo as item}
										<li>{item}</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if data.event.buyerInfo?.length}
							<div class="surface-card p-6">
								<h2 class="text-2xl text-brand-text">Buyers</h2>
								<ul class="mt-4 space-y-3 text-base leading-7 text-brand-muted">
									{#each data.event.buyerInfo as item}
										<li>{item}</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				{/if}

				{#if data.event.sessions?.length}
					<div class="surface-card mt-8 p-6">
						<h2 class="text-2xl text-brand-text">Sessions</h2>
						<p class="body-copy-sm mt-4">Session times and entry details for the day.</p>
						<div class="mt-5 grid gap-4 sm:grid-cols-2">
							{#each data.event.sessions as session}
								<div class="inset-panel p-4">
									<p class="eyebrow">{session.title}</p>
									<p class="mt-2 text-base font-semibold text-brand-text">{session.time}</p>
									{#if session.note}
										<p class="mt-2 text-sm leading-7 text-brand-muted">{session.note}</p>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{/if}

				{#if hasVisitDetails}
					<div class="surface-card mt-8 p-6">
						<h2 class="text-2xl text-brand-text">What to know</h2>
						<div class="mt-5 grid gap-4 sm:grid-cols-2">
							{#if data.event.priceSummary}
								<div class="inset-panel p-4">
									<p class="eyebrow">Pricing</p>
									<p class="mt-2 text-base leading-7 text-brand-muted">{data.event.priceSummary}</p>
								</div>
							{/if}
							{#if data.event.locationNote}
								<div class="inset-panel p-4">
									<p class="eyebrow">Location note</p>
									<p class="mt-2 text-base leading-7 text-brand-muted">{data.event.locationNote}</p>
								</div>
							{/if}
							{#if data.event.fundraisingNote}
								<div class="inset-panel p-4 sm:col-span-2">
									<p class="eyebrow">Fundraising</p>
									<p class="mt-2 text-base leading-7 text-brand-muted">{data.event.fundraisingNote}</p>
								</div>
							{/if}
						</div>
					</div>
				{/if}

				{#if data.event.organiser && !isArtRoomEvent}
					<div class="surface-card mt-8 p-6">
						<h2 class="text-2xl text-brand-text">Organiser</h2>
						<p class="mt-4 text-base leading-8 text-brand-muted">
							{data.event.organiser}
							{#if data.event.volunteerRun}
								. The event is run entirely by volunteers.
							{/if}
						</p>
					</div>
				{/if}

				{#if data.event.ticketUrl || data.event.sourceUrl}
					<div class="mt-8 flex flex-wrap gap-3">
						{#if data.event.ticketUrl}
							<a href={data.event.ticketUrl} target="_blank" rel="noreferrer" class="button-primary">
								Book tickets
							</a>
						{/if}
						{#if data.event.sourceUrl && data.event.sourceUrl !== data.event.ticketUrl}
							<a href={data.event.sourceUrl} target="_blank" rel="noreferrer" class="button-secondary">
								View source
							</a>
						{/if}
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

			</div>

			<div class="space-y-6">
				{#if data.event.imageSrc}
					<div class="overflow-hidden rounded-xl border border-brand-border bg-brand-primaryDark/10 shadow-sm">
						<img
							src={data.event.imageSrc}
							alt={data.event.imageAlt ?? data.event.title}
							class={`h-[24rem] w-full ${
								data.event.imageFit === 'contain' ? 'bg-white p-6 object-contain' : 'object-cover'
							}`}
						/>
					</div>
				{:else}
					<ImagePlaceholder
						label={data.event.image?.label ?? data.event.imageLabel}
						style={data.event.image?.style ?? data.event.imageStyle}
						className="h-[24rem] w-full"
					/>
				{/if}

				{#if data.event.gallery && data.event.gallery.length > 1}
					<div class="grid gap-4 sm:grid-cols-2">
						{#each data.event.gallery.slice(1) as image}
							<div class="overflow-hidden rounded-xl border border-brand-border bg-brand-surface shadow-sm">
								<img src={image.src} alt={image.alt} class="h-48 w-full object-cover" />
							</div>
						{/each}
					</div>
				{/if}
				{#if !isArtRoomEvent}
					<div class="surface-card p-6">
						<h2 class="text-2xl text-brand-text">Planning your visit</h2>
						<p class="body-copy-sm mt-4">
							{#if isCarnival}
								For the carnival, the day starts with the road parade before the main site activity continues on West Park. The main site is free to enter.
							{:else if data.event.category === 'Markets'}
								West Park car boots are simple to plan for: sellers arrive from 7am, buyers from 8am, and all proceeds support the Carnival fund.
							{:else if isParkrun}
								Long Eaton parkrun starts at 9am every Saturday morning at West Park Leisure Centre, with people welcome to walk, jog, run, volunteer or spectate.
							{:else if isActivity}
								Check the source page for the latest meeting details before you go, as ongoing groups can change times and venues.
							{:else}
								Pair this event with a stop at a local cafe, a browse through the town centre or a walk through one of Long Eaton’s green spaces.
							{/if}
						</p>
						<div class="mt-5 flex flex-wrap gap-3">
							<a href="/businesses" class="button-primary">Find a local business</a>
							<a href="/contact" class="button-secondary">Send an event</a>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</article>
