<script lang="ts">
	import { site } from '$data/site';
</script>

<svelte:head>
	<title>Contact | Love Long Eaton</title>
	<meta
		name="description"
		content="Get in touch about featuring a business, submitting an event or supporting Love Long Eaton."
	/>
</svelte:head>

<section class="container-shell section-space">
	<div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
		<div>
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Contact</p>
			<h1 class="mt-3 font-display text-4xl text-ink sm:text-5xl">Let’s put more of Long Eaton on the map</h1>
			<p class="mt-5 max-w-xl text-lg leading-8 text-ink/72">
				Use this starter contact page for business submissions, event enquiries and partnership conversations.
			</p>

			<div class="mt-8 space-y-5">
				<div class="surface-card p-6">
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Email</p>
					<a href={`mailto:${site.email}`} class="mt-2 inline-flex text-lg font-semibold text-ink hover:text-brand-700">
						{site.email}
					</a>
				</div>
				<div class="surface-card p-6">
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Phone</p>
					<a href={`tel:${site.phone}`} class="mt-2 inline-flex text-lg font-semibold text-ink hover:text-brand-700">
						{site.phone}
					</a>
				</div>
				<div class="surface-card p-6">
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Town base</p>
					<p class="mt-2 text-lg font-semibold text-ink">{site.address}</p>
				</div>
			</div>
		</div>

		<div class="surface-card p-6 sm:p-8">
			<h2 class="font-display text-3xl text-ink">Send an enquiry</h2>
			<form class="mt-6 space-y-5">
				<div>
					<label for="name" class="mb-2 block text-sm font-semibold text-ink">Name</label>
					<input id="name" type="text" class="w-full rounded-2xl border-white/70 bg-sand px-4 py-3 focus:border-brand-400 focus:ring-brand-300" />
				</div>
				<div>
					<label for="email" class="mb-2 block text-sm font-semibold text-ink">Email</label>
					<input id="email" type="email" class="w-full rounded-2xl border-white/70 bg-sand px-4 py-3 focus:border-brand-400 focus:ring-brand-300" />
				</div>
				<div>
					<label for="subject" class="mb-2 block text-sm font-semibold text-ink">Enquiry type</label>
					<select id="subject" class="w-full rounded-2xl border-white/70 bg-sand px-4 py-3 focus:border-brand-400 focus:ring-brand-300">
						<option>Add my business</option>
						<option>Submit an event</option>
						<option>Partnership enquiry</option>
						<option>General message</option>
					</select>
				</div>
				<div>
					<label for="message" class="mb-2 block text-sm font-semibold text-ink">Message</label>
					<textarea id="message" rows="6" class="w-full rounded-2xl border-white/70 bg-sand px-4 py-3 focus:border-brand-400 focus:ring-brand-300"></textarea>
				</div>
				<button type="submit" class="inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800">
					Send enquiry
				</button>
				<p class="text-sm text-ink/55">This is a presentational MVP form and is ready to connect to your preferred form handling later.</p>
			</form>
		</div>
	</div>
</section>
