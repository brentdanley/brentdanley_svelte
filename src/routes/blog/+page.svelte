<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCalendar } from '@fortawesome/free-regular-svg-icons';
	import TagBar from '$lib/components/TagBar.svelte';
	import { format } from 'date-fns';

	type PostType = {
		path: string;
		meta: {
			title: string;
			date: string;
			tags: string[];
		};
	};

	export let data: { posts: PostType[] };
</script>

<svelte:head>
	<title>Brent Danley - Blog</title>
	<meta property="og:title" content="Brent Danley - Blog" />
</svelte:head>

<h1>Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2 class="post-title">
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			<div class="published-date">
				<Fa icon={faCalendar} />
				{format(new Date(post.meta.date), 'EEEE, LLLL d, yyyy')}
			</div>
			<TagBar tags={post.meta.tags} />
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style-type: none;
		padding: 0;
		.post-title {
			color: var(--quinary-color);
			margin-bottom: 0.4rem;

			a {
				color: inherit;
				text-decoration: none;
			}
		}
		.published-date {
			color: var(--quaternary-color);
			margin-bottom: 0.5rem;
		}
	}
</style>
