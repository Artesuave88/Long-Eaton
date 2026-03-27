<script lang="ts">
	import { navLinks, site } from '$data/site';
</script>

<footer class="border-t border-brand-100 bg-white/85">
	<div class="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
		<div>
			<a href="/" class="font-display text-2xl text-ink">Love Long Eaton</a>
			<p class="mt-4 max-w-md text-sm leading-7 text-ink/70">
				Local events, businesses and everyday places worth knowing about in Long Eaton.
			</p>
		</div>

		<div>
			<h2 class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Explore</h2>
			<div class="mt-4 flex flex-col gap-3">
				{#each navLinks as link}
					<a href={link.href} class="text-sm text-ink/72 hover:text-brand-700">{link.label}</a>
				{/each}
			</div>
		</div>

		<div>
			<h2 class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Contact</h2>
			<div class="mt-4 space-y-3 text-sm text-ink/72">
				<p>{site.address}</p>
				<p>
					<a href={`mailto:${site.email}`} class="hover:text-brand-700">{site.email}</a>
				</p>
				<p>
					<a href={`tel:${site.phone}`} class="hover:text-brand-700">{site.phone}</a>
				</p>
				<p class="pt-2 text-ink/55">Social links can be added here once live accounts are ready.</p>
			</div>
		</div>
	</div>
</footer>
