// src/routes/blog/+page.js
export const load = async ({ fetch }: { fetch: Function }) => {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	return {
		posts
	};
};
