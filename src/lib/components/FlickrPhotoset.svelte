<script lang="ts" context="module">
	export type Photo = {
		id: string;
		owner: string;
		secret: string;
		server: string;
		farm: number;
		title: string;
		ispublic: number;
		isfriend: number;
		isfamily: number;
	} | null;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';

	export let photoset_id: string; // Photoset ID of Flickr album
	import MosaicItem from './MosaicItem.svelte';
	import PhotoPopup from './PhotoPopup.svelte';
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
		console.log('photos', photos);
	});

	let isPopupOpen = false;
	let selectedPhoto: Photo = null;

	function handleOpenPopup(event: CustomEvent<{ photo: Photo }>) {
		isPopupOpen = true;
		selectedPhoto = event.detail.photo;
	}

	function handleClosePopup() {
		isPopupOpen = false;
	}
</script>

<h2>Photos</h2>
<div class="photo-wrapper">
	{#each photos as photo (photo?.id)}
		<MosaicItem {photo} on:openPopup={handleOpenPopup} />
	{/each}
</div>

{#if isPopupOpen}
	<PhotoPopup on:closePopup={handleClosePopup} photo={selectedPhoto} />
{/if}

<style lang="scss">
	.photo-wrapper {
		display: grid;
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		); /* Adjust the column width as needed */
		grid-auto-rows: 1fr; /* Each row has equal height */
		grid-gap: 10px; /* Adjust the gap between grid items as needed */
	}

	.flickr-photo {
		background-color: white;
		display: inline-grid;
		grid-template-areas: 'image' 'caption';
		grid-template-rows: 1fr 80px;
		height: 100%;
		padding: 1rem;
		margin: 1rem;

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
