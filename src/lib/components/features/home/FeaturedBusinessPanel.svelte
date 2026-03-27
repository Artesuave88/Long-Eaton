<script lang="ts">
  import type { BusinessItem } from "$types/content";
  import ImagePlaceholder from "../../ui/ImagePlaceholder.svelte";

  export let business: BusinessItem;
</script>

<article class="panel-card">
  <div class="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
    <div class="panel-content flex h-full flex-col justify-between">
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
      <div class="flex items-center justify-center border-b border-brand-border lg:border-b-0 lg:border-l">
        <img
          src={business.imageSrc}
          alt={business.imageAlt ?? business.name}
          loading="lazy"
          decoding="async"
          class="h-full max-h-48 w-full object-contain sm:max-h-56 lg:max-h-56"
        />
      </div>
    {:else}
      <ImagePlaceholder
        label={business.imageLabel}
        style={business.imageStyle}
        className="rounded-none border-b border-brand-border lg:border-b-0 lg:border-l"
      />
    {/if}
  </div>
</article>
