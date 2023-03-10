import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		port:3000,
		// hmr:{
		// 	clientPort: process.env.HMR_HOST ? 3344 : 5000,
		// 	host: process.env.HMR_HOST ? process.env.HMR_HOST?.substring("https://".length) : "localhost"
		// }
	}
};

export default config;
