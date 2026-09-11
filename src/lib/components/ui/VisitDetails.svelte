<script lang="ts">
  import type { ContentSource, VisitSection } from '$types/content';
  export let sections: VisitSection[] = [];
  export let sources: ContentSource[] = [];
  export let checkedOn: string | undefined = undefined;
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
{#if sources.length}
  <aside class="mt-8 border-t border-brand-border pt-5 text-sm leading-7 text-brand-muted" aria-label="Information sources">
    <p class="font-semibold text-brand-text">Sources for these details{#if checkedOn} · Checked <time datetime={checkedOn}>{new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(checkedOn))}</time>{/if}</p>
    <ul class="mt-2 space-y-1">
      {#each sources as source}<li><a href={source.href} class="underline underline-offset-4 hover:text-brand-accent">{source.label}</a></li>{/each}
    </ul>
    <p class="mt-3">Arrangements can change. Confirm with the venue before travelling, or <a href="/contact" class="underline underline-offset-4 hover:text-brand-accent">send us a correction</a>.</p>
  </aside>
{/if}
