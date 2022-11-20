<!-- src/routes/blog/category/[category]/+page.svelte -->
<script lang="ts">
	import { format } from 'date-fns';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCalendar } from '@fortawesome/free-regular-svg-icons';

	type PostType = {
		path: string;
		meta: {
			title: string;
			date: string;
		};
	};

	export let data: { category: string; posts: PostType[] };
</script>

<svelte:head>
	<title>Brent Danley - Blog Category {data.category}</title>
	<meta property="og:title" content={`Brent Danley - Blog Category ${data.category}`} />
</svelte:head>

<h1>Category: <span class="category-name">{data.category}</span></h1>

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
		</li>
	{/each}
</ul>

<style lang="scss">
	h1 {
		.category-name {
			font-size: inherit;
			background-color: var(--quaternary-color);
			color: var(--tertiary-color);
			padding: 0.5rem 1rem;
			border-radius: 0.3rem;
		}
	}

	ul {
		list-style-type: none;

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
		}
	}
</style>
