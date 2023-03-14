import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import { presetUno, presetWebFonts } from 'unocss';
export default defineConfig({
	plugins: [
		sveltekit(),
		Unocss({
			presets: [
				presetUno(),
				presetWebFonts({ provider: 'google', fonts: { jost: 'Jost', murecho: 'Murecho' } })
			]
		})
	]
});
