<script lang="ts">
	import { navLinks } from '$data/site';
	import MobileNav from './MobileNav.svelte';

	let open = false;
</script>

<header class="sticky top-0 z-50 border-b border-ink/10 bg-sand/90 backdrop-blur-md">
	<div class="container-shell flex items-center justify-between gap-4 py-4">
		<a href="/" class="flex flex-col leading-none text-ink">
			<span class="font-display text-2xl uppercase tracking-[0.08em]">Love Long Eaton</span>
			<span class="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/55">Town guide</span>
		</a>

		<nav class="hidden items-center gap-2 lg:flex" aria-label="Primary">
			{#each navLinks as link}
				<a
					href={link.href}
					class="rounded-sm border border-transparent px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-ink/72 hover:border-ink/10 hover:bg-white hover:text-ink"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<button
			type="button"
			class="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ink/10 bg-white text-ink lg:hidden"
			aria-expanded={open}
			aria-label="Toggle navigation"
			on:click={() => (open = !open)}
		>
			<div class="space-y-1.5">
				<span class="block h-0.5 w-5 bg-current"></span>
				<span class="block h-0.5 w-5 bg-current"></span>
				<span class="block h-0.5 w-5 bg-current"></span>
			</div>
		</button>
	</div>

	<MobileNav bind:open />
</header>
