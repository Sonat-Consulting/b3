<script lang='ts'>
	import Header from '$lib/header.svelte';
	import Card from '$lib/card.svelte';
	import News from '$lib/news.svelte';
	import HorizontalPageDivider from '$lib/horizontalPageDivider.svelte';
	import type { Article } from '$lib/contentful/types/Article';
	import type { MenuItem } from '$lib/contentful/types/MenuItemCollectionResponse';
	import type { HomePage } from '$lib/contentful/types/HomePage';

	type Props = {
		homePage: HomePage
		menuItems: MenuItem[]
		articles: Article[]
	}

	export let data: Props;

	const { homePage, menuItems, articles } = data;
</script>

<svelte:head>
	<title>Bergen Triathlon Events</title>
</svelte:head>

<Header {menuItems} />

<main class='container flex flex-col mx-auto mt-20 mb-40'>
	<Card>
		<div>
			<h1 class='text-4xl font-bold mb-4'>{homePage.topBannerTitle}</h1>
			<p class='font-light text-lg mb-8'>
				{homePage.topBannerSubtitle}
			</p>
			{#if homePage.primaryLink || homePage.secondaryLink}
				<div class='card-actions'>
					{#if homePage.primaryLink}
						<a class='btn btn-primary mb-8 mr-8' href={homePage.primaryLink}
						>{homePage.primaryLinkText}</a
						>
					{/if}
					{#if homePage.secondaryLink}
						<a class='btn btn-secondary mb-8 mr-8' href={homePage.secondaryLink}
						>{homePage.secondaryLinkText}</a
						>
					{/if}
				</div>
			{/if}
		</div>
		<img
			class='rounded-lg shadow-sm col-span-2'
			alt={homePage.topBannerImage.description}
			src={`${homePage.topBannerImage.url}?fm=webp&w=720&h=480`}
		/>
	</Card>

	<HorizontalPageDivider>Siste nyheter fra Bergen Triathlon Events</HorizontalPageDivider>

	<News {articles} />
</main>
