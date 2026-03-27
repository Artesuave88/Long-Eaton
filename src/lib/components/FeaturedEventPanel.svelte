<script lang="ts">
  import type { EventItem } from "$types/content";
  import { formatEventDate } from "$utils/format";
  import ImagePlaceholder from "./ImagePlaceholder.svelte";

  export let event: EventItem;
</script>

<article class="surface-card h-[40rem] overflow-hidden border border-brand-border/80 bg-white shadow-[0_24px_70px_rgba(7,18,41,0.08)] sm:h-[38rem] lg:h-[30rem]">
  <div class="grid h-full gap-0 lg:grid-cols-[1.1fr_0.9fr]">
    <div class="flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
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

    {#if event.imageSrc}
      <div class="flex h-full min-h-[18rem] items-center justify-center border-t border-brand-border lg:border-l lg:border-t-0">
        <img
          src={event.imageSrc}
          alt={event.imageAlt ?? event.title}
          class="max-h-56 w-full object-contain lg:max-h-64"
        />
      </div>
    {:else}
      <ImagePlaceholder
        label={event.image?.label ?? event.imageLabel}
        style={event.image?.style ?? event.imageStyle}
        className="min-h-[18rem] w-full rounded-none border-t border-brand-border lg:min-h-full lg:border-l lg:border-t-0"
      />
    {/if}
  </div>
</article>
