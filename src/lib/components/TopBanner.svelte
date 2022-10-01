<script lang="ts">
	import type { ContentfulTopBanner } from '$lib/types/b3.contentful.js';
	import Card from '$lib/components/Card.svelte';

	export let topBanner: ContentfulTopBanner;
</script>

<Card>
	<div>
		<h1 class="text-4xl font-bold mb-4">{topBanner.topBannerTitle}</h1>
		<p class="font-light text-lg mb-8">
			{topBanner.topBannerSubtitle}
		</p>
		{#if topBanner.primaryLink || topBanner.secondaryLink}
			<div class="card-actions">
				{#if topBanner.primaryLink}
					<a class="btn btn-primary mb-8 mr-8" href={topBanner.primaryLink}
						>{topBanner.primaryLinkText}</a
					>
				{/if}
				{#if topBanner.secondaryLink}
					<a class="btn btn-secondary mb-8 mr-8" href={topBanner.secondaryLink}
						>{topBanner.secondaryLinkText}</a
					>
				{/if}
			</div>
		{/if}
	</div>
	<img
		class="rounded-lg shadow-sm col-span-2"
		alt={topBanner.topBannerImage.description}
		src={`${topBanner.topBannerImage.url}?fm=webp&w=720&h=480`}
	/>
</Card>
