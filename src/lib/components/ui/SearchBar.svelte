<script lang="ts">
	export let value = '';
	export let placeholder = 'Search';
	export let label = placeholder;
</script>

<label class="block">
	<span class="sr-only">{label}</span>
	<div class="relative">
		<input bind:value type="search" placeholder={placeholder} class="field-input pr-12" />
		{#if value}
			<button
				type="button"
				class="absolute right-4 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-brand-muted transition hover:bg-brand-primaryDark/5 hover:text-brand-text"
				aria-label="Clear search"
				on:click={() => (value = '')}
			>
				<span aria-hidden="true" class="text-xl leading-none">&times;</span>
			</button>
		{/if}
	</div>
</label>

<style>
	input[type='search']::-webkit-search-decoration,
	input[type='search']::-webkit-search-cancel-button,
	input[type='search']::-webkit-search-results-button,
	input[type='search']::-webkit-search-results-decoration {
		-webkit-appearance: none;
		appearance: none;
	}
</style>
