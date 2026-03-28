<script lang="ts">
	import type { DiscoverPlace } from '$types/content';
	import ImagePlaceholder from '../../ui/ImagePlaceholder.svelte';

	export let place: DiscoverPlace;
</script>

<article id={place.slug} class="surface-card surface-card-hover scroll-mt-28 overflow-hidden">
	<div class="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
		<div class="p-5 sm:p-6 lg:p-7">
			{#if place.imageSrc}
				<div class="relative h-56 overflow-hidden rounded-2xl border border-brand-border sm:h-64">
					<img
						src={place.imageSrc}
						alt={place.imageAlt ?? place.title}
						loading="lazy"
						decoding="async"
						class="h-full w-full object-cover"
					/>
					<div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,41,0.04),rgba(7,18,41,0.18))]"></div>
					<div class="absolute bottom-4 left-4 rounded-full border border-white/18 bg-slate-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
						{place.imageLabel}
					</div>
				</div>
			{:else}
				<ImagePlaceholder
					label={place.imageLabel}
					style={place.imageStyle}
					className="h-56 w-full sm:h-64"
				/>
			{/if}
		</div>

		<div class="flex flex-col justify-between border-t border-brand-border p-6 sm:p-7 lg:border-l lg:border-t-0">
			<div>
				<h2 class="text-[1.7rem] leading-tight text-brand-text sm:text-[1.95rem]">{place.title}</h2>
				<p class="body-copy-sm mt-4 max-w-2xl">{place.description}</p>

				<div class="mt-6 grid gap-3 sm:grid-cols-3">
					<div class="rounded-2xl border border-brand-border bg-brand-section px-4 py-4">
						<p class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand-primary">
							What it is
						</p>
						<p class="mt-2 text-sm leading-7 text-brand-muted">{place.whatItIs}</p>
					</div>
					<div class="rounded-2xl border border-brand-border bg-brand-section px-4 py-4">
						<p class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand-primary">
							Why visit
						</p>
						<p class="mt-2 text-sm leading-7 text-brand-muted">{place.whyVisit}</p>
					</div>
					<div class="rounded-2xl border border-brand-border bg-brand-section px-4 py-4">
						<p class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand-primary">
							Ideal for
						</p>
						<p class="mt-2 text-sm leading-7 text-brand-muted">{place.idealFor}</p>
					</div>
				</div>
			</div>

		</div>
	</div>
</article>
