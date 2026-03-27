<script lang="ts">
	export let title: string;
	export let message: string;
</script>

<div class="panel-card p-8 text-center sm:p-10">
	<div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-brand-border bg-brand-section text-brand-primary">
		<span class="text-sm font-bold uppercase tracking-[0.2em]">Info</span>
	</div>
	<h3 class="text-2xl text-brand-text">{title}</h3>
	<p class="mx-auto mt-3 max-w-lg text-base leading-8 text-brand-muted">{message}</p>
</div>
