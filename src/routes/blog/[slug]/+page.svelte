<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import TagBar from '$lib/components/TagBar.svelte';
	import { format } from 'date-fns';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCalendar } from '@fortawesome/free-regular-svg-icons';

	export let data;
	const { title, date, tags, Content } = data;
</script>

<article>
	<h1>{title}</h1>
	<p class="publish-date">
		<Fa icon={faCalendar} />
		{format(new Date(date), 'EEEE, LLLL d, yyyy')}
	</p>
	{#if tags != undefined}
		<TagBar {tags} />
	{/if}
	<Content />
</article>

<style lang="scss">
	article {
		& :global(h2) {
			color: green;
		}

		& :global(p) {
		}

		& :global(.publish-date) {
			color: var(--quaternary-color);
		}

		& :global(img) {
			width: 100%;
		}
	}
</style>
