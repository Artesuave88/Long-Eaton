<script lang="ts">
  import { businesses } from "$data/businesses";

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const activeLetters = new Set(
    businesses
      .map((business) => business.name.trim().charAt(0).toUpperCase())
      .filter((letter) => /^[A-Z]$/.test(letter)),
  );
</script>

<div class="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-9 xl:grid-cols-[repeat(13,minmax(0,1fr))]">
  {#each letters as letter}
    {@const isActive = activeLetters.has(letter)}
    <a
      href={`/businesses?letter=${letter}`}
      class={`flex h-12 items-center justify-center rounded-2xl border text-sm font-semibold transition ${
        isActive
          ? "border-brand-accent/25 bg-white text-brand-text hover:border-brand-accent hover:text-brand-accent"
          : "border-brand-border/70 bg-brand-surface/55 text-brand-muted"
      }`}
      aria-label={`Browse businesses starting with ${letter}`}
    >
      {letter}
    </a>
  {/each}
</div>
