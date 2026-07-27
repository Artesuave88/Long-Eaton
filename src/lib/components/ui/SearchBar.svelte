<script lang="ts">
	export let value = '';
	export let placeholder = 'Search';
	export let label = placeholder;
	export let id: string | undefined = undefined;
</script>

<label class="block">
	<span class="sr-only">{label}</span>
	<div class="relative">
		<svg
			class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"
		>
			<circle cx="11" cy="11" r="7"></circle>
			<path d="m20 20-4-4"></path>
		</svg>
		<input
			{id}
			bind:value
			type="search"
			placeholder={placeholder}
			class="field-input"
			style="padding-left: 3rem; padding-right: 3rem;"
		/>
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
