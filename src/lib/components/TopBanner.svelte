<script lang="ts">
	import type { TopBanner } from '$lib/types/viewmodels';

	export let topBanner: TopBanner;
</script>

<div
	class="max-w-screen-2xl m-auto grid grid-cols-12 grid-rows-6 h-112 lg:h-128 bg-cover bg-center"
	style={`background-image: url(${topBanner.image.url})`}
>
	<div
		class="bg-[#2F80ED]/80 col-span-12 row-span-6 md:row-span-6 md:col-start-9 md:col-span-4 text-white flex flex-col justify-center p-8"
	>
		<h1 class="text-xl font-bold mb-4">{topBanner.title}</h1>
		<p class="font-light text-lg">
			{topBanner.subtitle}
		</p>
		{#if topBanner.primaryLinkUrl || topBanner.secondaryLinkUrl}
			<div class="card-actions">
				{#if topBanner.primaryLinkUrl}
					<a class="btn btn-primary mb-8 mr-8" href={topBanner.primaryLinkUrl}
						>{topBanner.primaryLinkText}</a
					>
				{/if}
				{#if topBanner.secondaryLinkUrl}
					<a class="btn btn-secondary mb-8 mr-8" href={topBanner.secondaryLinkUrl}
						>{topBanner.secondaryLinkText}</a
					>
				{/if}
			</div>
		{/if}
	</div>
</div>
