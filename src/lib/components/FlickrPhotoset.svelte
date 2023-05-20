<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';

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

		console.log('response', response.data);
		photos = response.data.photoset.photo;
	});
</script>

<div>
	{#each photos as photo (photo.id)}
		<div class="flickr-photo">
			<img
				src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
				alt={photo.title}
			/>
			<p class="caption">{photo.title}</p>
		</div>
	{/each}
</div>

<style lang="scss">
	.flickr-photo {
		background-color: white;
		display: inline-block;
		margin: 1rem;
		padding: 1rem;

		.caption {
			font-size: 1.8rem;
			color: var(--dark-font-color);
			margin: 0;
		}
	}
</style>
