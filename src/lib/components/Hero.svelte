<script lang="ts">
	export let eyebrow = 'Love Long Eaton';
	export let title: string;
	export let copy: string;
	export let primaryHref = '/events';
	export let primaryLabel = 'See what’s on';
	export let secondaryHref = '/businesses';
	export let secondaryLabel = 'Browse businesses';
</script>

<section class="overflow-hidden rounded-[2rem] bg-hero-glow px-6 py-10 shadow-card sm:px-8 sm:py-14 lg:px-12 lg:py-16">
	<div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
		<div class="max-w-2xl">
			<p class="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">{eyebrow}</p>
			<h1 class="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
				{title}
			</h1>
			<p class="mt-5 max-w-xl text-base leading-8 text-ink/75 sm:text-lg">{copy}</p>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<a
					href={primaryHref}
					class="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800"
				>
					{primaryLabel}
				</a>
				<a
					href={secondaryHref}
					class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-brand-100"
				>
					{secondaryLabel}
				</a>
			</div>
		</div>

		<div class="surface-card relative overflow-hidden p-5 sm:p-6">
			<div class="absolute inset-x-8 top-0 h-24 rounded-b-full bg-sun/20 blur-3xl"></div>
			<div class="grid gap-4 sm:grid-cols-2">
				<div class="rounded-[1.5rem] bg-brand-700 p-5 text-white">
					<p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">This week</p>
					<p class="mt-3 font-display text-2xl">Markets, park days and canal walks</p>
					<p class="mt-3 text-sm leading-6 text-white/80">
						Easy reasons to spend more time local and discover what’s happening next.
					</p>
				</div>
				<div class="space-y-4">
					<div class="rounded-[1.5rem] bg-sand p-5">
						<p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Independent town</p>
						<p class="mt-2 text-lg font-semibold text-ink">Food, shopping and friendly local service</p>
					</div>
					<div class="rounded-[1.5rem] bg-white p-5">
						<p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral">Make a day of it</p>
						<p class="mt-2 text-lg font-semibold text-ink">Explore green spaces, high street finds and community events</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
