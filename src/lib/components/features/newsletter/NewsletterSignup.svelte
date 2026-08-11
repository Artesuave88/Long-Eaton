<script lang="ts">
	export let form:
		| {
				newsletterSuccess?: boolean;
				newsletterError?: string;
				newsletterEmail?: string;
		  }
		| null
		| undefined = undefined;
	export let source: 'home' | 'event' | 'guide' = 'home';
	export let embedded = false;
	export let heading = 'Never miss what’s happening in Long Eaton';
	export let copy = 'Get a short weekly email featuring upcoming events, activities and useful local updates.';

	const headingId = `newsletter-${source}-heading`;
	const websiteId = `newsletter-${source}-website`;
	const emailId = `newsletter-${source}-email`;
</script>

<section class="section-surface" aria-labelledby={headingId}>
	<div class:container-shell={!embedded} class="py-8">
		<div class="overflow-hidden rounded-2xl bg-brand-primaryDark text-white shadow-card">
			<div class="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10">
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">Your local weekend guide</p>
					<h2 id={headingId} class="mt-3 text-3xl text-white">{heading}</h2>
					<p class="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
						{copy}
					</p>
				</div>

				{#if form?.newsletterSuccess}
					<div class="rounded-xl border border-emerald-300/30 bg-emerald-400/15 p-5" role="status">
						<p class="font-semibold text-white">You’re on the list!</p>
						<p class="mt-1 text-sm text-white/75">Look out for your first Long Eaton weekend roundup.</p>
					</div>
				{:else}
					<form method="POST" action="?/subscribe" class="space-y-3">
						<input name="source" type="hidden" value={source} />
						<div class="hidden" aria-hidden="true">
							<label for={websiteId}>Website</label>
							<input id={websiteId} name="website" type="text" tabindex="-1" autocomplete="off" />
						</div>
						<div class="flex flex-col gap-3 sm:flex-row">
							<label for={emailId} class="sr-only">Email address</label>
							<input
								id={emailId}
								name="email"
								type="email"
								value={form?.newsletterEmail ?? ''}
								placeholder="Your email address"
								autocomplete="email"
								inputmode="email"
								required
								class="min-h-12 min-w-0 flex-1 rounded-xl border border-white/20 bg-white px-4 py-3 text-base text-brand-text placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-300/30"
							/>
							<button type="submit" class="min-h-12 whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-primaryDark transition hover:bg-sky-50">
								Send me the weekly guide
							</button>
						</div>
						<label class="flex items-start gap-2 text-xs leading-5 text-white/70">
							<input name="consent" value="yes" type="checkbox" required class="mt-1 rounded border-white/30 text-brand-primary focus:ring-sky-300" />
							<span>I’d like to receive the Love Long Eaton email roundup. Unsubscribe at any time.</span>
						</label>
						{#if form?.newsletterError}
							<p class="rounded-lg bg-red-400/15 px-3 py-2 text-sm text-red-100" role="alert">
								{form.newsletterError}
							</p>
						{/if}
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
