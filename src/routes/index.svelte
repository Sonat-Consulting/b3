<script context="module" lang="ts">
	import { HomePage } from '$lib/contentful/types/HomePage';

	export async function load({ fetch }): Promise<any> {
		const res = await fetch('/contentful/home.json');

		if (res.ok) {
			const homePage: HomePage = await res.json();
			return { props: { homePage } };
		}
	}
</script>

<script lang="ts">
	import { format, parseISO } from 'date-fns/index.js';
	import { nb } from 'date-fns/locale/index.js';
	import Hero from '$lib/hero.svelte';
	import Card from '$lib/card.svelte';
	import ArticleLink from '$lib/article/link.svelte';
	export let homePage: HomePage;
</script>

<svelte:head>
	<title>B3</title>
</svelte:head>

<Hero />

<Card>
	<div>
		<h1 class="text-4xl font-bold mb-4">{homePage.content.topBannerTitle}</h1>
		<p class="font-light text-lg">
			{homePage.content.topBannerSubtitle}
		</p>
		<div class="card-actions">
			<a class="btn btn-primary" href="/volunteers">Jeg vil være med!</a>
			<button class="btn btn-ghost">Mer info</button>
		</div>
	</div>
	<img
		class="rounded-lg shadow-sm"
		alt={homePage.content.topBannerImage.description}
		src={homePage.content.topBannerImage.url}
	/>
</Card>

<div class="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
	{#each homePage.articleCollection.items as article}
		<ArticleLink
			imageAltText={article.articleHeroImage.title}
			url={`/news/${article.sys.id}`}
			date={format(parseISO(article.date), 'MMM d, yy', { locale: nb })}
			imageSrc={article.articleHeroImage.url}
			title={article.title}
			ingress={article.ingress}
		/>
	{/each}
</div>
