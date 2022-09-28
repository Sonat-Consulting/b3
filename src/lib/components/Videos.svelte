<script lang="ts">
	import type { Video } from '$lib/types/b3.contentful';
	export let videos: Video[] = [];
</script>

<section class="grid grid-cols-1 md:grid-cols-2 gap-20 px-8 md:px-0">
	{#each videos as video (video.id)}
		<div>
			<div style="padding:56.25% 0 0 0" class="relative">
				<iframe
					class="absolute top-0 left-0 w-full h-full rounded-lg"
					title={video.title}
					src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0`}
					allow="autoplay; fullscreen; picture-in-picture"
					allowfullscreen
				/>
			</div>
			{#if video.title && video.description}
				<h2 class="mt-6 mb-4 text-xl font-semibold">{video.title}</h2>
				<p class="leading-relaxed">{video.description}</p>
			{/if}
		</div>
	{/each}
</section>
