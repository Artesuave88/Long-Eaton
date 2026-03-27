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
				class="absolute inset-0 h-full w-full scale-[1.03] object-cover opacity-40 blur-[12px]"
			/>
			<img
				src={event.imageSrc}
				alt={event.imageAlt ?? event.title}
				class="absolute inset-y-0 right-0 h-full w-full object-contain object-right-center p-4 pl-[38%] sm:p-6 sm:pl-[42%] lg:p-8 lg:pl-[48%]"
			/>
		</div>
	{:else}
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_30%),linear-gradient(135deg,rgba(1,36,190,0.95),rgba(7,61,255,0.72))]"></div>
	{/if}

	<div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,12,39,0.92)_0%,rgba(2,12,39,0.82)_28%,rgba(2,12,39,0.42)_58%,rgba(2,12,39,0.12)_100%)]"></div>
	<div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,12,39,0.08)_0%,rgba(2,12,39,0.22)_42%,rgba(2,12,39,0.7)_100%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%)]"></div>

	<div class="relative z-10 flex h-full items-end">
		<div class="w-full max-w-3xl p-5 sm:p-8 lg:p-12">
			<div class="max-w-2xl rounded-[1.65rem] border border-white/12 bg-slate-950/22 p-5 backdrop-blur-md sm:p-6 lg:p-7">
				{#if badgeLabel}
					<p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100/85">{badgeLabel}</p>
				{/if}
				<p class={`${badgeLabel ? 'mt-4' : ''} text-sm font-medium text-white/72`}>{formatEventDate(event)}</p>
				<h1 class="mt-4 max-w-[13ch] text-[2rem] leading-[0.98] text-white sm:text-[2.55rem] lg:text-[3rem]">
					{event.title}
				</h1>
				<p class="hero-excerpt mt-4 text-sm leading-7 text-white/84 sm:text-base">
					{event.excerpt}
				</p>
				<div class="mt-7 flex flex-wrap gap-3">
					<a href={`/events/${event.slug}`} class="button-primary">View Event</a>
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
