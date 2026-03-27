<script lang="ts">
  import {
    businessBrowseGroups,
    getBusinessBrowseGroup,
    businesses,
  } from "$data/businesses";

  const counts = new Map(
    businessBrowseGroups.map((group) => [
      group.slug,
      businesses.filter((business) => getBusinessBrowseGroup(business) === group.slug).length,
    ]),
  );
</script>

<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
  {#each businessBrowseGroups as group}
    {@const count = counts.get(group.slug) ?? 0}
    <a
      href={`/businesses?group=${group.slug}`}
      class={`surface-card group block p-5 transition duration-200 ${
        count > 0
          ? "surface-card-hover border-brand-border/80 bg-white"
          : "border-dashed border-brand-border/70 bg-brand-surface/55"
      }`}
      aria-label={`Browse ${group.label} businesses`}
    >
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="text-xl text-brand-text transition duration-200 group-hover:text-brand-accent">
            {group.label}
          </h3>
          <p class="mt-2 text-sm leading-7 text-brand-muted">
            {count > 0 ? `${count} listing${count === 1 ? "" : "s"} to browse.` : "More listings can be added here."}
          </p>
        </div>
        <span
          class={`inline-flex min-w-10 items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
            count > 0
              ? "bg-brand-accent/10 text-brand-accent"
              : "bg-white text-brand-muted"
          }`}
        >
          {count}
        </span>
      </div>
    </a>
  {/each}
</div>
