<script lang="ts">
	import { navLinks } from '$data/site';

	export let open = false;
</script>

{#if open}
	<div class="border-t border-white/10 bg-brand-primaryDark shadow-sm lg:hidden">
		<nav class="container-shell flex flex-col gap-1 py-4" aria-label="Mobile">
			{#each navLinks as link}
				<a
					href={link.href}
					class="rounded-lg px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
				>
					{link.label}
				</a>
			{/each}
		</nav>
	</div>
{/if}
