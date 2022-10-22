<script lang="ts">
	import type { TopBanner } from '$lib/types/viewmodels';

	export let topBanner: TopBanner;
</script>

<h1 class="text-xl font-bold mb-4">{topBanner.title}</h1>
<p class="font-light text-lg">
	{topBanner.subtitle}
</p>
{#if topBanner.primaryLinkUrl || topBanner.secondaryLinkUrl}
	<div class="card-actions mt-8">
		{#if topBanner.primaryLinkUrl}
			<a
				class="btn normal-case bg-white text-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
				href={topBanner.primaryLinkUrl}>{topBanner.primaryLinkText}</a
			>
		{/if}
		{#if topBanner.secondaryLinkUrl}
			<a class="btn normal-case bg-white text-black" href={topBanner.secondaryLinkUrl}
				>{topBanner.secondaryLinkText}</a
			>
		{/if}
	</div>
{/if}
