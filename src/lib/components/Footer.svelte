<script lang="ts">
	import { navLinks, site } from '$data/site';
</script>

<footer class="border-t border-brand-border bg-brand-surface">
	<div class="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
		<div>
			<a href="/" class="font-display text-2xl tracking-[-0.03em] text-brand-text">Love Long Eaton</a>
			<p class="body-copy-sm mt-4 max-w-md">
				Local events, businesses and everyday places worth knowing about in Long Eaton.
			</p>
		</div>

		<div>
			<h2 class="eyebrow">Explore</h2>
			<div class="mt-4 flex flex-col gap-3">
				{#each navLinks as link}
					<a href={link.href} class="text-sm text-brand-muted hover:text-brand-accent">{link.label}</a>
				{/each}
			</div>
		</div>

		<div>
			<h2 class="eyebrow">Contact</h2>
			<div class="mt-4 space-y-3 text-sm text-brand-muted">
				<p>{site.address}</p>
				<p>
					<a href={`mailto:${site.email}`} class="hover:text-brand-accent">{site.email}</a>
				</p>
				<p>
					<a href={`tel:${site.phone}`} class="hover:text-brand-accent">{site.phone}</a>
				</p>
			</div>
		</div>
	</div>
</footer>
