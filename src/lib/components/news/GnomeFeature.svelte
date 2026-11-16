<script lang="ts">
  import type { NewsItem } from '$types/content';
  import { formatDisplayDate } from '$utils/format';

  export let article: NewsItem;
  type Photo = NonNullable<NewsItem['gallery']>[number];
  $: photos = article.gallery ?? [];
  $: portraits = [
    { title: 'A little piece of family history', name: 'Norman & Smee', copy: article.content[4], photo: photos.find((p) => p.id === 'old-friends') },
    { title: 'By royal appointment', name: 'The royal residents', copy: article.content[5], photo: photos.find((p) => p.id === 'royal-remembrance') }
  ];
</script>

{#snippet photograph(photo: Photo, portrait = false)}
  <figure class:portrait>
    <a href={photo.src} target="_blank" rel="noreferrer" aria-label={`View full photograph: ${photo.alt} (opens in a new tab)`}>
      <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
    </a>
    <figcaption>{photo.caption}<span>Photo: {photo.credit}</span></figcaption>
  </figure>
{/snippet}

<div class="gnome-feature">
  <header class="feature-header">
    <div class="headline">
      <p class="kicker"><span aria-hidden="true">✦</span> Small island. Big personalities.</p>
      <h1>No place like <em>gnome.</em></h1>
      <p class="standfirst">Meet the little residents making a big impression in Long Eaton.</p>
      <p class="deck">{article.excerpt}</p>
      <div class="byline">Love Long Eaton <span aria-hidden="true">/</span> {formatDisplayDate(article.date)}</div>
      <a class="story-link" href="#island-story">Come on in <span aria-hidden="true">↓</span></a>
    </div>
    <figure class="hero-photo">
      <a href={article.imageSrc} target="_blank" rel="noreferrer" aria-label="View the island residents photograph in a new tab">
        <img src={article.imageSrc} alt={article.imageAlt} fetchpriority="high" width="2048" height="1554" />
      </a>
      <figcaption>A few of Long Eaton’s most colourful neighbours.<span>Photo: {article.imageCredit}</span></figcaption>
    </figure>
  </header>

  <nav class="chapter-nav" aria-label="In this feature">
    <span>Explore the island</span>
    <a href="#island-story">The beginning</a>
    <a href="#meet-the-residents">The residents</a>
    <a href="#island-album">The photo album</a>
    <a href="#a-name-of-their-own">The petition</a>
  </nav>

  <section id="island-story" class="opening chapter" aria-labelledby="beginning-title">
    <aside class="island-note">
      <p class="kicker">Welcome to</p>
      <p class="island-name">Gnome<br />Man’s Land</p>
      <p class="place">The train station roundabout · Long Eaton</p>
      <dl>
        <div><dt>150+</dt><dd>little residents*</dd></div>
        <div><dt>2</dt><dd>big-hearted volunteers</dd></div>
        <div><dt>Countless</dt><dd>reasons to smile</dd></div>
      </dl>
      <p class="note">*Population reported by Ma and Pa in their email.</p>
    </aside>
    <div class="prose">
      <p class="kicker">01 / A second chance</p>
      <h2 id="beginning-title">It started with a trip<br class="desktop-break" /> to the tip. Almost.</h2>
      {#each article.content.slice(0, 4) as paragraph, i}
        <p class:lead={i === 0}>{paragraph}</p>
      {/each}
    </div>
  </section>

  <figure class="pullquote">
    <span aria-hidden="true" class="quote-mark">“</span>
    <blockquote>We love seeing something that might otherwise have been thrown away brought back to life.</blockquote>
    <figcaption>Ma & Pa <span>The couple behind Gnome Man’s Land</span></figcaption>
  </figure>

  <section id="meet-the-residents" class="chapter residents" aria-labelledby="residents-title">
    <div class="section-intro">
      <p class="kicker">02 / Meet the neighbours</p>
      <h2 id="residents-title">Every gnome has a story.</h2>
      <p>Family memories, royal connections and some very creative second acts.</p>
    </div>
    {#each portraits as resident, i}
      <div class="resident-row" class:reverse={i % 2 === 1}>
        {#if resident.photo}{@render photograph(resident.photo, true)}{/if}
        <div class="prose resident-story">
          <p class="kicker">{resident.title}</p>
          <h3>{resident.name}</h3>
          <p>{resident.copy}</p>
        </div>
      </div>
    {/each}
    <div class="gnomebies prose">
      <span class="seasonal-label">A spooky second act</span>
      <h3>Keeping up with the Gnomebies</h3>
      <p>{article.content[6]}</p>
    </div>
  </section>

  <section id="island-album" class="chapter" aria-labelledby="album-title">
    <div class="section-intro">
      <p class="kicker">03 / The island album</p>
      <h2 id="album-title">Quite the cast of characters.</h2>
      <p>Pointy hats are just the beginning. Select a photo for a closer look.</p>
    </div>
    <div class="photo-album">
      {#each photos.filter((p) => ['gnomes-crossing', 'sunshine', 'snail-rider'].includes(p.id)) as photo}
        {@render photograph(photo, true)}
      {/each}
    </div>
    <div class="remembrance prose">
      <p class="kicker">Small gestures, deeper meaning</p>
      <h3>A place for remembering, too.</h3>
      <p>{article.content[7]}</p>
    </div>
    {#each photos.filter((p) => p.id === 'island') as photo}
      <div class="island-panorama">{@render photograph(photo)}</div>
    {/each}
  </section>

  <section id="a-name-of-their-own" class="chapter final-chapter" aria-labelledby="petition-title">
    <div class="prose">
      <p class="kicker">04 / The next chapter</p>
      <h2 id="petition-title">A name of their own.</h2>
      <p>{article.content[8]}</p>
      <p>{article.content[9]}</p>
      <p>{article.content[10]}</p>
    </div>
    <aside class="invitation">
      <p class="kicker">Room for one more?</p>
      <h3>Your old gnome could have a new adventure.</h3>
      <p>Faded paint? Wonky hat? Ma and Pa welcome unwanted garden gnomes, including those in need of a little love.</p>
      <a href={article.sourceUrl} class="feature-button">Meet Ma & Pa on Facebook <span aria-hidden="true">↗</span></a>
      {#if article.sources?.[0]}
        <a href={article.sources[0].href} class="petition-link">View the naming petition <span aria-hidden="true">↗</span></a>
      {/if}
    </aside>
  </section>
  <p class="editorial-note">{article.content[11]} All photographs supplied by and credited to Gnome Man’s Land.</p>
</div>

<style>
  .gnome-feature { --ink: #213e34; --muted: #59665d; --paper: #faf7ef; --red: #a63e2f; margin-top: 2rem; color: var(--ink); }
  .feature-header { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 3rem; align-items: center; padding: 3rem; background: var(--paper); border-radius: 1.5rem 1.5rem 0 0; }
  .kicker { font-size: .7rem; line-height: 1.6; font-weight: 700; text-transform: uppercase; letter-spacing: .16em; color: var(--red); }
  .kicker span { margin-right: .4rem; }
  h1, h2, h3, .island-name, blockquote { font-family: Georgia, 'Times New Roman', serif; color: var(--ink); }
  h1 { margin-top: 1.4rem; font-size: clamp(3.5rem, 6.5vw, 6rem); line-height: .98; font-weight: 400; letter-spacing: -.055em; }
  h1 em { display: block; font-weight: 400; color: var(--red); }
  .standfirst { margin-top: 1.5rem; font-size: 1.3rem; line-height: 1.45; font-weight: 600; max-width: 27rem; }
  .deck { margin-top: 1rem; color: var(--muted); font-size: .95rem; line-height: 1.8; }
  .byline { margin-top: 1.5rem; font-size: .7rem; font-weight: 600; }
  .byline span { margin: 0 .5rem; color: #9b9e8e; }
  .story-link { display: inline-flex; gap: 2rem; align-items: center; margin-top: 1.5rem; font-weight: 700; border-bottom: 1px solid var(--ink); font-size: .85rem; }
  figure { margin: 0; min-width: 0; }
  figure a { display: block; border-radius: .4rem; overflow: hidden; }
  figure a:focus-visible, a:focus-visible { outline: 3px solid #a63e2f; outline-offset: 5px; }
  figure img { display: block; width: 100%; height: auto; }
  .hero-photo { transform: rotate(2deg); background: white; padding: .7rem .7rem 0; box-shadow: 0 10px 28px #213e3417; }
  .hero-photo img { aspect-ratio: 2048 / 1554; object-fit: cover; }
  figcaption { padding: .8rem .1rem; font-size: .72rem; line-height: 1.6; color: var(--muted); }
  figcaption span { display: block; font-size: .65rem; opacity: .9; margin-top: .25rem; }
  .chapter-nav { display: flex; flex-wrap: wrap; gap: 1rem 1.8rem; padding: 1.1rem 3rem; font-size: .72rem; border-bottom: 1px solid #d9dfd6; background: #eef1e8; }
  .chapter-nav > span { font-weight: 700; margin-right: auto; }
  .chapter-nav a { text-decoration: underline; text-underline-offset: 4px; }
  .chapter { margin-top: 5rem; scroll-margin-top: 7rem; }
  .opening { display: grid; grid-template-columns: 1fr 2fr; gap: 5rem; max-width: 65rem; margin-inline: auto; }
  .island-note { align-self: start; border: 1px solid #d4dacd; padding: 2rem; background: var(--paper); text-align: center; border-radius: 8rem 8rem .5rem .5rem; }
  .island-note > .kicker { margin-top: 1.5rem; }
  .island-name { font-size: 2.6rem; line-height: 1.04; margin-top: .6rem; }
  .place { margin-top: 1rem; font-size: .7rem; color: var(--muted); }
  dl { margin-top: 1.5rem; border-top: 1px solid #d4dacd; }
  dl > div { padding-top: 1.4rem; }
  dt { font-family: Georgia, serif; font-size: 2.5rem; line-height: 1.1; color: var(--red); }
  dd { font-size: .75rem; margin-top: .3rem; }
  .note { margin-top: 1.5rem; font-size: .65rem; line-height: 1.7; color: var(--muted); }
  .prose h2, .section-intro h2 { font-size: clamp(2rem, 3.8vw, 3rem); line-height: 1.12; font-weight: 400; letter-spacing: -.035em; margin-top: .8rem; }
  .prose > p:not(.kicker) { margin-top: 1.3rem; font-size: 1rem; line-height: 1.95; color: #47564d; }
  .prose p.lead { font-size: 1.15rem; color: var(--ink); }
  .pullquote { margin-top: 4rem; padding: 2.8rem clamp(1.5rem, 7vw, 7rem); background: var(--ink); border-radius: .6rem; text-align: center; }
  .quote-mark { font-family: Georgia, serif; display: block; font-size: 5rem; height: 3.4rem; color: #e6b674; line-height: 1; }
  blockquote { color: #fff9ec; font-size: clamp(1.7rem, 3.4vw, 2.8rem); line-height: 1.35; font-weight: 400; }
  .pullquote figcaption { color: #f5dfb5; font-weight: 600; margin-top: 1rem; }
  .pullquote figcaption span { color: #e5eadd; font-weight: 400; }
  .section-intro { text-align: center; margin-bottom: 3rem; }
  .section-intro > p:last-child { font-size: .95rem; color: var(--muted); margin-top: 1rem; }
  .resident-row { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 6vw, 5rem); align-items: center; max-width: 65rem; margin: 0 auto 4rem; }
  .resident-row.reverse > figure { order: 2; }
  .resident-row .portrait img { max-height: 38rem; object-fit: contain; background: var(--paper); }
  .prose h3 { font-weight: 400; font-size: 2.4rem; line-height: 1.12; margin-top: .75rem; }
  .gnomebies { background: #f5efe5; padding: 2.5rem clamp(1.5rem, 6vw, 5rem); border-left: 4px solid #a86537; }
  .seasonal-label { color: #82512d; font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .15em; }
  .photo-album { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; align-items: start; }
  .photo-album .portrait img { aspect-ratio: 3 / 5; object-fit: cover; }
  .photo-album > :nth-child(2) { margin-top: 2.5rem; }
  .remembrance { max-width: 43rem; margin: 4rem auto 3rem; }
  .island-panorama img { aspect-ratio: 4 / 3; object-fit: contain; }
  .final-chapter { display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; max-width: 65rem; margin-inline: auto; }
  .invitation { align-self: start; margin-top: 2.5rem; padding: 2rem; background: #eef1e8; border-radius: .5rem; border-top: 4px solid var(--ink); }
  .invitation h3 { font-size: 2rem; font-weight: 400; line-height: 1.2; margin-top: 1rem; }
  .invitation > p:not(.kicker) { font-size: .9rem; line-height: 1.8; margin-top: 1rem; color: var(--muted); }
  .feature-button { display: flex; justify-content: space-between; gap: 1rem; background: var(--ink); color: white; padding: .9rem 1rem; margin-top: 1.5rem; border-radius: .3rem; font-size: .8rem; font-weight: 600; }
  .feature-button:hover { background: #315845; }
  .petition-link { display: inline-block; margin-top: 1rem; font-size: .8rem; text-decoration: underline; text-underline-offset: 4px; }
  .editorial-note { max-width: 65rem; margin: 3rem auto 0; padding-top: 1.5rem; border-top: 1px solid #d9dfd6; color: var(--muted); font-size: .75rem; line-height: 1.8; }
  @media (max-width: 900px) {
    .feature-header { padding: 2rem; gap: 2rem; }
    .chapter-nav { padding-inline: 2rem; }
    .opening { gap: 2rem; }
    .final-chapter { gap: 2rem; }
  }
  @media (max-width: 640px) {
    .feature-header, .opening, .resident-row, .final-chapter { grid-template-columns: 1fr; }
    .feature-header { padding: 1.5rem; gap: 2.5rem; }
    h1 { font-size: clamp(3rem, 12vw, 4rem); }
    .standfirst { font-size: 1.2rem; }
    .chapter-nav { padding: 1.25rem 1.5rem; gap: .8rem 1.3rem; }
    .chapter-nav > span { flex-basis: 100%; }
    .chapter { margin-top: 3.5rem; }
    .opening .prose { order: -1; }
    .island-note { border-radius: .5rem; padding: 1.5rem; }
    .island-note > .kicker { margin-top: 0; }
    .island-name br { display: none; }
    .island-name { font-size: 2.2rem; }
    dl { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .75rem; }
    dt { font-size: 1.7rem; }
    dl > div:last-child dt { font-size: 1.3rem; padding-top: .3rem; }
    .desktop-break { display: none; }
    .resident-row.reverse > figure { order: 0; }
    .resident-row { gap: 1rem; margin-bottom: 2.5rem; }
    .resident-row .portrait img { max-height: 30rem; }
    .photo-album { grid-template-columns: 1fr; gap: 1.75rem; }
    .photo-album .portrait img { max-height: 36rem; object-fit: contain; background: var(--paper); }
    .photo-album > :nth-child(2) { margin-top: 0; }
    .invitation { margin-top: 0; }
    .remembrance { margin-top: 2.5rem; }
  }
</style>
