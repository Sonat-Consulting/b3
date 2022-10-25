<script lang="ts">
	import { onMount } from 'svelte';
	import type { Video } from '$lib/types/viewmodels';

	export let videos: Video[] = [];

	let carouselRef: HTMLDivElement;

	const scrollIntoViewOptions: ScrollIntoViewOptions = {
		behavior: 'smooth',
		block: 'nearest',
		inline: 'start'
	};

	onMount(() => {
		if (window.location.hash) {
			carouselRef?.querySelector(window.location.hash)?.scrollIntoView(scrollIntoViewOptions);
		}
	});

	const onCarouselNavigation = (e: Event) => {
		e.preventDefault();
		const target = e.currentTarget as HTMLAnchorElement;
		const targetURL = new URL(target.href);
		carouselRef?.querySelector(targetURL.hash)?.scrollIntoView(scrollIntoViewOptions);
	};
</script>

<div bind:this={carouselRef} class="carousel w-full">
	{#each videos as video, i (video.id)}
		<div id={video.slug} class="carousel-item relative w-full">
			<div class="grid grid-cols-12 grid-rows-6 gap-x-2 w-full mx-auto">
				<a
					href={i >= videos.length - 1 ? `#${videos[0]?.slug}` : `#${videos[i + 1]?.slug}`}
					on:click={onCarouselNavigation}
					class="col-span-2 row-span-3 col-start-1 row-start-4 md:col-span-1 md:row-span-6 md:row-start-1 text-3xl flex justify-center items-center"
				>
					<span>❮</span>
				</a>
				<div
					class="col-span-8 row-span-3 col-start-3 row-start-4 md:col-start-2 md:row-span-6 md:col-span-3 text-center md:text-left flex flex-col justify-center p-4"
				>
					{#if video.title && video.description}
						<h2 class="mb-4 text-xl font-semibold">{video.title}</h2>
						<p class="leading-relaxed">{video.description}</p>
					{/if}
				</div>
				<a
					on:click={onCarouselNavigation}
					href={i === 0 ? `#${videos[videos.length - 1]?.slug}` : `#${videos[i - 1]?.slug}`}
					class="col-span-2 row-span-3 col-start-11 row-start-4 md:col-span-1 md:row-span-6 md:col-start-12 md:row-start-1 text-3xl flex justify-center items-center"
				>
					<span>❯</span>
				</a>
				<div
					class="col-span-12 row-span-3 cols-start-1 row-start-1 md:row-span-6 md:col-span-7 md:col-start-5 flex justify-center"
				>
					<div style="padding:56.25% 0 0 0" class="relative flex-1 bg-black">
						<video
							preload="none"
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
		</div>
	{/each}
</div>
