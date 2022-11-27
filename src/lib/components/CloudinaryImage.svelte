<script lang="ts">
	export let alt: string;
	export let image_name: string;
	export let caption: string;
</script>

<div class="cloudinary-image">
	<img
		srcset={`https://res.cloudinary.com/brentdanley/image/upload/w_480/v1532733435/brentdanley.com/${image_name}.webp 480w, 
        https://res.cloudinary.com/brentdanley/image/upload/w_800/v1532733435/brentdanley.com/${image_name}.webp 800w, 
        https://res.cloudinary.com/brentdanley/image/upload/w_1400/v1532733435/brentdanley.com/${image_name}.webp 1400w`}
		sizes="(max-width: 1400px) 80vw, 1400px"
		src={`https://res.cloudinary.com/brentdanley/image/upload/w_600/v1532733435/brentdanley.com/${image_name}.webp`}
		{alt}
	/>
	{#if caption != undefined}
		<p class="caption">{caption}</p>
	{/if}
</div>

<style lang="scss">
	.cloudinary-image {
		width: 90%;
		margin: 2rem auto;
		padding: 1.5rem;
		background-color: var(--light-font-color);

		img {
			width: 100%;
		}
		.caption {
			font-size: 1.2rem;
			font-style: italic;
			margin-top: 0.2rem;
			color: var(--dark-font-color);
		}
	}
</style>
