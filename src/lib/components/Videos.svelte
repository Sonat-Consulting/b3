<script lang="ts">
	import type { Video } from '$lib/types/viewmodels';

	export let videos: Video[] = [];
</script>

<section class="grid grid-cols-1 md:grid-cols-2 gap-20 px-8 md:px-0">
	{#each videos as video (video.id)}
		<div>
			<div style="padding:56.25% 0 0 0" class="relative">
				<video
					poster={video.poster}
					controls
					class="absolute top-0 left-0 w-full h-full rounded-lg"
				>
					{#each video.sources as source (source.uri)}
						<source src={source.uri} type={source.type} />
					{/each}
				</video>
			</div>
			{#if video.title && video.description}
				<h2 class="mt-6 mb-4 text-xl font-semibold">{video.title}</h2>
				<p class="leading-relaxed">{video.description}</p>
			{/if}
		</div>
	{/each}
</section>
