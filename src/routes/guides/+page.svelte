<script lang="ts">
	import { EventCard } from '$components';
	import { seasonalGuides } from '$data/guides';
	import { sortedEvents } from '$data/events';
	import { getUpcomingEvents } from '$data/listings';
	import { getCurrentSeasonEvents, getEventsForSeason, getSeasonFromDate, type Season } from '$utils/seasons';

	type SeasonPresentation = {
		name: string;
		months: string;
		markerClass: string;
		panelClass: string;
	};

	const now = new Date();
	const currentSeason = getSeasonFromDate(now);
	const currentSeasonEvents = getCurrentSeasonEvents(sortedEvents, now).slice(0, 6);
	const upcomingDatedEvents = getUpcomingEvents(sortedEvents, now);
	const seasons: Season[] = ['spring', 'summer', 'autumn', 'winter'];
	const presentation: Record<Season, SeasonPresentation> = {
		spring: {
			name: 'Spring',
			months: 'March to May',
			markerClass: 'bg-brand-accent',
			panelClass: 'bg-brand-accent/10'
		},
		summer: {
			name: 'Summer',
			months: 'June to August',
			markerClass: 'bg-brand-primary',
			panelClass: 'bg-brand-primary/5'
		},
		autumn: {
			name: 'Autumn',
			months: 'September to November',
			markerClass: 'bg-brand-primaryLight',
			panelClass: 'bg-brand-primaryLight/10'
		},
		winter: {
			name: 'Winter',
			months: 'December to February',
			markerClass: 'bg-brand-primaryDark',
			panelClass: 'bg-brand-section'
		}
	};

	const guidesBySeason = new Map(
		seasonalGuides.map((guide) => [guide.season, guide])
	);
	const eventsBySeason = new Map(
		seasons.map((season) => [season, getEventsForSeason(upcomingDatedEvents, season).slice(0, 3)])
	);
</script>

<svelte:head>
	<title>Explore Long Eaton Through the Seasons | Love Long Eaton</title>
	<meta
		name="description"
		content="Discover seasonal things to do in Long Eaton, including local events, parks, walks, family activities and flexible days out throughout the year."
	/>
</svelte:head>

<main class="section-surface">
	<section class="container-shell pt-8 sm:pt-12">
		<div class="hero-panel relative overflow-hidden px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.28),transparent_35%),linear-gradient(125deg,rgba(1,36,190,0.96),rgba(7,61,255,0.82))]"></div>
			<div class="relative max-w-3xl">
				<p class="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Seasonal guides</p>
				<h1 class="mt-4 max-w-2xl text-white">Explore Long Eaton through the seasons</h1>
				<p class="mt-5 max-w-2xl text-lg leading-8 text-white/85">
					Useful starting points for local events, outdoor time and flexible days out throughout the year.
				</p>
				<nav class="mt-8 flex flex-wrap gap-2" aria-label="Seasonal guide sections">
					{#each seasons as season}
						<a href={`#${season}`} class="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
							{presentation[season].name}
						</a>
					{/each}
				</nav>
			</div>
		</div>
	</section>

	<section class="container-shell section-space" aria-labelledby="current-season-heading">
		<div class="panel-card overflow-hidden border-brand-primary/20">
			<div class="bg-brand-primaryDark px-6 py-7 text-white sm:px-8">
				<p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">{presentation[currentSeason].name} now</p>
				<h2 id="current-season-heading" class="mt-2 text-white">This season in Long Eaton</h2>
			</div>
			<div class="p-6 sm:p-8">
				{#if currentSeasonEvents.length}
					<div class="section-grid">
						{#each currentSeasonEvents as event}
							<EventCard {event} />
						{/each}
					</div>
				{:else}
					<p class="body-copy">No upcoming events have been added for this season yet.</p>
				{/if}
				<a href="/events" class="button-primary mt-7">View all events</a>
			</div>
		</div>
	</section>

	{#each seasons as season, index}
		{@const guide = guidesBySeason.get(season)}
		{@const seasonEvents = eventsBySeason.get(season) ?? []}
		{#if guide}
			<section id={season} class={index % 2 === 0 ? 'section-muted scroll-mt-6' : 'section-surface scroll-mt-6'} aria-labelledby={`${season}-heading`}>
				<div class="container-shell section-space">
					<div class="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
						<div>
							<div class={`inline-flex items-center gap-3 rounded-full px-4 py-2 ${presentation[season].panelClass}`}>
								<span class={`h-2.5 w-2.5 rounded-full ${presentation[season].markerClass}`} aria-hidden="true"></span>
								<p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-text">{presentation[season].months}</p>
							</div>
							<h2 id={`${season}-heading`} class="mt-5 text-3xl sm:text-4xl">{presentation[season].name} in Long Eaton</h2>
							<p class="body-copy mt-5">{guide.intro[0]}</p>
							<a href={`/guides/${guide.slug}`} class="button-secondary mt-6">Read the full {presentation[season].name.toLowerCase()} guide</a>
						</div>
						<div class="grid gap-4 sm:grid-cols-3">
							{#each guide.sections as activity}
								<article class="surface-card p-5">
									<h3 class="text-lg">{activity.title}</h3>
									<p class="body-copy-sm mt-3">{activity.copy}</p>
									{#if activity.href}<a href={activity.href} class="link-subtle mt-4">{activity.linkLabel}</a>{/if}
								</article>
							{/each}
						</div>
					</div>

					<div class="mt-12 border-t border-brand-border pt-9">
						<div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<p class="eyebrow">Coming up</p>
								<h3 class="mt-2 text-2xl">Upcoming {presentation[season].name.toLowerCase()} events</h3>
							</div>
							<a href="/events" class="button-secondary">View more {presentation[season].name.toLowerCase()} events</a>
						</div>
						{#if seasonEvents.length}
							<div class="section-grid mt-7">
								{#each seasonEvents as event}<EventCard {event} />{/each}
							</div>
						{:else}
							<div class="inset-panel mt-7 p-6 sm:p-8">
								<p class="font-semibold text-brand-text">No upcoming events have been added for this season yet.</p>
								<p class="body-copy-sm mt-2">New dates are added regularly, so the full events calendar is worth a look.</p>
								<a href="/events" class="link-subtle mt-4">Browse all events</a>
							</div>
						{/if}
					</div>
				</div>
			</section>
		{/if}
	{/each}
</main>
