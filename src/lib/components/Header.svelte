<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faHome } from '@fortawesome/free-solid-svg-icons';
	const nav_links = [
		{ name: 'Home', url: '/', title: 'Home', icon: faHome },
		{ name: 'Blog', url: '/blog', title: 'Blog' },
		{ name: 'About', url: '/about', title: 'About' },
		{ name: 'Contact', url: '/contact', title: 'Contact' }
	];
</script>

<header>
	<div class="site-heading"><a href="/" title="Home">Brent Danley</a></div>
	<div class="primary-nav">
		<nav>
			<ul>
				{#each nav_links as link (link.name)}
					<li>
						<a href={link.url} title={link.title}>
							{#if link.icon}
								<Fa icon={link.icon} />
							{:else}
								{link.name}
							{/if}
						</a>
					</li>
				{/each}
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
		background-color: var(--primary-dark-color);

		.site-heading {
			font-family: 'Passion One', cursive;
			color: var(--secondary-light-color);
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
