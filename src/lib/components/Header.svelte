<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faHome } from '@fortawesome/free-solid-svg-icons';
</script>

<header>
	<a href="/"><Fa icon={faHome} /></a>

	<nav>
		<ul>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		padding: 1rem;
		background: var(--quinary-color);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		ul {
			margin: 0;
			list-style-type: none;
			display: flex;
			gap: 1rem;
		}

		a {
			text-decoration: none;
			color: var(--secondary-color);
		}
	}
</style>
