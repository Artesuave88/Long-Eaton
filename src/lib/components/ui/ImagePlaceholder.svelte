<script lang="ts">
	export let label: string;
	export let style = 'bg-brand-section';
	export let className = '';
</script>

<div class={`relative overflow-hidden rounded-2xl ${style} ${className}`} aria-hidden="true">
	<div class="absolute inset-0 border border-brand-border"></div>
	<div class="absolute bottom-4 left-4 rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
		{label}
	</div>
</div>
