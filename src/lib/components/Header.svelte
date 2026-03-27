<script lang="ts">
	import { navLinks } from '$data/site';
	import MobileNav from './MobileNav.svelte';

	let open = false;
</script>

<header class="sticky top-0 z-50 bg-brand-primaryDark text-white shadow-sm">
	<div class="container-shell flex items-center justify-between gap-4 py-4">
		<a href="/" class="flex flex-col leading-none text-white">
			<span class="font-display text-[1.65rem] tracking-[-0.03em]">Love Long Eaton</span>
			<span class="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">Town guide</span>
		</a>

		<nav class="hidden items-center gap-2 lg:flex" aria-label="Primary">
			{#each navLinks as link}
				<a
					href={link.href}
					class="rounded-lg px-4 py-2 text-sm font-medium text-white/80 hover:text-white"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<button
			type="button"
			class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white lg:hidden"
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
