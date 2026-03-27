<script lang="ts">
	export let title: string;
	export let copy: string;
	export let primaryHref = '/contact';
	export let primaryLabel = 'Get in touch';
	export let secondaryHref = '/events';
	export let secondaryLabel = 'See what’s on';
</script>

<section class="overflow-hidden rounded-md border border-brand-900 bg-brand-800 px-6 py-10 text-white shadow-card sm:px-8 lg:px-12">
	<div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
		<div class="max-w-2xl">
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">Get listed</p>
			<h2 class="mt-3 font-display text-3xl sm:text-4xl">{title}</h2>
			<p class="mt-4 text-base leading-8 text-white/80">{copy}</p>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
			<a
				href={primaryHref}
				class="button-secondary"
			>
				{primaryLabel}
			</a>
			<a
				href={secondaryHref}
				class="inline-flex items-center justify-center rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
			>
				{secondaryLabel}
			</a>
		</div>
	</div>
</section>
