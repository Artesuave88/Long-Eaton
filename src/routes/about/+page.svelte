<script lang="ts">
	import { CTASection, SectionHeading } from '$components';
</script>

<svelte:head>
	<title>About | Love Long Eaton</title>
	<meta
		name="description"
		content="Learn what Love Long Eaton is for and how the local guide is being built."
	/>
</svelte:head>

<section class="section-surface">
	<div class="container-shell section-space">
		<article class="panel-card">
			<div class="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
				<div class="panel-content flex h-full flex-col justify-center">
					<SectionHeading
						eyebrow="About"
						title="Built to make local life easier to find"
						copy="Love Long Eaton is built to highlight what’s going on locally, from events and activities to the businesses that make the town what it is."
					/>
					<div class="mt-8 max-w-2xl space-y-5 text-base leading-8 text-brand-muted sm:text-[1.05rem]">
						<p>
							Whether it’s a weekend event, a local class, or somewhere new to try, the
							aim is to make everything easy to find without having to search across
							multiple places.
						</p>
						<p>
							The focus is on keeping things simple, useful, and local. As more
							businesses and events are added, the site will continue to grow into a
							better reflection of what Long Eaton has to offer.
						</p>
					</div>
				</div>

				<div class="relative min-h-[18rem] overflow-hidden border-t border-brand-border bg-brand-primaryDark lg:min-h-full lg:border-l lg:border-t-0">
					<div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,41,0.08),rgba(7,18,41,0.3))]"></div>
					<img
						src="/band-camp.jpg"
						alt="A local band camp activity in Long Eaton"
						loading="lazy"
						decoding="async"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</article>
	</div>
</section>

<section class="section-surface">
	<div class="container-shell section-space">
		<CTASection
			title="Want to add a listing or suggest an update?"
			copy="If you've got a business, event or useful local detail to add, get in touch."
			primaryHref="/contact"
			primaryLabel="Contact us"
			secondaryHref="/businesses"
			secondaryLabel="Browse listings"
		/>
	</div>
</section>
