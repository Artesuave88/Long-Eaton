<script lang="ts">
	export let eyebrow = 'Get in touch';
	export let title: string;
	export let copy: string;
	export let primaryHref = '/contact';
	export let primaryLabel = 'Get in touch';
	export let secondaryHref = '/events';
	export let secondaryLabel = 'See what’s on';
	export let imageSrc: string | undefined = undefined;
	export let imageAlt = '';
</script>

<section class="panel-card overflow-hidden">
	{#if imageSrc}
		<div class="grid lg:grid-cols-[minmax(0,1fr)_18rem_auto] lg:items-stretch">
			<div class="order-2 px-6 py-8 sm:px-8 lg:order-1 lg:self-center lg:px-10 lg:py-10">
				<div class="max-w-2xl">
					<p class="eyebrow">{eyebrow}</p>
					<h2 class="mt-3 text-brand-text">{title}</h2>
					<p class="body-copy mt-4">{copy}</p>
				</div>
			</div>
			<div class="order-1 h-44 overflow-hidden lg:order-2 lg:h-auto lg:min-h-64">
				<img src={imageSrc} alt={imageAlt} class="h-full w-full object-cover" />
			</div>
			<div class="order-3 flex flex-col gap-3 px-6 pb-8 sm:flex-row sm:px-8 lg:self-center lg:flex-col lg:px-8 lg:py-10">
				<a href={primaryHref} class="button-primary">{primaryLabel}</a>
				<a href={secondaryHref} class="button-secondary">{secondaryLabel}</a>
			</div>
		</div>
	{:else}
		<div class="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
			<div class="max-w-2xl">
				<p class="eyebrow">{eyebrow}</p>
				<h2 class="mt-3 text-brand-text">{title}</h2>
				<p class="body-copy mt-4">{copy}</p>
			</div>
			<div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
				<a href={primaryHref} class="button-primary">{primaryLabel}</a>
				<a href={secondaryHref} class="button-secondary">{secondaryLabel}</a>
			</div>
		</div>
	{/if}
</section>
