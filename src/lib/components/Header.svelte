<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faHome } from '@fortawesome/free-solid-svg-icons';
</script>

<header>
	<div class="site-heading"><a href="/" title="Home">Brent Danley</a></div>
	<div class="primary-nav">
		<nav>
			<ul>
				<li>
					<a href="/"><Fa icon={faHome} /></a>
				</li>
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
	</div>
</header>

<style lang="scss">
	header {
		grid-area: header;
		font-size: 2rem;
		font-family: 'Merriweather', serif;
		padding: 1rem;
		background: var(--quinary-color);

		.site-heading {
			font-family: 'Passion One', cursive;
			color: var(--tertiary-color);
			font-size: clamp(4rem, 8vw, 6rem);
			text-align: center;
			margin: 1.5rem auto;

			a {
				color: inherit;
				text-decoration: none;
			}
		}
		.primary-nav {
			display: flex;
			flex-wrap: wrap;
			justify-content: right;
			ul {
				margin: 0;
				padding: 0;
				list-style-type: none;
				display: flex;
				gap: 1rem;
			}

			a {
				text-decoration: none;
				color: var(--secondary-color);
			}

			@media (max-width: 600px) {
				justify-content: space-around;
			}
		}
	}
</style>
