<script lang="ts">
	export let eyebrow = 'Love Long Eaton';
	export let title: string;
	export let copy: string;
	export let primaryHref = '/events';
	export let primaryLabel = 'See what’s on';
	export let secondaryHref = '/businesses';
	export let secondaryLabel = 'Browse businesses';
</script>

<section class="overflow-hidden rounded-xl border border-brand-border bg-brand-surface">
	<div class="grid gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12">
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

		<div class="grid gap-4 sm:grid-cols-2">
			<div class="surface-card p-5 sm:col-span-2">
				<p class="eyebrow">Featured now</p>
				<p class="mt-3 text-2xl text-brand-text">Long Eaton Carnival, town-centre events and local favourites across the week</p>
				<p class="body-copy-sm mt-3">
					Start with what’s on, follow it with somewhere good to stop, and use the guide to make the most of a day in town.
				</p>
			</div>
			<div class="surface-card p-5">
				<p class="eyebrow">What’s on</p>
				<p class="mt-2 text-lg font-semibold text-brand-text">Events, dates and town highlights worth planning around</p>
			</div>
			<div class="surface-card p-5">
				<p class="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">Discover</p>
				<p class="mt-2 text-lg font-semibold text-brand-text">Useful picks for weekends, evenings and everyday plans</p>
			</div>
		</div>
	</div>
</section>
