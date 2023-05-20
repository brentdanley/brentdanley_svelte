<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import TagBar from '$lib/components/TagBar.svelte';
	import { format } from 'date-fns';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCalendar } from '@fortawesome/free-regular-svg-icons';

	export let data;
	const { title, date, tags, Content } = data;
</script>

<svelte:head>
	<title>Brent Danley - Blog: {title}</title>
	<meta property="og:title" content={`Brent Danley | ${title}`} />
</svelte:head>

<article>
	{#if tags != undefined}
		<TagBar {tags} />
	{/if}
	<h1>{title}</h1>
	<p class="publish-date">
		<Fa icon={faCalendar} />
		{format(new Date(date), 'EEEE, LLLL d, yyyy')}
	</p>
	<Content />
</article>

<style lang="scss">
	article {
		& :global(:is(h1, h2, h3, h4, h5, h6)) {
			color: var(--secondary-light-color);
		}

		& :global(.publish-date) {
			color: var(--primary-light-color);
		}

		& :global(img) {
			width: 100%;
		}

		& :global(li) {
			font-size: 1.8rem;
			line-height: 1.4;
		}

		& :global(p > code) {
			background-color: var(--primary-light-color);
			color: var(--dark-font-color);
			display: inline-block;
			border-radius: 0.3rem;
			padding: 0.3rem 0.5rem;
		}
	}
</style>
