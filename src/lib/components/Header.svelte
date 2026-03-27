<script lang="ts">
	import { navLinks } from '$data/site';
	import MobileNav from './MobileNav.svelte';

	let open = false;
</script>

<header class="sticky top-0 z-50 border-b border-white/60 bg-sand/90 backdrop-blur-lg">
	<div class="container-shell flex items-center justify-between gap-4 py-4">
		<a href="/" class="flex flex-col leading-none text-ink">
			<span class="font-display text-2xl">Love Long Eaton</span>
			<span class="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">Town guide</span>
		</a>

		<nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
			{#each navLinks as link}
				<a
					href={link.href}
					class="rounded-full px-4 py-2 text-sm font-semibold text-ink/72 hover:bg-white hover:text-ink"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<button
			type="button"
			class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink lg:hidden"
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
