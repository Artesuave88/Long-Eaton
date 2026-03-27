<script lang="ts">
	import { navLinks } from '$data/site';

	export let open = false;
</script>

{#if open}
	<div class="border-t border-ink/10 bg-[#f4eee6] shadow-lg lg:hidden">
		<nav class="container-shell flex flex-col py-4" aria-label="Mobile">
			{#each navLinks as link}
				<a
					href={link.href}
					class="rounded-sm px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-ink hover:bg-white"
				>
					{link.label}
				</a>
			{/each}
		</nav>
	</div>
{/if}
