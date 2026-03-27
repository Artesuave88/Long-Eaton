<script lang="ts">
	import type { EventItem } from '$types/content';
	import { formatEventDate } from '$utils/format';

	export let eyebrow = 'Love Long Eaton';
	export let title: string;
	export let copy: string;
	export let events: EventItem[] = [];
	export let primaryHref = '/events';
	export let primaryLabel = 'See what’s on';
	export let secondaryHref = '/businesses';
	export let secondaryLabel = 'Browse businesses';

	const slideSeconds = 6;

	$: slideshowEvents = events.length ? events : [];
	$: totalSlides = slideshowEvents.length || 1;
	$: animationDuration = `${totalSlides * slideSeconds}s`;
	$: hasSlides = slideshowEvents.length > 0;
	$: useAnimation = slideshowEvents.length > 1;
</script>

<section class="hero-shell relative overflow-hidden rounded-[1.75rem] border border-brand-border bg-brand-primaryDark text-white">
	{#if hasSlides}
		<div class="absolute inset-0">
			{#each slideshowEvents as event, index}
				<article
					class={`hero-slide absolute inset-0 ${useAnimation ? 'hero-slide-animated' : 'hero-slide-static'}`}
					style={`animation-duration: ${animationDuration}; animation-delay: ${index * slideSeconds}s;`}
					aria-hidden={index === 0 ? 'false' : 'true'}
				>
					{#if event.imageSrc}
						<img
							src={event.imageSrc}
							alt={event.imageAlt ?? event.title}
							class="absolute inset-0 h-full w-full object-cover"
						/>
					{:else}
						<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_35%),linear-gradient(135deg,rgba(1,36,190,0.9),rgba(7,61,255,0.72))]"></div>
					{/if}
					<div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,41,0.32),rgba(7,18,41,0.72)_48%,rgba(7,18,41,0.92))]"></div>
				</article>
			{/each}
		</div>
	{:else}
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_35%),linear-gradient(135deg,rgba(1,36,190,0.92),rgba(7,61,255,0.72))]"></div>
	{/if}

	<div class="relative z-10 flex min-h-[32rem] flex-col justify-end p-6 sm:min-h-[36rem] sm:p-8 lg:min-h-[40rem] lg:p-12">
		{#if hasSlides}
			<div class="hero-content-wrap relative">
				{#each slideshowEvents as event, index}
					<div
						class={`hero-copy-panel max-w-4xl ${useAnimation ? 'hero-copy-animated' : 'hero-copy-static'}`}
						style={`animation-duration: ${animationDuration}; animation-delay: ${index * slideSeconds}s;`}
					>
						<div class="flex flex-wrap items-center gap-2">
							<p class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
								{eyebrow}
							</p>
							<span class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
								{event.category}
							</span>
						</div>

						<div class="mt-5 max-w-3xl">
							<h1 class="text-white">{title}</h1>
							<p class="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">{copy}</p>
						</div>

						<div class="mt-8 max-w-2xl rounded-2xl border border-white/15 bg-slate-950/35 p-5 backdrop-blur-sm sm:p-6">
							<p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">Coming up</p>
							<h2 class="mt-3 text-2xl leading-tight text-white sm:text-[2rem]">{event.title}</h2>
							<p class="mt-3 text-sm font-medium text-white/80">
								{formatEventDate(event)} • {event.location}
							</p>
							<p class="mt-4 text-sm leading-7 text-white/85 sm:text-base">{event.excerpt}</p>
							<div class="mt-6 flex flex-wrap gap-3">
								<a href={`/events/${event.slug}`} class="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-50">
									See event details
								</a>
								<a href={primaryHref} class="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
									{primaryLabel}
								</a>
								<a href={secondaryHref} class="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
									{secondaryLabel}
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>

			{#if slideshowEvents.length > 1}
				<div class="mt-8 flex flex-wrap gap-2">
					{#each slideshowEvents as event}
						<a
							href={`/events/${event.slug}`}
							class="rounded-full border border-white/15 bg-slate-950/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm hover:bg-slate-950/45"
						>
							{event.title}
						</a>
					{/each}
				</div>
			{/if}
		{:else}
			<div class="max-w-3xl">
				<p class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
					{eyebrow}
				</p>
				<h1 class="mt-5 text-white">{title}</h1>
				<p class="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">{copy}</p>
				<div class="mt-8 flex flex-wrap gap-3">
					<a href={primaryHref} class="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-50">
						{primaryLabel}
					</a>
					<a href={secondaryHref} class="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
						{secondaryLabel}
					</a>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.hero-shell {
		box-shadow: 0 24px 70px rgba(7, 18, 41, 0.2);
	}

	.hero-slide,
	.hero-copy-panel {
		opacity: 0;
	}

	.hero-slide-static,
	.hero-copy-static {
		opacity: 1;
	}

	.hero-slide-animated {
		animation-name: hero-fade;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.hero-copy-animated {
		animation-name: hero-copy-fade;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.hero-content-wrap {
		min-height: 24rem;
	}

	.hero-copy-panel {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	@keyframes hero-fade {
		0% {
			opacity: 0;
		}

		4% {
			opacity: 1;
		}

		29% {
			opacity: 1;
		}

		33% {
			opacity: 0;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes hero-copy-fade {
		0% {
			opacity: 0;
			transform: translateY(12px);
		}

		5% {
			opacity: 1;
			transform: translateY(0);
		}

		28% {
			opacity: 1;
			transform: translateY(0);
		}

		33% {
			opacity: 0;
			transform: translateY(12px);
		}

		100% {
			opacity: 0;
			transform: translateY(12px);
		}
	}

	@media (max-width: 639px) {
		.hero-content-wrap {
			min-height: 27rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-slide-animated,
		.hero-copy-animated {
			animation: none;
		}

		.hero-slide-animated:first-child,
		.hero-copy-animated:first-child {
			opacity: 1;
			transform: none;
		}

		.hero-slide-animated:not(:first-child),
		.hero-copy-animated:not(:first-child) {
			display: none;
		}
	}
</style>
