<script lang="ts">
	export let value = '';
	export let placeholder = 'Search';
</script>

<label class="block">
	<span class="sr-only">{placeholder}</span>
	<div class="relative">
		<input
			bind:value
			type="search"
			placeholder={placeholder}
			class="field-input"
		/>
		<span class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/40">Search</span>
	</div>
</label>
