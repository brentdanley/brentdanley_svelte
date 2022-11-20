// src/routes/blog/[slug]/+page.js
type ParamsType = {
	params: {
		slug: string;
	};
};

export async function load({ params }: ParamsType) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, tags } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date,
		tags
	};
}
