<script lang="ts">
  import type { ActionData, PageData } from "./$types";

  export let data: PageData;
  export let form: ActionData;

  let query = "";
  let sortOrder = "Newest first";

  const annualSalary = (value: string) => {
    const amounts = [...value.matchAll(/£\s*([\d,]+(?:\.\d+)?)/g)].map((match) =>
      Number(match[1].replaceAll(",", ""))
    );
    const amount = Math.max(...amounts, 0);
    const period = value.toLowerCase();
    if (period.includes("hour")) return amount * 37.5 * 52;
    if (period.includes("day")) return amount * 5 * 52;
    if (period.includes("week")) return amount * 52;
    if (period.includes("month")) return amount * 12;
    return amount;
  };

  const distanceFromLongEaton = (value: string) => {
    const location = value.toLowerCase().replace(/\s+/g, " ");
    const places: Array<[RegExp, number]> = [
      [/long eaton|ng10|de72\s*2/, 0],
      [/sawley/, 1.5],
      [/toton|sandiacre/, 2],
      [/stapleford|breaston|chilwell/, 3],
      [/beeston/, 4],
    ];
    return places.find(([pattern]) => pattern.test(location))?.[1] ?? 99;
  };

  $: filteredJobs = data.jobs
    .filter((job) => {
      const text = `${job.title} ${job.employer} ${job.location}`.toLowerCase();
      return text.includes(query.toLowerCase().trim());
    })
    .sort((a, b) => {
      if (sortOrder === "Salary: high to low") return annualSalary(b.salary) - annualSalary(a.salary);
      if (sortOrder === "Salary: low to high") return annualSalary(a.salary) - annualSalary(b.salary);
      if (sortOrder === "Closest first") return distanceFromLongEaton(a.location) - distanceFromLongEaton(b.location);
      const aDate = new Date(a.posted).getTime() || 0;
      const bDate = new Date(b.posted).getTime() || 0;
      return sortOrder === "Oldest first" ? aDate - bDate : bDate - aDate;
    });

  const clearFilters = () => {
    query = "";
    sortOrder = "Newest first";
  };

  const dateLabel = (value: string) => {
    if (!value) return "";
    const date = new Date(value);
    return Number.isNaN(date.getTime())
      ? ""
      : date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  };
</script>

<svelte:head>
  <title>Jobs in Long Eaton | Love Long Eaton</title>
  <meta
    name="description"
    content="Find jobs, apprenticeships and local employment opportunities in and around Long Eaton."
  />
</svelte:head>

<section class="bg-brand-primaryDark text-white">
  <div class="container-shell py-12 sm:py-16">
    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">Jobs</p>
    <div class="mt-4 grid gap-8 lg:grid-cols-[1fr_24rem] lg:items-end">
      <div>
        <h1 class="max-w-3xl text-white">Find your next opportunity close to home</h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-white/70">
          Current vacancies, trusted local searches and apprenticeships within three miles of Long Eaton.
        </p>
      </div>
      <a href="#submit-a-job" class="inline-flex justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-primaryDark hover:bg-brand-section">
        Advertise a local vacancy
      </a>
    </div>
  </div>
</section>

