<script lang="ts">
  import { EmptyState, EventCard, SectionHeading } from "$components";
  import { sortedEvents } from "$data/events";
  import { getUpcomingEvents } from "$data/listings";

  const bankHolidayEvents = getUpcomingEvents(sortedEvents).filter((event) =>
    event.tags?.includes("Bank Holiday"),
  );
</script>

<svelte:head>
  <title>August Bank Holiday Events in Long Eaton | 31 August 2026</title>
  <meta
    name="description"
    content="Find events taking place in and around Long Eaton on Bank Holiday Monday, 31 August 2026, including live music, football and pub events."
  />
</svelte:head>

<section class="section-surface">
  <div class="container-shell section-space">
    <SectionHeading
      eyebrow="Monday 31 August 2026"
      title="Bank Holiday events in Long Eaton"
      copy="Make the most of Bank Holiday Monday with local live music, football and pub events. Follow the source link on each listing and check with the organiser before travelling."
      headingLevel="h1"
    />

    {#if bankHolidayEvents.length}
      <div class="section-grid">
        {#each bankHolidayEvents as event}
          <EventCard {event} />
        {/each}
      </div>
    {:else}
      <EmptyState
        title="This Bank Holiday has passed"
        message="Browse the main events page for the latest things happening around Long Eaton."
      />
    {/if}

    <div class="mt-8 flex flex-wrap gap-3">
      <a href="/events" class="button-primary">Browse all events</a>
      <a href="/things-to-do" class="button-secondary">Explore things to do</a>
    </div>
  </div>
</section>
