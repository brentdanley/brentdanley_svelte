<!-- +layout.svelte -->
<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.scss';
	import '$lib/styles/prism-atom-dark.css';
	import { fade } from 'svelte/transition';

	export let data: { currentRoute: string };
</script>

<Header />

{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}

<Footer />
