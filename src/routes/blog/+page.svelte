<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
	type PostType = {
		path: string;
		meta: {
			title: string;
			date: string;
		};
	};

	export let data: { posts: PostType[] };
</script>

<h1>Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
