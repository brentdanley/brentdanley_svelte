<!-- MosaicItem.svelte -->
<script lang='ts'>
    import Fa from 'svelte-fa/src/fa.svelte';
	import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
    import { createEventDispatcher } from 'svelte';

    import type { Photo } from './FlickrPhotoset.svelte';
    export let photo: Photo;
  
    const dispatch = createEventDispatcher();
  
    function handleClick() {
    dispatch('openPopup', {
      photo: photo
    });
  }
</script>

<div class="mosaic-item" on:click={handleClick} on:keyup={handleClick}>
    <img
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        alt={photo.title}
    />
</div>

<style lang="scss">
    .mosaic-item {
  justify-content: center;
  align-items: center;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
    } 
    </style>