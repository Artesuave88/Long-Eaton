<script lang="ts">
	export let categories: string[] = [];
	export let selected = 'All';
</script>

<div class="flex flex-wrap gap-2">
	{#each categories as category}
		<button
			type="button"
			class={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
				selected === category
					? 'border-brand-primary bg-brand-primary text-white'
					: 'border-brand-border bg-brand-surface text-brand-text hover:bg-brand-section'
			}`}
			on:click={() => (selected = category)}
		>
			{category}
		</button>
	{/each}
</div>
