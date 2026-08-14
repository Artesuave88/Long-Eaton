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
						headingLevel="h1"
					/>
					<div class="mt-8 max-w-2xl space-y-5 text-base leading-8 text-brand-muted sm:text-[1.05rem]">
						<p>
							Whether it’s a weekend event, a local class, or somewhere new to try, the
							aim is to make everything easy to find without having to search across
							multiple places.
						</p>
						<p>
							The guide is independently published and maintained by Midas Web. Listings are
							selected for their relevance to Long Eaton and the surrounding area; inclusion
							is not a recommendation or a guarantee from an organiser.
						</p>
						<p>
							We check practical details against organisers, venues and official public sources,
							then link to the original source wherever one is available. Dates, prices and
							opening arrangements can still change, so readers should confirm details before
							making a special journey.
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

<section class="section-muted">
	<div class="container-shell section-space">
		<div class="grid gap-6 lg:grid-cols-3">
			<article class="surface-card p-6 sm:p-7">
				<p class="eyebrow">How we work</p>
				<h2 class="mt-2 text-2xl text-brand-text">Local and practical</h2>
				<p class="body-copy-sm mt-4">We prioritise information that helps someone make a real local plan: when an event happens, where to find a place, what it offers and where to verify it.</p>
			</article>
			<article class="surface-card p-6 sm:p-7">
				<p class="eyebrow">Independence</p>
				<h2 class="mt-2 text-2xl text-brand-text">Clear about listings</h2>
				<p class="body-copy-sm mt-4">Businesses and organisers can suggest additions, but they do not receive favourable editorial treatment. Any future paid placement will be clearly labelled.</p>
			</article>
			<article class="surface-card p-6 sm:p-7">
				<p class="eyebrow">Corrections</p>
				<h2 class="mt-2 text-2xl text-brand-text">Help us keep it accurate</h2>
				<p class="body-copy-sm mt-4">If something is wrong or out of date, send the page address and the corrected detail through our contact form. We review correction requests against a reliable source.</p>
			</article>
		</div>
		<p class="mt-7 text-sm text-brand-muted">Read our full <a href="/editorial-policy" class="link-subtle">editorial policy</a> or <a href="/contact" class="link-subtle">report a correction</a>.</p>
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
