<script lang="ts">
	export let categories: string[] = [];
	export let value = 'All';
</script>

<div class="flex flex-wrap gap-2">
	{#each categories as category}
		<button
			type="button"
			class={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
				value === category
					? 'border-brand-primary bg-brand-primary text-white shadow-sm'
					: 'border-brand-border bg-brand-surface text-brand-text hover:border-brand-primary/20 hover:bg-brand-section'
			}`}
			aria-pressed={value === category}
			on:click={() => (value = category)}
		>
			{category}
		</button>
	{/each}
</div>
