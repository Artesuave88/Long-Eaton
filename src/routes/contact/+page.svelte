<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;

	const enquiryTypes = [
		'Add my business',
		'Submit an event',
		'Partnership enquiry',
		'General message'
	];
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
						<p class="eyebrow">Fastest route</p>
						<h2 class="mt-2 text-2xl text-brand-text">Use the enquiry form</h2>
						<p class="mt-3 text-sm leading-7 text-brand-muted">
							Messages are sent straight to the Love Long Eaton team at Midas Web.
						</p>
					</div>

				</div>
			</div>

			<div class="surface-card p-6 sm:p-8">
				<h2 class="text-brand-text">Send an enquiry</h2>
				{#if form?.success}
					<div class="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
						Thanks, your message has been sent.
					</div>
				{:else if form?.error}
					<div class="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
						{form.error}
					</div>
				{/if}
				<form class="mt-6 space-y-5" method="POST">
					<div class="hidden" aria-hidden="true">
						<label for="website">Website</label>
						<input id="website" name="website" type="text" tabindex="-1" autocomplete="off" />
					</div>
					<div>
						<label for="name" class="mb-2 block text-sm font-semibold text-brand-text">Name</label>
						<input id="name" name="name" type="text" class="field-input" value={form?.values?.name ?? ''} required />
					</div>
					<div>
						<label for="email" class="mb-2 block text-sm font-semibold text-brand-text">Email</label>
						<input id="email" name="email" type="email" class="field-input" value={form?.values?.email ?? ''} required />
					</div>
					<div>
						<label for="subject" class="mb-2 block text-sm font-semibold text-brand-text">Enquiry type</label>
						<select id="subject" name="subject" class="field-input" required>
							{#each enquiryTypes as enquiryType}
								<option selected={(form?.values?.subject ?? 'Add my business') === enquiryType}>{enquiryType}</option>
							{/each}
						</select>
					</div>
					<div>
						<label for="message" class="mb-2 block text-sm font-semibold text-brand-text">Message</label>
						<textarea id="message" name="message" rows="6" class="field-input" required>{form?.values?.message ?? ''}</textarea>
					</div>
					<button type="submit" class="button-primary">Send enquiry</button>
					<p class="text-sm text-brand-muted">We read every message and use enquiries to keep the guide accurate and useful.</p>
				</form>
			</div>
		</div>
	</div>
</section>
