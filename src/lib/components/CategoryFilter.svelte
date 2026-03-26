<script lang="ts">
	export let categories: string[] = [];
	export let selected = 'All';
</script>

<div class="flex flex-wrap gap-2">
	{#each categories as category}
		<button
			type="button"
			class={`rounded-full px-4 py-2 text-sm font-semibold transition ${
				selected === category
					? 'bg-brand-700 text-white shadow-lg shadow-brand-900/15'
					: 'bg-white text-ink hover:bg-brand-100'
			}`}
			on:click={() => (selected = category)}
		>
			{category}
		</button>
	{/each}
</div>
