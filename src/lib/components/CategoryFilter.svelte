<script lang="ts">
	export let categories: string[] = [];
	export let selected = 'All';
</script>

<div class="flex flex-wrap gap-2">
	{#each categories as category}
		<button
			type="button"
			class={`rounded-sm border px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition ${
				selected === category
					? 'border-brand-700 bg-brand-700 text-white shadow-lg shadow-brand-900/15'
					: 'border-ink/10 bg-white text-ink hover:border-brand-300 hover:bg-brand-50'
			}`}
			on:click={() => (selected = category)}
		>
			{category}
		</button>
	{/each}
</div>
