<script context="module" lang="ts">
	import type { HomePage } from '$lib/contentful/types/HomePage';

	export async function load({ fetch }): Promise<any> {
		const [homePageRes, articlesRes, menuRes] = await Promise.all([
			fetch('/contentful/home.json'),
			fetch('/contentful/articles.json'),
			fetch('/contentful/menu.json')
		]);

		if (homePageRes.ok) {
			const homePage: HomePage = await homePageRes.json();
			const articles = await articlesRes.json();
			const menuItems = await menuRes.json();
			return { props: { menuItems, homePage, articles } };
		}
	}
</script>

<script lang="ts">
	import Header from '$lib/header.svelte';
	import Hero from '$lib/hero.svelte';
	import Card from '$lib/card.svelte';
	import News from '$lib/news.svelte';
	import HorizontalPageDivider from '$lib/horizontalPageDivider.svelte';
	import type { Article } from '$lib/contentful/types/Article';
	import type { MenuItem } from '$lib/contentful/types/MenuItemCollectionResponse';

	export let menuItems: MenuItem[] = [];
	export let homePage: HomePage;
	export let articles: Article[];
</script>

<svelte:head>
	<title>B3</title>
</svelte:head>

<Header {menuItems} />

<Hero />

<main class="container flex flex-col mx-auto mt-20 mb-40">
	<Card>
		<div>
			<h1 class="text-4xl font-bold mb-4">{homePage.topBannerTitle}</h1>
			<p class="font-light text-lg mb-8">
				{homePage.topBannerSubtitle}
			</p>
			{#if homePage.primaryLink || homePage.secondaryLink}
				<div class="card-actions">
					{#if homePage.primaryLink}
						<a class="btn btn-primary mb-8 mr-8" href={homePage.primaryLink}
							>{homePage.primaryLinkText}</a
						>
					{/if}
					{#if homePage.secondaryLink}
						<a class="btn btn-secondary mb-8 mr-8" href={homePage.secondaryLink}
							>{homePage.secondaryLinkText}</a
						>
					{/if}
				</div>
			{/if}
		</div>
		<img
			class="rounded-lg shadow-sm col-span-2"
			alt={homePage.topBannerImage.description}
			src={homePage.topBannerImage.url}
		/>
	</Card>

	<HorizontalPageDivider>Siste nyheter fra Bergen Triathlon Events</HorizontalPageDivider>

	<News {articles} />
</main>
