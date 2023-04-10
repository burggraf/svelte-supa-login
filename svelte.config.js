import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	},
	alias: {
		'$ionic': 'src/lib/ionic',
		'$ionpage': 'src/lib/ionic/svelte/components/IonPage.svelte',
		'$interfaces': 'src/interfaces',
		'$services': 'src/services',
		'$stores': 'src/stores',
		'$components': 'src/components',
		'$localdata': 'src/localdata',
	}

};

export default config;
