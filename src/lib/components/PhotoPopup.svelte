<!-- Popup.svelte -->
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Fa from 'svelte-fa/src/fa.svelte';
	import { faExternalLink, faClose } from '@fortawesome/free-solid-svg-icons';
	import type { Photo } from './FlickrPhotoset.svelte';
  
    const dispatch = createEventDispatcher();
    export let photo: Photo;
  
    function handleClose() {
      dispatch('closePopup');
    }
  </script>
  
  {#if photo}
  <div class="popup" on:click={handleClose} on:keyup={handleClose}>
    <div class="popup-content">
        
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
      <div on:click={handleClose} on:keyup={handleClose} class="close-button"><Fa icon={faClose} /></div>
    </div>
  </div>
  {/if}

  <style lang="scss">
    .popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      z-index: 1000;
    }
    .popup-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 1rem;
      border-radius: 0.5rem;
    }
    .caption {
      margin-top: 1rem;
      font-size: 1.8rem;
      text-align: center;
    }
    .caption a {
      color: #000;
      text-decoration: none;
    }
    .caption a:hover {
      text-decoration: underline;
    }   
    .close-button {
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-size: 1.5rem;
        cursor: pointer;
        border-radius: 50%;
        background-color: var(--dark-font-color);
        color: var(--primary-light-color);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        height: 1.4rem;
        width: 1.4rem;
    }
  </style>