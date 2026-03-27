<script lang="ts">
	import type { EventItem } from '$types/content';
	import { formatDisplayDate } from '$utils/format';

	export let eyebrow = 'Love Long Eaton';
	export let title: string;
	export let copy: string;
	export let events: EventItem[] = [];
	export let primaryHref = '/events';
	export let primaryLabel = 'See what’s on';
	export let secondaryHref = '/businesses';
	export let secondaryLabel = 'Browse businesses';

	$: bannerEvents = events.length ? [...events, ...events] : [];
	$: useScrollingBanner = events.length > 1;
</script>

<section class="overflow-hidden rounded-xl border border-brand-border bg-brand-surface">
	<div class="grid gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
		<div class="max-w-2xl">
			<p class="eyebrow mb-4">{eyebrow}</p>
			<h1 class="max-w-3xl text-brand-text">{title}</h1>
			<p class="mt-5 max-w-xl text-base leading-8 text-brand-muted sm:text-lg">{copy}</p>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<a href={primaryHref} class="button-primary">
					{primaryLabel}
				</a>
				<a href={secondaryHref} class="button-secondary">
					{secondaryLabel}
				</a>
			</div>
		</div>

		<div class="overflow-hidden rounded-xl border border-brand-border bg-brand-section/70 p-4">
			<div class="mb-4 flex items-center justify-between gap-4">
				<p class="eyebrow">Featured events</p>
				<a href="/events" class="button-subtle">Full calendar</a>
			</div>

			{#if useScrollingBanner}
				<div class="hero-banner-mask">
					<div class="hero-banner-track">
						{#each bannerEvents as event, index}
							<a
								href={`/events/${event.slug}`}
								class="surface-card hero-banner-card flex min-h-[14rem] w-[17.5rem] flex-col justify-between p-5"
								aria-label={`View event: ${event.title}`}
							>
								<div>
									<p class="eyebrow">{event.category}</p>
									<h2 class="mt-3 text-xl text-brand-text">{event.title}</h2>
									<p class="mt-3 text-sm font-medium text-brand-muted">
										{formatDisplayDate(event.date)} • {event.location}
									</p>
									<p class="body-copy-sm mt-4">{event.excerpt}</p>
								</div>
								<div class="mt-5 flex items-center justify-between gap-3">
									<span class="text-sm font-semibold text-brand-accent">See details</span>
									<span class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
										{index < events.length ? 'Now' : 'Next'}
									</span>
								</div>
							</a>
						{/each}
					</div>
				</div>
			{:else if events.length}
				<div class="surface-card p-5">
					<p class="eyebrow">{events[0].category}</p>
					<h2 class="mt-3 text-xl text-brand-text">{events[0].title}</h2>
					<p class="mt-3 text-sm font-medium text-brand-muted">
						{formatDisplayDate(events[0].date)} • {events[0].location}
					</p>
					<p class="body-copy-sm mt-4">{events[0].excerpt}</p>
					<a href={`/events/${events[0].slug}`} class="button-subtle mt-5">See event details</a>
				</div>
			{:else}
				<div class="surface-card p-5">
					<p class="body-copy-sm">Browse the events calendar to see what’s happening across Long Eaton.</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.hero-banner-mask {
		overflow: hidden;
	}

	.hero-banner-track {
		display: flex;
		gap: 1rem;
		width: max-content;
		animation: hero-scroll 36s linear infinite;
	}

	.hero-banner-mask:hover .hero-banner-track {
		animation-play-state: paused;
	}

	.hero-banner-card {
		flex-shrink: 0;
	}

	@keyframes hero-scroll {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(calc(-50% - 0.5rem));
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-banner-track {
			animation: none;
		}
	}
</style>
