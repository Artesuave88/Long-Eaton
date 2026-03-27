<script lang="ts">
	export let eyebrow = '';
	export let title: string;
	export let copy = '';
	export let align: 'left' | 'center' = 'left';
</script>

<div class:text-center={align === 'center'} class="mb-8 max-w-2xl">
	{#if eyebrow}
		<p class="eyebrow mb-3">{eyebrow}</p>
	{/if}
	<h2 class="max-w-xl text-brand-text">{title}</h2>
	{#if copy}
		<p class="mt-4 max-w-xl text-base leading-8 text-brand-muted sm:text-[1.05rem]">{copy}</p>
	{/if}
</div>
