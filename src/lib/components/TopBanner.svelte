<script lang="ts">
	import type { TopBanner } from '$lib/types';
	import Card from '$lib/components/Card.svelte';

	export let topBanner: TopBanner;
</script>

<Card>
	<div>
		<h1 class="text-4xl font-bold mb-4">{topBanner.title}</h1>
		<p class="font-light text-lg mb-8">
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
	<img
		class="rounded-lg shadow-sm col-span-2"
		alt={topBanner.image.description}
		src={topBanner.image.url}
	/>
</Card>
