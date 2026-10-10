<script lang="ts">
  import { filterVisitPlans, type VisitPlan } from '$data/visit-plans';
  export let plans: VisitPlan[];
  let setting: 'all' | VisitPlan['setting'] = 'all';
  $: matches = filterVisitPlans(plans, setting);
</script>

<section class="mt-10 rounded-2xl border border-brand-border bg-brand-section p-6 sm:p-8" aria-labelledby="visit-planner-heading">
  <p class="eyebrow">Make a local plan</p>
  <h2 id="visit-planner-heading" class="mt-3 text-2xl text-brand-text">Choose an outdoor outing</h2>
  <p class="body-copy-sm mt-3 max-w-3xl">These suggested plans start when you arrive. Allow extra time for travel. Choose a setting to narrow the options, or compare all three below.</p>
  <div class="mt-5 max-w-sm">
    <label for="visit-setting" class="block text-sm font-semibold text-brand-text">Where would you like to spend time?</label>
    <select id="visit-setting" bind:value={setting} class="mt-2 w-full rounded-lg border-brand-border bg-white text-brand-text">
      <option value="all">All outdoor options</option>
      <option value="park">In a park</option>
      <option value="water">By the water</option>
    </select>
  </div>
  <p class="mt-5 text-sm text-brand-muted" aria-live="polite" aria-atomic="true">{matches.length} {matches.length === 1 ? 'plan' : 'plans'} to consider</p>
  <div class="mt-5 grid gap-5 lg:grid-cols-3">
    {#each matches as plan (plan.id)}
      <article class="surface-card p-5">
        <h3 class="text-xl text-brand-text">{plan.title}</h3>
        <p class="body-copy-sm mt-3">{plan.summary}</p>
        <p class="mt-4 text-sm leading-7 text-brand-muted"><strong class="text-brand-text">Start:</strong> {plan.start}</p>
        <ol class="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-brand-muted">
          {#each plan.steps as step}<li>{step}</li>{/each}
        </ol>
        <p class="mt-4 text-sm leading-7 text-brand-muted"><strong class="text-brand-text">Before you go:</strong> {plan.check}</p>
        <a href={plan.href} class="link-subtle mt-4">Official visitor information</a>
      </article>
    {/each}
  </div>
  <noscript><p class="body-copy-sm mt-4">All plans are shown above. Filtering is available when JavaScript is enabled.</p></noscript>
</section>
