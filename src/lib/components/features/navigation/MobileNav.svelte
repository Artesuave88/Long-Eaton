<script lang="ts">
	import { primaryNavLinks } from '$data/site';

	export let open = false;
</script>

{#if open}
	<div class="border-t border-white/10 bg-brand-primaryDark shadow-sm lg:hidden">
		<nav class="container-shell flex flex-col gap-1 py-4" aria-label="Mobile">
			{#each primaryNavLinks as link}
				<a
					href={link.href}
					on:click={() => (open = false)}
					class="rounded-lg px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/donate"
				on:click={() => (open = false)}
				class="mt-2 inline-flex items-center justify-center rounded-lg bg-white px-4 py-3 text-sm font-semibold text-brand-primaryDark"
			>
				Donate
			</a>
		</nav>
	</div>
{/if}
