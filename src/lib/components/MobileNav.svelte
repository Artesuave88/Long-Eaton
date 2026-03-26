<script lang="ts">
	import { navLinks } from '$data/site';

	export let open = false;
</script>

{#if open}
	<div class="border-t border-brand-100 bg-white shadow-lg lg:hidden">
		<nav class="container-shell flex flex-col py-4" aria-label="Mobile">
			{#each navLinks as link}
				<a
					href={link.href}
					class="rounded-2xl px-4 py-3 text-sm font-semibold text-ink hover:bg-brand-50"
				>
					{link.label}
				</a>
			{/each}
		</nav>
	</div>
{/if}
