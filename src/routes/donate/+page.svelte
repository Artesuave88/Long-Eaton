<script lang="ts">
	import { page } from '$app/stores';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let amount = 10;
	const suggestedAmounts = [5, 10, 20, 50];
</script>

<svelte:head>
	<title>Donate | Love Long Eaton</title>
	<meta
		name="description"
		content="Support Love Long Eaton with a secure donation through Stripe."
	/>
</svelte:head>

<section class="section-space">
	<div class="container-shell">
		<div class="mx-auto max-w-2xl">
			<div class="mb-8 text-center">
				<p class="eyebrow">Support local</p>
				<h1 class="mt-3">Help us celebrate Long Eaton</h1>
				<p class="body-copy mx-auto mt-4 max-w-xl">
					Your contribution helps us keep sharing local events, independent businesses and the
					people and places that make Long Eaton special.
				</p>
			</div>

			<div class="surface-card p-6 sm:p-8">
				{#if $page.url.searchParams.get('cancelled')}
					<div
						class="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
						role="status"
					>
						Your donation was cancelled. You have not been charged.
					</div>
				{/if}
				{#if form?.message}
					<div
						class="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
						role="alert"
					>
						{form.message}
					</div>
				{/if}

				<form method="POST" action="?/checkout">
					<fieldset>
						<legend class="text-lg font-semibold text-brand-text">Choose your donation</legend>
						<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
							{#each suggestedAmounts as suggested}
								<button
									type="button"
									class:border-brand-primary={amount === suggested}
									class:bg-brand-section={amount === suggested}
									class="rounded-xl border border-brand-border px-4 py-3 font-semibold text-brand-text transition hover:border-brand-primary"
									on:click={() => (amount = suggested)}
								>
									£{suggested}
								</button>
							{/each}
						</div>
					</fieldset>

					<label for="amount" class="mt-6 block text-sm font-semibold text-brand-text">
						Or enter another amount
					</label>
					<div class="relative mt-2">
						<span class="pointer-events-none absolute inset-y-0 left-4 flex items-center font-semibold">£</span>
						<input
							id="amount"
							name="amount"
							type="number"
							bind:value={amount}
							min="1"
							max="10000"
							step="0.01"
							required
							class="field-input pl-9"
							aria-describedby="amount-help"
						/>
					</div>
					<p id="amount-help" class="mt-2 text-xs text-brand-muted">Minimum donation £1.</p>

					<button type="submit" class="button-primary mt-6 w-full py-3">
						Donate securely with Stripe
					</button>
					<p class="mt-4 text-center text-xs text-brand-muted">
						You’ll be taken to Stripe’s secure checkout to complete your payment.
					</p>
				</form>
			</div>
		</div>
	</div>
</section>
