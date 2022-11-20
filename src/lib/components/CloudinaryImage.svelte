<script lang="ts">
	export let alt: string;
	export let image_name: string;
</script>

<img
	srcset={`https://res.cloudinary.com/brentdanley/image/upload/w_480/v1532733435/brentdanley.com/${image_name}.webp 480w, 
        https://res.cloudinary.com/brentdanley/image/upload/w_800/v1532733435/brentdanley.com/${image_name}.webp 800w, 
        https://res.cloudinary.com/brentdanley/image/upload/w_1400/v1532733435/brentdanley.com/${image_name}.webp 1400w`}
	sizes="(max-width: 1400px) 80vw, 1400px"
	src={`https://res.cloudinary.com/brentdanley/image/upload/w_600/v1532733435/brentdanley.com/${image_name}.webp`}
	{alt}
/>
