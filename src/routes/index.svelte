<script context="module" lang="ts">
	import { HomePage } from '$lib/contentful/types/HomePage';

	export async function load({ fetch }): Promise<any> {
		const [homePageRes, articlesRes] = await Promise.all([
			fetch('/contentful/home.json'),
			fetch('/contentful/articles.json')
		]);

		if (homePageRes.ok) {
			const homePage: HomePage = await homePageRes.json();
			const articles = await articlesRes.json();
			return { props: { homePage, articles } };
		}
	}
</script>

<script lang="ts">
	import Hero from '$lib/hero.svelte';
	import Card from '$lib/card.svelte';
	import News from '$lib/news.svelte';
	import type { Article } from '$lib/contentful/types/Article';
	export let homePage: HomePage;
	export let articles: Article[];
</script>

<svelte:head>
	<title>B3</title>
</svelte:head>

<Hero />

<Card>
	<div>
		<h1 class="text-4xl font-bold mb-4">{homePage.content.topBannerTitle}</h1>
		<p class="font-light text-lg mb-8">
			{homePage.content.topBannerSubtitle}
		</p>
		<div class="card-actions">
			<a class="btn-primary mb-8 mr-8" href="/volunteers">Meld deg som frivillig</a>
			<button class="btn-secondary mb-8 mr-8">Mer informasjon</button>
		</div>
	</div>
	<img
		class="rounded-lg shadow-sm col-span-2"
		alt={homePage.content.topBannerImage.description}
		src={homePage.content.topBannerImage.url}
	/>
</Card>

<News {articles} />
