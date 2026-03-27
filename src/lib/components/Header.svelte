<script lang="ts">
	import { navLinks } from '$data/site';
	import MobileNav from './MobileNav.svelte';

	let open = false;
</script>

<header class="sticky top-0 z-50 bg-brand-primaryDark text-white shadow-sm">
	<div class="container-shell flex items-center justify-between gap-4 py-3">
		<a
			href="/"
			class="flex items-center"
			aria-label="Love Long Eaton home"
		>
			<img
				src="/le-logo.png"
				alt="Love Long Eaton"
				class="h-16 w-auto brightness-0 invert [filter:brightness(0)_invert(1)_drop-shadow(0_2px_10px_rgba(7,18,41,0.35))] sm:h-20"
			/>
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
