<script lang="ts">
	export let label: string;
	export let style = 'from-brand-200 via-white to-sand';
	export let className = '';
</script>

<div
	class={`relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${style} ${className}`}
	aria-hidden="true"
>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.85),transparent_30%)]"></div>
	<div class="absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
		{label}
	</div>
</div>
