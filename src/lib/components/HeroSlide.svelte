<script lang="ts">
	import type { EventItem } from '$types/content';
	import { formatEventDate } from '$utils/format';

	export let event: EventItem;
</script>

<article class="relative h-full w-full overflow-hidden rounded-[1.75rem]">
	{#if event.imageSrc}
		<img
			src={event.imageSrc}
			alt={event.imageAlt ?? event.title}
			class="absolute inset-0 h-full w-full object-cover"
		/>
	{:else}
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_30%),linear-gradient(135deg,rgba(1,36,190,0.95),rgba(7,61,255,0.72))]"></div>
	{/if}

	<div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,12,39,0.92)_0%,rgba(2,12,39,0.8)_32%,rgba(2,12,39,0.28)_62%,rgba(2,12,39,0.12)_100%)]"></div>
	<div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,12,39,0.15)_0%,rgba(2,12,39,0.5)_70%,rgba(2,12,39,0.72)_100%)]"></div>

	<div class="relative z-10 flex h-full items-end">
		<div class="w-full max-w-3xl p-5 sm:p-8 lg:p-12">
			<div class="max-w-2xl rounded-[1.5rem] border border-white/12 bg-slate-950/30 p-5 backdrop-blur-[6px] sm:p-7">
				<p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100/85">Featured event</p>
				<p class="mt-3 text-sm font-medium text-white/72">{formatEventDate(event)}</p>
				<h1 class="mt-3 text-white">{event.title}</h1>
				<p class="hero-excerpt mt-4 text-sm leading-7 text-white/84 sm:text-base">
					{event.excerpt}
				</p>
				<div class="mt-6 flex flex-wrap gap-3">
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
