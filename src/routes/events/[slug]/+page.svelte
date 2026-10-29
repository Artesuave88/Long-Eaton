<script lang="ts">
	import ImagePlaceholder from '$components/ui/ImagePlaceholder.svelte';
	import NewsletterSignup from '$components/features/newsletter/NewsletterSignup.svelte';
	import { formatDisplayDate, formatEventDate, formatRecurringLabel } from '$utils/format';
	import { breadcrumbJsonLd, eventJsonLd } from '$utils/seo';
	import { isRepeatedEventText } from '$data/listings';
	import type { PageData } from './$types';
	import { site } from '$data/site';
	import type { ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;
	$: structuredData = eventJsonLd(data.event, data.isPast);
	$: breadcrumbs = breadcrumbJsonLd([
		{ name: 'Home', path: '/' },
		{ name: 'Events', path: '/events' },
		{ name: data.event.title, path: `/events/${data.event.slug}` }
	]);

	const formatRelatedDate = (date?: string, dateLabel?: string) =>
		date ? formatDisplayDate(date) : dateLabel ?? '';
	$: isActivity = data.event.type === 'activity';
	$: description = data.event.description.filter((paragraph) => !isRepeatedEventText(paragraph, data.event.title) && !isRepeatedEventText(paragraph, data.event.excerpt));
	type SummaryItem = {
		label: string;
		value: string;
	};
	$: summaryItems = [
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
		!data.event.sessions?.length && (data.event.time || data.event.startTime)
			? {
					label: 'Time',
					value: data.event.time ?? [data.event.startTime, data.event.endTime].filter(Boolean).join('–')
				}
			: null,
		data.event.location
			? {
					label: 'Location',
					value: data.event.location
				}
			: null,
		(data.event.priceSummary || data.event.price)
			? {
					label: 'Entry',
					value: data.event.priceSummary ?? data.event.price
				}
			: null
	].filter((item): item is SummaryItem => Boolean(item));
</script>

<svelte:head>
	<title>{data.event.seoTitle ?? `${data.event.title} | Love Long Eaton`}</title>
	<meta name="description" content={data.event.metaDescription ?? data.event.excerpt} />
	<meta property="og:title" content={data.event.seoTitle ?? `${data.event.title} | Love Long Eaton`} />
	<meta property="og:description" content={data.event.metaDescription ?? data.event.excerpt} />
	<meta property="og:type" content="article" />
	{#if data.event.imageSrc}<meta property="og:image" content={data.event.imageSrc.startsWith('http') ? data.event.imageSrc : `${site.url}${data.event.imageSrc}`} />{/if}
	<meta name="twitter:title" content={data.event.seoTitle ?? `${data.event.title} | Love Long Eaton`} />
	<meta name="twitter:description" content={data.event.metaDescription ?? data.event.excerpt} />
	{#if structuredData}
		{@html `<script type="application/ld+json">${structuredData}</script>`}
	{/if}
	{@html `<script type="application/ld+json">${breadcrumbs}</script>`}
</svelte:head>

<article class="section-surface">
	<div class="container-shell section-space">
		<a href="/events" class="button-subtle">Back to events</a>

		<div class="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
			<div>
				<p class="eyebrow">{data.event.category}</p>
				<h1 class="mt-3 text-brand-text">{data.event.heading ?? data.event.title}</h1>
				{#if data.event.strapline}
					<p class="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">{data.event.strapline}</p>
				{/if}
				{#if !isRepeatedEventText(data.event.excerpt, data.event.title)}
					<p class="mt-5 max-w-2xl text-lg leading-8 text-brand-muted">{data.event.excerpt}</p>
				{/if}

				{#if !data.isPast && data.event.ticketUrl}
					<div class="mt-6">
						<a href={data.event.ticketUrl} target="_blank" rel="noreferrer" class="button-primary">
							Book tickets
						</a>
					</div>
				{/if}

				<div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2">
					{#each summaryItems as item}
						<div class={item.label === 'Entry' && data.event.priceSummary ? 'sm:col-span-2' : ''}>
							<p class="eyebrow">{item.label}</p>
							<p
								class:text-brand-primary={item.value === 'On-foot entry: FREE'}
								class="mt-2 text-base font-semibold text-brand-text"
							>
								{item.value}
							</p>
						</div>
					{/each}
				</div>

				{#if description.length}
					<div class="mt-8">
						<h2 class="text-2xl text-brand-text">{isActivity ? 'About this group' : 'About this event'}</h2>
						<div class="mt-4 space-y-5 text-base leading-8 text-brand-muted">
							{#each description as paragraph}
								<p>{paragraph}</p>
							{/each}
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
						<h2 class="text-2xl text-brand-text">Schedule</h2>
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

				{#if data.event.audience || data.event.contactName || data.event.locationNote || data.event.fundraisingNote || data.event.organiser || data.event.approximateReturnTime}
					<dl class="mt-8 space-y-3 text-base leading-7 text-brand-muted">
						{#if data.event.audience}<div><dt class="inline font-semibold text-brand-text">Who it’s for: </dt><dd class="inline">{data.event.audience}</dd></div>{/if}
						{#if data.event.locationNote}<div><dt class="inline font-semibold text-brand-text">Finding the venue: </dt><dd class="inline">{data.event.locationNote}</dd></div>{/if}
						{#if data.event.approximateReturnTime}<div><dt class="inline font-semibold text-brand-text">Approximate return: </dt><dd class="inline">{data.event.approximateReturnTime}</dd></div>{/if}
						{#if data.event.fundraisingNote}<div><dt class="inline font-semibold text-brand-text">Fundraising: </dt><dd class="inline">{data.event.fundraisingNote}</dd></div>{/if}
						{#if data.event.contactName}<div><dt class="inline font-semibold text-brand-text">Contact: </dt><dd class="inline">{data.event.contactName}</dd></div>{/if}
						{#if data.event.organiser}
							<div><dt class="inline font-semibold text-brand-text">Organised by: </dt><dd class="inline">
								{#if data.event.organiserUrl}<a href={data.event.organiserUrl} target="_blank" rel="noreferrer" class="text-brand-accent hover:underline">{data.event.organiser}</a>{:else}{data.event.organiser}{/if}{#if data.event.volunteerRun} (volunteer run){/if}
							</dd></div>
						{/if}
					</dl>
				{/if}

				{#if data.event.visitSections?.length}
					<section class="mt-8 space-y-5" aria-label="Additional event information">
						{#each data.event.visitSections as section}
							<div>
								<h2 class="text-xl text-brand-text">{section.title}</h2>
								<p class="body-copy-sm mt-2">{section.copy}</p>
							</div>
						{/each}
					</section>
				{/if}

				{#if data.event.sourceUrl && data.event.sourceUrl !== data.event.ticketUrl}
					<div class="mt-8 flex flex-wrap gap-3">
						<a href={data.event.sourceUrl} target="_blank" rel="noreferrer" class="button-secondary">
							More information
						</a>
					</div>
				{/if}

			</div>

			<div class="space-y-6">
				{#if data.event.imageSrc}
					<div class="overflow-hidden rounded-xl border border-brand-border bg-brand-primaryDark/10 shadow-sm">
						<img
							src={data.event.imageSrc}
							alt={data.event.imageAlt ?? data.event.title}
							style:object-position={data.event.imagePosition ?? 'center'}
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

				{#if data.event.imageCredit}
					<p class="text-xs leading-6 text-brand-muted">Image: {data.event.imageCredit}</p>
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

			</div>
		</div>
	</div>
</article>

<NewsletterSignup
	{form}
	source="event"
	heading="Never miss what’s happening in Long Eaton"
/>

{#if data.event.relatedLinks?.length || data.event.relatedDates?.length}
	<section class="section-surface">
		<div class="container-shell pb-8">
			{#if data.event.relatedLinks?.length}
				<nav class="surface-card p-6" aria-label="Related Long Eaton pages">
					<h2 class="text-2xl text-brand-text">More in Long Eaton</h2>
					<div class="mt-5 flex flex-wrap gap-3">
						{#each data.event.relatedLinks as link}
							<a href={link.href} class="button-secondary">{link.label}</a>
						{/each}
					</div>
				</nav>
			{/if}

			{#if data.event.relatedDates?.length}
				<div class="surface-card mt-8 p-6">
					<h2 class="text-2xl text-brand-text">Related dates</h2>
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
	</section>
{/if}
