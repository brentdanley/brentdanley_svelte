<script lang="ts">
	export let tags: string[];
</script>

<ul>
	{#each tags as tag}
		<li><a href={`/blog/category/${tag}`} title={`Blog category ${tag}`}>{tag}</a></li>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: flex;
		list-style-type: none;
		gap: 0.4rem;
		padding: 0;
		flex-wrap: wrap;

		li {
			font-size: 1.4rem;
			background-color: var(--secondary-middle-color);
			color: var(--secondary-light-color);
			padding: 0.5rem 1rem;
			border-radius: 0.3rem;

			a {
				color: inherit;
				text-decoration: none;
			}
		}
	}
</style>
