<script lang="ts">
	import { navLinks, site } from '$data/site';
</script>

<footer class="border-t border-brand-border bg-brand-surface">
	<div class="container-shell grid gap-10 py-12 sm:py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
		<div>
			<a href="/" class="inline-flex items-center" aria-label="Love Long Eaton home">
				<img
					src="/le-logo.png"
					alt="Love Long Eaton"
					class="h-14 w-auto sm:h-16"
				/>
			</a>
		
			<p class="mt-4 text-sm text-brand-muted">
				Site built by
				<a
					href="https://www.midasweb.org/"
					class="underline decoration-brand-border underline-offset-4 hover:text-brand-accent"
				>
					Midas Web
				</a>.
			</p>
		</div>

		<div>
			<h2 class="eyebrow">Explore</h2>
			<div class="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
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