<section class="section-surface">
  <div class="container-shell section-space">
    {#if data.jobs.length}
      <div class="section-link-row">
        <div>
          <p class="eyebrow">Latest opportunities</p>
          <h2 class="mt-2">Live vacancy listings</h2>
        </div>
        <p class="hidden text-sm text-brand-muted sm:block">Always apply on the source website</p>
      </div>

      <div class="surface-card my-7 grid gap-4 bg-brand-section/60 p-5 md:grid-cols-[minmax(16rem,1fr)_14rem]">
        <div>
          <label for="job-search" class="text-sm font-semibold">Search vacancies</label>
          <input id="job-search" bind:value={query} class="field-input mt-2" placeholder="Job title, employer or location…" />
        </div>
        <div>
          <label for="job-sort" class="text-sm font-semibold">Sort by</label>
          <select id="job-sort" bind:value={sortOrder} class="field-input mt-2">
            <option>Newest first</option>
            <option>Oldest first</option>
            <option>Salary: high to low</option>
            <option>Salary: low to high</option>
            <option>Closest first</option>
          </select>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p class="text-sm font-medium text-brand-muted" aria-live="polite">
          Showing {filteredJobs.length} {filteredJobs.length === 1 ? "vacancy" : "vacancies"}
        </p>
        {#if query || sortOrder !== "Newest first"}
          <button type="button" class="button-link" onclick={clearFilters}>Reset search</button>
        {/if}
      </div>
      {#if filteredJobs.length}
        <div class="grid gap-4">
          {#each filteredJobs as job}
          <article class="surface-card p-5 sm:p-6">
            <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="chip">{job.source}</span>
                  {#if dateLabel(job.posted)}
                    <span class="text-xs font-medium text-brand-muted">Posted {dateLabel(job.posted)}</span>
                  {/if}
                </div>
                <h3 class="mt-3">{job.title}</h3>
                <p class="mt-2 text-sm font-semibold text-brand-primary">{job.employer}</p>
                <div class="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-brand-muted">
                  <span>{job.location}</span>
                  <span>{job.salary}</span>
                </div>
              </div>
              <a href={job.url} target="_blank" rel="noopener noreferrer" class="button-primary shrink-0">
                View vacancy <span class="sr-only">: {job.title}</span>
              </a>
            </div>
          </article>
          {/each}
        </div>
      {:else}
        <div class="surface-card p-6 text-center sm:p-8">
          <h3>No vacancies match your search</h3>
          <p class="mt-2 text-sm text-brand-muted">Try a broader job title, employer or location.</p>
          <button type="button" class="button-secondary mt-4" onclick={clearFilters}>Reset search</button>
        </div>
      {/if}

      {#if data.liveLocalJobsEnabled || data.reedEnabled || data.joobleEnabled}
        <p class="mt-5 text-xs text-brand-muted">
          General vacancy listings
          {#if data.liveLocalJobsEnabled}
            powered by <a class="underline" href="https://www.adzuna.co.uk/" target="_blank" rel="noopener noreferrer">Adzuna</a>{data.reedEnabled ? " and " : "."}
          {/if}
          {#if data.reedEnabled}
            supplied by <a class="underline" href="https://www.reed.co.uk/" target="_blank" rel="noopener noreferrer">Reed</a>{data.joobleEnabled ? " and " : "."}
          {/if}
          {#if data.joobleEnabled}
            <a class="underline" href="https://uk.jooble.org/" target="_blank" rel="noopener noreferrer">Jooble</a>.
          {/if}
        </p>
      {/if}
    {:else}
      <div class="surface-card p-6 sm:p-8">
        <p class="eyebrow">Local vacancies</p>
        <h2 class="mt-2">Search trusted job sources</h2>
        <p class="mt-3 body-copy">Use the verified searches below while our live local feed is being connected.</p>
      </div>
    {/if}

  </div>
</section>

<section id="submit-a-job" class="section-muted scroll-mt-28">
  <div class="container-shell section-space">
    <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p class="eyebrow">For employers</p>
        <h2 class="mt-2">Submit a local vacancy</h2>
        <p class="mt-4 body-copy">
          Long Eaton employers can send us a role for review. Submission is free, and applicants will follow the application instructions you provide.
        </p>
        <p class="mt-4 text-sm text-brand-muted">
          We review submissions before publication and may edit them for clarity.
        </p>
      </div>

      <div class="surface-card p-6 sm:p-8">
        {#if form?.submitted}
          <div class="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
            Thanks — your vacancy has been sent for review.
          </div>
        {:else}
          <h3>Vacancy details</h3>
          {#if form?.submitError}
            <div class="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800">{form.submitError}</div>
          {/if}
          <form method="POST" action="?/submit" class="mt-5 grid gap-5 sm:grid-cols-2">
            <div class="hidden" aria-hidden="true">
              <label for="website">Website</label>
              <input id="website" name="website" tabindex="-1" autocomplete="off" />
            </div>
            <div>
              <label for="contactName" class="mb-2 block text-sm font-semibold">Contact name *</label>
              <input id="contactName" name="contactName" required class="field-input" value={form?.values?.contactName ?? ""} />
            </div>
            <div>
              <label for="email" class="mb-2 block text-sm font-semibold">Contact email *</label>
              <input id="email" name="email" type="email" required class="field-input" value={form?.values?.email ?? ""} />
            </div>
            <div>
              <label for="employer" class="mb-2 block text-sm font-semibold">Employer *</label>
              <input id="employer" name="employer" required class="field-input" value={form?.values?.employer ?? ""} />
            </div>
            <div>
              <label for="title" class="mb-2 block text-sm font-semibold">Job title *</label>
              <input id="title" name="title" required class="field-input" value={form?.values?.title ?? ""} />
            </div>
            <div>
              <label for="location" class="mb-2 block text-sm font-semibold">Location *</label>
              <input id="location" name="location" required class="field-input" placeholder="e.g. Long Eaton, NG10" value={form?.values?.location ?? ""} />
            </div>
            <div>
              <label for="closingDate" class="mb-2 block text-sm font-semibold">Closing date</label>
              <input id="closingDate" name="closingDate" type="date" class="field-input" value={form?.values?.closingDate ?? ""} />
            </div>
            <div class="sm:col-span-2">
              <label for="applyInstructions" class="mb-2 block text-sm font-semibold">How to apply *</label>
              <textarea id="applyInstructions" name="applyInstructions" rows="3" required class="field-input" placeholder="Add a website link, phone number, email address or in-person instructions">{form?.values?.applyInstructions ?? ""}</textarea>
            </div>
            <div class="sm:col-span-2">
              <label for="details" class="mb-2 block text-sm font-semibold">Salary and other details</label>
              <textarea id="details" name="details" rows="4" class="field-input">{form?.values?.details ?? ""}</textarea>
            </div>
            <div class="sm:col-span-2">
              <button class="button-primary" type="submit">Submit vacancy for review</button>
            </div>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>
