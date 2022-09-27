<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Card from '$lib/components/card.svelte';
	import News from '$lib/components/news.svelte';
	import HorizontalPageDivider from '$lib/components/horizontalPageDivider.svelte';
	import type { HomePageData } from '$lib/types/b3.pagedata';
	export let data: HomePageData;
	const { topBanner, menuItems, articles } = data;
</script>

<svelte:head>
	<title>Bergen Triathlon Events</title>
</svelte:head>

<Header {menuItems} />

<main class="container flex flex-col mx-auto mt-20 mb-40">
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

	<HorizontalPageDivider>Siste nyheter fra Bergen Triathlon Events</HorizontalPageDivider>

	<News {articles} />
</main>
