<script lang="ts">
	import type { Video } from '$lib/types/viewmodels';
	import { onMount } from 'svelte';
	import videoJs from 'video.js';

	export let video: Video;

	const playerOptions = {};

	let videoRef: HTMLVideoElement;
	onMount(() => {
		videoJs(videoRef);
	});
</script>

<video
	bind:this={videoRef}
	poster={video.poster}
	controls
	data-setup={JSON.stringify(playerOptions)}
	class="video-js vjs-default-skin vjs-big-play-centered w-full h-full"
>
	{#each video.sources as source (source.uri)}
		<source src={source.uri} type={source.type} />
	{/each}
</video>
