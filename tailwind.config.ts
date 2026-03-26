import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#f3faf6',
					100: '#d8f2e2',
					200: '#b5e5ca',
					300: '#87d1aa',
					400: '#56b481',
					500: '#2f9560',
					600: '#23774b',
					700: '#1d5f3d',
					800: '#1a4b32',
					900: '#173e2b'
				},
				ink: '#163029',
				sand: '#f7f2ea',
				sun: '#f2b54a',
				coral: '#e77a5f'
			},
			fontFamily: {
				display: ['"Fraunces"', 'Georgia', 'serif'],
				sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				card: '0 20px 45px -24px rgba(22, 48, 41, 0.28)'
			},
			backgroundImage: {
				'hero-glow':
					'radial-gradient(circle at top left, rgba(255,255,255,0.85), transparent 38%), radial-gradient(circle at 80% 20%, rgba(242,181,74,0.22), transparent 30%), linear-gradient(135deg, #f3faf6 0%, #f7f2ea 48%, #fff9ef 100%)'
			}
		}
	},
	plugins: [forms]
};

export default config;
