<script lang="ts">
	export let value = '';
	export let placeholder = 'Search';
</script>

<label class="block">
	<span class="sr-only">{placeholder}</span>
	<div class="relative">
		<input bind:value type="search" placeholder={placeholder} class="field-input pr-20" />
		<span class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted">Search</span>
	</div>
</label>
