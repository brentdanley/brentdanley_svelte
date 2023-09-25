// src/routes/blog/category/[category]/+page.js
type PostType = {
	meta: {
		tags: string[];
	};
};
export const load = async ({
	fetch,
	params
}: {
	fetch: Function;
	params: { category: string };
}) => {
	const { category } = params;
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json();

	const posts = allPosts.filter((post: PostType) => post.meta.tags.includes(category));

	console.log(posts);
	return {
		category,
		posts
	};
};
