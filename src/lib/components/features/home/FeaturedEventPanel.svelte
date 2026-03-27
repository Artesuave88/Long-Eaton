<script lang="ts">
  import type { EventItem } from "$types/content";
  import { formatEventDate } from "$utils/format";
  import ImagePlaceholder from "../../ui/ImagePlaceholder.svelte";

  export let event: EventItem;
</script>

<article class="panel-card">
  <div class="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
    {#if event.imageSrc}
      <div class="flex items-center justify-center border-b border-brand-border lg:border-b-0 lg:border-l">
        <img
          src={event.imageSrc}
          alt={event.imageAlt ?? event.title}
          decoding="async"
          class="h-full w-full object-cover"
        />
      </div>
    {:else}
      <ImagePlaceholder
        label={event.image?.label ?? event.imageLabel}
        style={event.image?.style ?? event.imageStyle}
        className="rounded-none border-b border-brand-border lg:order-2 lg:border-b-0 lg:border-l"
      />
    {/if}

    <div class="panel-content flex h-full flex-col justify-between lg:order-1">
      <div>
        <p class="eyebrow">Featured event</p>
        <h2 class="mt-3 max-w-[14ch] text-brand-text">{event.title}</h2>
        <p class="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">
          {formatEventDate(event)}
        </p>
        <p class="mt-5 max-w-2xl text-base leading-8 text-brand-muted sm:text-[1.05rem]">
          {event.excerpt}
        </p>
        <p class="mt-4 text-sm font-medium text-brand-muted">{event.location}</p>
      </div>

      <div class="mt-8 flex flex-wrap gap-3">
        <a href={`/events/${event.slug}`} class="button-primary">View event details</a>
        <a href="/events" class="button-secondary">All events</a>
      </div>
    </div>
  </div>
</article>
