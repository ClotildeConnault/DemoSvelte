// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}

		interface Locals {
			userID: string | null;
		}

		// interface PageData {}
		// interface Platform {}
	}
}

declare module '*.svelte-kit' {
	export { RequestHandler as default } from './$types';
	export const version: string;
	// ... other stuff
}

export {};
