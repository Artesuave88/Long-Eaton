<script lang="ts">
  import type { VisitSection } from '$types/content';
  export let sections: VisitSection[] = [];
</script>

{#if sections.length}
  <section class="mt-8" aria-label="Planning your visit">
    <h2 class="text-2xl text-brand-text">Planning your visit</h2>
    <div class="mt-5 space-y-5">
      {#each sections as section}
        <div class="surface-card p-6">
          <h3 class="text-xl text-brand-text">{section.title}</h3>
          <p class="body-copy-sm mt-3">{section.copy}</p>
        </div>
      {/each}
    </div>
  </section>
{/if}
