<script lang="ts">
	export let tags: string[];
</script>

<ul>
	{#each tags as tag}
		<li>{tag}</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: flex;
		list-style-type: none;
		gap: 0.4rem;
		padding: 0;

		li {
			font-size: 1.4rem;
			background-color: var(--quaternary-color);
			color: var(--tertiary-color);
			padding: 0.5rem 1rem;
			border-radius: 0.3rem;
		}
	}
</style>
