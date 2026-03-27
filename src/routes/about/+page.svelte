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



<section class="section-muted">
	<div class="container-shell section-space">
		<div class="surface-card p-8 sm:p-10">
			<h2 class="text-brand-text">What you'll find here</h2>
			<div class="mt-6 grid gap-5 md:grid-cols-2">
				<div class="inset-panel p-5">
					<p class="eyebrow">Town guide</p>
					<p class="body-copy mt-3">Events, business listings, local ideas and a simple way to keep up with town updates.</p>
				</div>
				<div class="inset-panel p-5">
					<p class="eyebrow">Clear structure</p>
					<p class="body-copy mt-3">Consistent layouts, readable cards and sections that stay easy to browse on mobile and desktop.</p>
				</div>
				<div class="inset-panel p-5">
					<p class="eyebrow">Useful details</p>
					<p class="body-copy mt-3">Dates, locations, categories and direct links all stay close to the information people need most.</p>
				</div>
				<div class="inset-panel p-5">
					<p class="eyebrow">Local perspective</p>
					<p class="body-copy mt-3">A guide shaped around everyday town life, from one-off events to dependable places people return to regularly.</p>
				</div>
			</div>
		</div>
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
