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
			class="w-full rounded-2xl border-white/70 bg-white/90 px-4 py-3 text-sm text-ink placeholder:text-ink/45 focus:border-brand-400 focus:ring-brand-300"
		/>
		<span class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/40">Search</span>
	</div>
</label>
