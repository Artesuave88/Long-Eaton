<script lang="ts">
	export let eyebrow = 'Love Long Eaton';
	export let title: string;
	export let copy: string;
	export let primaryHref = '/events';
	export let primaryLabel = 'See what’s on';
	export let secondaryHref = '/businesses';
	export let secondaryLabel = 'Browse businesses';
</script>

<section class="overflow-hidden rounded-md border border-ink/15 bg-hero-glow px-6 py-10 shadow-card sm:px-8 sm:py-14 lg:px-12 lg:py-16">
	<div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
		<div class="max-w-2xl">
			<p class="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-brand-200">{eyebrow}</p>
			<h1 class="font-display text-4xl uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
				{title}
			</h1>
			<p class="mt-5 max-w-xl text-base leading-8 text-white/76 sm:text-lg">{copy}</p>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<a
					href={primaryHref}
					class="button-secondary"
				>
					{primaryLabel}
				</a>
				<a
					href={secondaryHref}
					class="rounded-sm border border-white/24 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
				>
					{secondaryLabel}
				</a>
			</div>
		</div>

		<div class="surface-card relative overflow-hidden border-white/10 bg-white/8 p-5 backdrop-blur-sm sm:p-6">
			<div class="absolute inset-x-8 top-0 h-20 bg-sun/10 blur-2xl"></div>
			<div class="space-y-4">
				<div class="rounded-sm border border-white/10 bg-black/25 p-5 text-white">
					<p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">This week</p>
					<p class="mt-3 font-display text-2xl">Markets, walks and a few good reasons to stay local</p>
					<p class="mt-3 text-sm leading-6 text-white/80">
						Check what's on, pick a stop for lunch and make a proper afternoon of it.
					</p>
				</div>
				<div class="grid gap-4 sm:grid-cols-2">
					<div class="rounded-sm border border-white/10 bg-white/90 p-5">
						<p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Local guide</p>
						<p class="mt-2 text-lg font-semibold text-ink">Shops, events and places worth knowing about</p>
					</div>
					<div class="rounded-sm border border-white/10 bg-brand-50 p-5">
						<p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral">Growing listings</p>
						<p class="mt-2 text-lg font-semibold text-ink">Real local businesses are starting to be added</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
