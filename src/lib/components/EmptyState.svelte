<script lang="ts">
	export let title: string;
	export let message: string;
</script>

<div class="surface-card p-8 text-center sm:p-10">
	<div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
		<span class="text-sm font-bold uppercase tracking-[0.2em]">None</span>
	</div>
	<h3 class="font-display text-2xl text-ink">{title}</h3>
	<p class="mx-auto mt-3 max-w-lg text-base leading-7 text-ink/70">{message}</p>
</div>
