<script lang="ts">
  import type { BusinessItem } from "$types/content";
  import ImagePlaceholder from "./ImagePlaceholder.svelte";

  export let business: BusinessItem;
</script>

<article class="surface-card overflow-hidden border border-brand-border/80 bg-white shadow-[0_24px_70px_rgba(7,18,41,0.08)]">
  <div class="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
    <div class="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
      <div>
        <p class="eyebrow">Business spotlight</p>
        <h2 class="mt-3 max-w-[14ch] text-brand-text">{business.name}</h2>
        <p class="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">
          {business.category}
        </p>
        <p class="mt-5 max-w-2xl text-base leading-8 text-brand-muted sm:text-[1.05rem]">
          {business.description}
        </p>
        <p class="mt-4 text-sm font-medium text-brand-muted">{business.location}</p>
      </div>

      <div class="mt-8 flex flex-wrap gap-3">
        <a href={`/businesses/${business.slug}`} class="button-primary">View business listing</a>
        <a href="/businesses" class="button-secondary">Browse directory</a>
      </div>
    </div>

    {#if business.imageSrc}
      <div class="flex min-h-[18rem] items-center justify-center border-t border-brand-border  lg:min-h-full lg:border-l lg:border-t-0">
        <img
          src={business.imageSrc}
          alt={business.imageAlt ?? business.name}
          class="max-h-56 w-full object-contain"
        />
      </div>
    {:else}
      <ImagePlaceholder
        label={business.imageLabel}
        style={business.imageStyle}
        className="min-h-[18rem] w-full rounded-none border-t border-brand-border lg:min-h-full lg:border-l lg:border-t-0"
      />
    {/if}
  </div>
</article>
