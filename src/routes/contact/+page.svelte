<script lang="ts">
	import { site } from '$data/site';
</script>

<svelte:head>
	<title>Contact | Love Long Eaton</title>
	<meta
		name="description"
		content="Get in touch to add a business, send in an event or ask about Love Long Eaton."
	/>
</svelte:head>

<section class="section-surface">
	<div class="container-shell section-space">
		<div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
			<div>
				<p class="eyebrow">Contact</p>
				<h1 class="mt-3 text-brand-text">Get in touch</h1>
				<p class="mt-5 max-w-xl text-lg leading-8 text-brand-muted">
					Use this page to send in a business, share an event or ask a general question about the site.
				</p>

				<div class="mt-8 space-y-5">
					<div class="surface-card p-6">
						<p class="eyebrow">Email</p>
						<a href={`mailto:${site.email}`} class="mt-2 inline-flex text-lg font-semibold text-brand-text hover:text-brand-accent">
							{site.email}
						</a>
					</div>

				</div>
			</div>

			<div class="surface-card p-6 sm:p-8">
				<h2 class="text-brand-text">Send an enquiry</h2>
				<form class="mt-6 space-y-5" on:submit|preventDefault>
					<div>
						<label for="name" class="mb-2 block text-sm font-semibold text-brand-text">Name</label>
						<input id="name" type="text" class="field-input" />
					</div>
					<div>
						<label for="email" class="mb-2 block text-sm font-semibold text-brand-text">Email</label>
						<input id="email" type="email" class="field-input" />
					</div>
					<div>
						<label for="subject" class="mb-2 block text-sm font-semibold text-brand-text">Enquiry type</label>
						<select id="subject" class="field-input">
							<option>Add my business</option>
							<option>Submit an event</option>
							<option>Partnership enquiry</option>
							<option>General message</option>
						</select>
					</div>
					<div>
						<label for="message" class="mb-2 block text-sm font-semibold text-brand-text">Message</label>
						<textarea id="message" rows="6" class="field-input"></textarea>
					</div>
					<button type="submit" class="button-primary">Send enquiry</button>
					<p class="text-sm text-brand-muted">We read every message and use enquiries to keep the guide accurate and useful.</p>
				</form>
			</div>
		</div>
	</div>
</section>
