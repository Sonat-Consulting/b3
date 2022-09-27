<script lang="ts">
	import News from '$lib/components/News.svelte';
	import Header from '$lib/components/Header.svelte';
	import HorizontalPageDivider from '$lib/components/PageDivider.svelte';
	import type { ArticlePageData } from '$lib/types/b3.pagedata';
	import ContentfulHtml from '$lib/components/ContentfulHtml.svelte';

	export let data: ArticlePageData;

	$: article = data?.article;
	$: articles = data?.articles;
	$: menuItems = data?.menuItems;
</script>

<svelte:head>
	<title>Bergen Triathlon Events | {article.title}</title>
</svelte:head>

<Header {menuItems} />

<main class="container flex flex-col mx-auto article mt-20 mb-40">
	<div class="container max-w-screen-md mx-auto px-6 flex flex-col">
		<h1 class="text-4xl mb-8 text-center leading-normal">{article.title}</h1>

		<p class="mb-8 leading-relaxed">{article.ingress}</p>

		<img
			class="rounded-xl mb-8 w-full"
			alt={article.articleHeroImage?.title}
			src={`${article.articleHeroImage?.url}?fm=webp&w=720&h=480`}
		/>

		<div class="leading-relaxed">
			<ContentfulHtml richTextDocument={article.body.json} articleLinks={article.body.links} />
		</div>
	</div>

	<HorizontalPageDivider>Siste nyheter fra Bergen Triathlon Events</HorizontalPageDivider>

	<News {articles} />
</main>
