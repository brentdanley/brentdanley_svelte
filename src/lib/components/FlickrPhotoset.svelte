<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import axios from 'axios';
	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	export let photoset_id: string; // Photoset ID of Flickr album

	type Photo = {
		id: string;
		owner: string;
		secret: string;
		server: string;
		farm: number;
		title: string;
		ispublic: number;
		isfriend: number;
		isfamily: number;
	};
	let photos: Photo[] = [];

	onMount(async () => {
		const response = await axios.get('https://api.flickr.com/services/rest/', {
			params: {
				method: 'flickr.photosets.getPhotos',
				api_key: import.meta.env.VITE_FLICKR_API_KEY,
				photoset_id: photoset_id,
				user_id: import.meta.env.VITE_FLICKR_USER_ID,
				format: 'json',
				nojsoncallback: 1
			}
		});

		photos = response.data.photoset.photo;
	});
</script>

// Uses svelte-carousel to display a Flickr album. https://vadimkorr.github.io/svelte-carousel/
{#if browser && photos.length > 0}
	<Carousel particlesToShow={3} particlesToScroll={3}>
		{#each photos as photo (photo.id)}
			<div class="flickr-photo">
				<img
					src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
					alt={photo.title}
				/>
				<p class="caption">
					<a
						href={`https://www.flickr.com/photos/${import.meta.env.VITE_FLICKR_USER_ID}/${
							photo.id
						}`}
						target="_blank">{photo.title} <sup><Fa icon={faExternalLink} /></sup></a
					>
				</p>
			</div>
		{/each}
	</Carousel>
{/if}

<style lang="scss">
	.flickr-photo {
		background-color: white;
		display: inline-grid;
		grid-template-areas: 'image' 'caption';
		grid-template-rows: 1fr 80px;
		margin: 1rem;
		padding: 1rem;

		img {
			grid-area: image;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.caption {
			grid-area: caption;
			font-size: 1.8rem;
			color: var(--dark-font-color);
			margin: 0;

			a {
				font-size: 0.8em;
				text-decoration: none;
			}
		}
	}
</style>
