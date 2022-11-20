<!-- +layout.svelte -->
<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.scss';
	import '$lib/styles/prism-atom-dark.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
