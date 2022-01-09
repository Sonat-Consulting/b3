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

<div class="relative h-12 text-center">
	<div class="absolute mt-6 border-t-2 border-sky-300 w-full z-0" />
	<div
		class="font-medium border-2 border-sky-300 inline-block rounded-xl text-center px-8 py-2.5 h-full bg-white relative z-10"
	>
		Siste nyheter fra Bergen Triathlon Events
	</div>
</div>

<div class="p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
	{#each homePage.articleCollection.items as article}
		<ArticleLink
			imageAltText={article.articleHeroImage.title}
			url={`/news/${article.slug}`}
			date={format(parseISO(article.date), 'MMM d, yy', { locale: nb })}
			imageSrc={article.articleHeroImage.url}
			title={article.title}
			ingress={article.ingress}
		/>
	{/each}
</div>
