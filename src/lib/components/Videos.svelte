<script lang="ts">
	import type { Video } from '$lib/types/viewmodels';

	export let videos: Video[] = [];

	$: video = videos[0];
</script>

<div class="grid grid-cols-12 grid-rows-6 gap-x-8">
	<div
		class="p-8 row-start-5 row-span-2 lg:row-span-6 col-span-12 lg:col-span-4 flex flex-col justify-center"
	>
		{#if video.title && video.description}
			<h2 class="mb-4 text-xl font-semibold">{video.title}</h2>
			<p class="leading-relaxed">{video.description}</p>
		{/if}
	</div>
	<div
		class="row-span-4 lg:row-span-6 col-span-12 lg:col-span-8 lg:col-start-5 flex justify-center"
	>
		<div style="padding:56.25% 0 0 0" class="relative flex-1 bg-black">
			<video
				poster={video.poster}
				controls
				controlslist="nodownload"
				class="absolute top-0 left-0 w-full h-full"
			>
				{#each video.sources as source (source.uri)}
					<source src={source.uri} type={source.type} />
				{/each}
			</video>
		</div>
	</div>
</div>
