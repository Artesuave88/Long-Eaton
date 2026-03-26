<script lang="ts">
	export let eyebrow = '';
	export let title: string;
	export let copy = '';
	export let align: 'left' | 'center' = 'left';
</script>

<div class:text-center={align === 'center'} class="mb-8 max-w-2xl">
	{#if eyebrow}
		<p class="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">{eyebrow}</p>
	{/if}
	<h2 class="font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
	{#if copy}
		<p class="mt-4 text-base leading-7 text-ink/75 sm:text-lg">{copy}</p>
	{/if}
</div>
