<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faTwitter, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { format } from 'date-fns';
</script>

<footer>
	<nav class="social">
		<li>
			<a href="mailto:brentdanley@gmail.com" title="Email brentdanley@gmail.com"
				><Fa icon={faEnvelope} /></a
			>
		</li>
		<li>
			<a href="https://twitter.com/brentdanley" title="@brentdanley on Twitter"
				><Fa icon={faTwitter} /></a
			>
		</li>
		<li>
			<a href="https://www.instagram.com/brentdanley/" title="@brentdanley on Instagram"
				><Fa icon={faInstagram} /></a
			>
		</li>
		<li>
			<a href="https://www.youtube.com/@brentdanley" title="@brentdanley on YouTube"
				><Fa icon={faYoutube} /></a
			>
		</li>
		<li>
			<a href="https://www.tiktok.com/@brentdanley" title="@brentdanley on TikTok"
				><Fa icon={faTiktok} /></a
			>
		</li>
	</nav>
	<div class="legal">
		<div class="copyright">&copy;{format(new Date(), 'yyyy')} Brent Danley</div>
		<div class="made-with">
			Made with <a href="https://kit.svelte.dev/" title="SvelteKit">SvelteKit</a>. Hosted on
			<a href="https://vercel.com/dashboard" title="Vercel">Vercel</a>.
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		display: grid;
		grid-template-areas: 'social legal';
		grid-area: 'footer';
		background-color: var(--primary-dark-color);
		color: var(--dark-font-color);
		font-family: 'Merriweather', serif;
		padding: 1rem;

		.social {
			grid-area: social;
			align-self: left;
			display: flex;
			flex-direction: row;
			gap: 1.2rem;
			font-size: 2rem;
			li {
				list-style-type: none;
				a {
					color: var(--light-font-color);
				}
			}
		}
		.legal {
			grid-area: legal;
			text-align: right;
			color: var(--quaternary-color);

			.made-with {
				font-size: 1.2rem;
				font-style: italic;
			}
			.copyright {
				font-size: 1.4rem;
			}
		}

		a:visited,
		a {
			color: inherit;
		}

		@media (max-width: 600px) {
			grid-template-columns: 1fr;
			grid-template-areas: 'social' 'legal';

			.social {
				align-self: center;
				margin: 0 auto 1rem;
				gap: 1.6rem;
				font-size: 3rem;
			}

			.legal {
				text-align: center;
			}
		}
	}
</style>
