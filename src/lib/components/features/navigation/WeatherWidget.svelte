<script lang="ts">
	import { onMount } from 'svelte';

	type Weather = {
		available: true;
		temperature: number;
		condition: string;
		icon: string | null;
		updatedAt: number;
	};

	let weather: Weather | null = null;

	onMount(async () => {
		try {
			const response = await fetch('/api/weather');
			if (!response.ok) return;

			const result = await response.json();
			if (result.available) weather = result;
		} catch {
			// Weather is an optional enhancement, so leave the header unchanged on failure.
		}
	});
</script>

{#if weather}
	<div
		class="flex shrink-0 items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-2 py-1.5 text-white"
		aria-label={`Current weather in Long Eaton: ${weather.temperature} degrees Celsius, ${weather.condition}`}
		title={`Long Eaton weather, updated ${new Date(weather.updatedAt * 1000).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`}
	>
		{#if weather.icon}
			<img src={weather.icon} alt="" class="h-8 w-8" width="32" height="32" />
		{/if}
		<div class="leading-tight">
			<p class="text-sm font-semibold">{weather.temperature}°C</p>
			<p class="hidden max-w-24 truncate text-[0.65rem] text-white/70 xl:block">{weather.condition}</p>
		</div>
		<a
			href="https://www.weatherapi.com/"
			target="_blank"
			rel="noreferrer"
			class="hidden text-[0.55rem] text-white/55 underline decoration-white/25 underline-offset-2 hover:text-white lg:block"
			aria-label="Weather data provided by WeatherAPI.com"
		>
			WeatherAPI
		</a>
	</div>
{/if}
