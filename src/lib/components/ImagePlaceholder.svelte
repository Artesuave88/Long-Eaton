<script lang="ts">
	export let label: string;
	export let style = 'from-brand-300 via-brand-100 to-sand';
	export let className = '';
</script>

<div
	class={`relative overflow-hidden rounded-sm bg-gradient-to-br ${style} ${className}`}
	aria-hidden="true"
>
	<div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.38),transparent_34%,rgba(22,22,22,0.08)_100%)]"></div>
	<div class="absolute bottom-4 left-4 rounded-sm border border-white/40 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
		{label}
	</div>
</div>
