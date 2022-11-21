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
	<meta property="og:title" content={`Brent Danley - Blog ${title}`} />
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
		& :global(h2) {
			color: var(--quinary-color);
		}

		& :global(.publish-date) {
			color: var(--quaternary-color);
		}

		& :global(img) {
			width: 100%;
		}

		& :global(p),
		& :global(li) {
			font-size: 2.2rem;
			line-height: 1.8;
		}

		& :global(p > code) {
			color: var(--primary-color);
			display: inline-block;
			background-color: var(--tertiary-color);
			border-radius: 0.3rem;
			padding: 0.3rem 0.5rem;
		}
	}
</style>
