<script lang="ts">
	import type { EventItem } from '$types/content';
	import { formatEventDate } from '$utils/format';

	export let event: EventItem;

	const isThisWeekend = (date?: string) => {
		if (!date) {
			return false;
		}

		const eventDate = new Date(date);
		const now = new Date();
		const day = now.getDay();
		const daysUntilSaturday = (6 - day + 7) % 7;
		const saturday = new Date(now);
		saturday.setHours(0, 0, 0, 0);
		saturday.setDate(now.getDate() + daysUntilSaturday);

		const sunday = new Date(saturday);
		sunday.setDate(saturday.getDate() + 1);
		sunday.setHours(23, 59, 59, 999);

		return eventDate >= saturday && eventDate <= sunday;
	};

	$: badgeLabel = isThisWeekend(event.date) ? 'This Weekend' : '';
</script>

<article class="relative h-full w-full overflow-hidden rounded-[1.9rem]">
	{#if event.imageSrc}
		<div class="absolute inset-0 bg-brand-primaryDark">
			<img
				src={event.imageSrc}
				alt=""
				aria-hidden="true"
				decoding="async"
				class="absolute inset-0 h-full w-full scale-[1.03] object-cover opacity-40 blur-[12px]"
			/>
			<img
				src={event.imageSrc}
				alt={event.imageAlt ?? event.title}
				decoding="async"
				class={`absolute inset-0 h-full w-full ${
					event.imageFit === 'contain'
						? 'object-contain bg-white/92 p-5 pt-12 sm:p-6 sm:pt-16 lg:inset-y-0 lg:right-0 lg:left-auto lg:bg-white/95 lg:p-8 lg:pl-[48%]'
						: 'object-cover object-center sm:object-right-center lg:inset-y-0 lg:right-0 lg:left-auto lg:object-contain lg:p-8 lg:pl-[48%]'
				}`}
			/>
		</div>
	{:else}
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_30%),linear-gradient(135deg,rgba(1,36,190,0.95),rgba(7,61,255,0.72))]"></div>
	{/if}

	<div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,12,39,0.04)_0%,rgba(2,12,39,0.12)_24%,rgba(2,12,39,0.62)_58%,rgba(2,12,39,0.92)_100%)] lg:bg-[linear-gradient(90deg,rgba(2,12,39,0.92)_0%,rgba(2,12,39,0.82)_28%,rgba(2,12,39,0.42)_58%,rgba(2,12,39,0.12)_100%)]"></div>
	<div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_26%,rgba(2,12,39,0.26)_52%,rgba(2,12,39,0.58)_100%)] lg:bg-[linear-gradient(180deg,rgba(2,12,39,0.08)_0%,rgba(2,12,39,0.22)_42%,rgba(2,12,39,0.7)_100%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%)]"></div>

	<div class="relative z-10 flex h-full items-end">
		<div class="w-full max-w-3xl p-4 pb-8 pt-8 sm:p-8 sm:pb-24 lg:p-12">
			<div class="max-w-xl rounded-[1.5rem] border border-white/14 bg-slate-950/24 p-5 backdrop-blur-[6px] sm:max-w-2xl sm:p-6 lg:rounded-[1.65rem] lg:bg-slate-950/22 lg:p-7">
				{#if badgeLabel}
					<p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100/85">{badgeLabel}</p>
				{/if}
				<p class={`${badgeLabel ? 'mt-4' : ''} text-sm font-medium text-white/72`}>{formatEventDate(event)}</p>
				<h1 class="mt-4 max-w-[13ch] text-[1.85rem] leading-[0.98] text-white sm:text-[2.55rem] lg:text-[3rem]">
					{event.title}
				</h1>
				<p class="hero-excerpt mt-4 max-w-[34ch] text-sm leading-7 text-white/84 sm:text-base">
					{event.excerpt}
				</p>
				<div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
					<a href={`/events/${event.slug}`} class="button-primary w-full sm:w-auto">View Event</a>
				</div>
			</div>
		</div>
	</div>
</article>
<style>
	.hero-excerpt {
		line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	:global(.button-primary) {
		box-shadow: 0 12px 28px rgba(7, 61, 255, 0.28);
	}
</style>
