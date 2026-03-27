<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { EventItem } from '$types/content';
	import HeroSlide from './HeroSlide.svelte';

	export let events: EventItem[] = [];
	export let autoRotateMs = 7200;

	let activeIndex = 0;
	let isPaused = false;
	let intervalId: ReturnType<typeof setInterval> | undefined;
	let carouselElement: HTMLDivElement | null = null;
	let touchStartX = 0;
	let touchDeltaX = 0;

	$: slides = events;
	$: totalSlides = slides.length;
	$: if (activeIndex > Math.max(totalSlides - 1, 0)) {
		activeIndex = 0;
	}

	const stopAutoRotate = () => {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = undefined;
		}
	};

	const startAutoRotate = () => {
		stopAutoRotate();

		if (isPaused || totalSlides <= 1) {
			return;
		}

		intervalId = setInterval(() => {
			activeIndex = (activeIndex + 1) % totalSlides;
		}, autoRotateMs);
	};

	$: startAutoRotate();

	const goToSlide = (index: number) => {
		activeIndex = index;
		startAutoRotate();
	};

	const showPrevious = () => {
		activeIndex = (activeIndex - 1 + totalSlides) % totalSlides;
		startAutoRotate();
	};

	const showNext = () => {
		activeIndex = (activeIndex + 1) % totalSlides;
		startAutoRotate();
	};

	const handleMouseEnter = () => {
		isPaused = true;
	};

	const handleMouseLeave = () => {
		isPaused = false;
	};

	const handleFocusIn = () => {
		isPaused = true;
	};

	const handleFocusOut = () => {
		isPaused = false;
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (totalSlides <= 1) {
			return;
		}

		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			showPrevious();
		}

		if (event.key === 'ArrowRight') {
			event.preventDefault();
			showNext();
		}

		if (event.key === 'Home') {
			event.preventDefault();
			goToSlide(0);
		}

		if (event.key === 'End') {
			event.preventDefault();
			goToSlide(totalSlides - 1);
		}
	};

	const resetTouchState = () => {
		touchStartX = 0;
		touchDeltaX = 0;
	};

	const handleTouchStart = (event: TouchEvent) => {
		if (event.touches.length !== 1 || totalSlides <= 1) {
			return;
		}

		touchStartX = event.touches[0].clientX;
		touchDeltaX = 0;
		isPaused = true;
		stopAutoRotate();
	};

	const handleTouchMove = (event: TouchEvent) => {
		if (!touchStartX || event.touches.length !== 1) {
			return;
		}

		touchDeltaX = event.touches[0].clientX - touchStartX;
	};

	const handleTouchEnd = () => {
		if (!touchStartX) {
			return;
		}

		isPaused = false;

		if (Math.abs(touchDeltaX) >= 48) {
			if (touchDeltaX > 0) {
				showPrevious();
			} else {
				showNext();
			}
		} else {
			startAutoRotate();
		}

		resetTouchState();
	};

	onMount(() => {
		if (!carouselElement) {
			return;
		}

		carouselElement.addEventListener('mouseenter', handleMouseEnter);
		carouselElement.addEventListener('mouseleave', handleMouseLeave);
		carouselElement.addEventListener('focusin', handleFocusIn);
		carouselElement.addEventListener('focusout', handleFocusOut);
		carouselElement.addEventListener('keydown', handleKeydown);

		return () => {
			stopAutoRotate();
			carouselElement?.removeEventListener('mouseenter', handleMouseEnter);
			carouselElement?.removeEventListener('mouseleave', handleMouseLeave);
			carouselElement?.removeEventListener('focusin', handleFocusIn);
			carouselElement?.removeEventListener('focusout', handleFocusOut);
			carouselElement?.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<section
	class="relative overflow-hidden rounded-[1.9rem] border border-brand-border bg-brand-primaryDark text-white shadow-[0_28px_90px_rgba(7,18,41,0.24)]"
	aria-label="Featured events"
	aria-roledescription="carousel"
>
	<div
		bind:this={carouselElement}
		class="relative min-h-[23rem] touch-pan-y sm:min-h-[24rem] lg:h-[58vh] lg:min-h-[32rem] lg:max-h-[40rem]"
		role="group"
		aria-label="Featured event slides"
		on:touchstart={handleTouchStart}
		on:touchmove={handleTouchMove}
		on:touchend={handleTouchEnd}
		on:touchcancel={handleTouchEnd}
	>
		{#if totalSlides > 0}
			{#key slides[activeIndex]?.id}
				<div class="absolute inset-0" in:fade={{ duration: 650, delay: 120 }} out:fade={{ duration: 420 }}>
					<HeroSlide event={slides[activeIndex]} />
				</div>
			{/key}

			{#if totalSlides > 1}
				<div class="absolute inset-x-0 bottom-0 z-20 flex justify-center px-4 pb-4 sm:hidden">
					<div class="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/28 px-3 py-2 backdrop-blur-md">
						{#each slides as slide, index}
							<button
								type="button"
								class={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/70 ${
									index === activeIndex
										? 'h-2 w-6 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.14)]'
										: 'h-2 w-2 bg-white/45 hover:bg-white/70'
								}`}
								on:click={() => goToSlide(index)}
								aria-label={`Go to featured event ${index + 1}: ${slide.title}`}
								aria-current={index === activeIndex ? 'true' : undefined}
							></button>
						{/each}
					</div>
				</div>
				<div class="absolute inset-x-0 bottom-0 z-20 hidden justify-end px-5 pb-5 sm:flex sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
					<div class="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/18 px-3 py-2 backdrop-blur-md">
						{#each slides as slide, index}
							<button
								type="button"
								class={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/70 ${
									index === activeIndex
										? 'h-2.5 w-8 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.16)]'
										: 'h-2 w-2 bg-white/45 hover:bg-white/70'
								}`}
								on:click={() => goToSlide(index)}
								aria-label={`Go to featured event ${index + 1}: ${slide.title}`}
								aria-current={index === activeIndex ? 'true' : undefined}
							></button>
						{/each}
					</div>
				</div>
			{/if}
		{:else}
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_30%),linear-gradient(135deg,rgba(1,36,190,0.95),rgba(7,61,255,0.72))]"></div>
		{/if}
	</div>
</section>
