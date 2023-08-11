import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const { title, text } = await fetch('someAPI').then((res) => res.json());
	return {
		title,
		text
	};
};
