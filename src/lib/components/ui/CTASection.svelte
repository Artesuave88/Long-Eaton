<script lang="ts">
	export let eyebrow = 'Get in touch';
	export let title: string;
	export let copy: string;
	export let primaryHref = '/contact';
	export let primaryLabel = 'Get in touch';
	export let secondaryHref = '/events';
	export let secondaryLabel = 'See what’s on';
</script>

<section class="panel-card">
	<div class="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
		<div class="max-w-2xl">
			<p class="eyebrow">{eyebrow}</p>
			<h2 class="mt-3 text-brand-text">{title}</h2>
			<p class="body-copy mt-4">{copy}</p>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
			<a href={primaryHref} class="button-primary">
				{primaryLabel}
			</a>
			<a href={secondaryHref} class="button-secondary">
				{secondaryLabel}
			</a>
		</div>
	</div>
</section>
