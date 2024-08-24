<script lang="ts">
	export let video_id;
</script>

<iframe
	class="youtube-player"
	src={`https://www.youtube.com/embed/${video_id}`}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
/>

<style>
	.youtube-player {
		width: 100%;
		aspect-ratio: 16/9;
	}
</style>
