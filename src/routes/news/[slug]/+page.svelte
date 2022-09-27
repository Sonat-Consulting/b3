<script lang="ts">
	import type { ArticlePageData } from '$lib/types/b3.pagedata';
	import News from '$lib/components/News.svelte';
	import Header from '$lib/components/Header.svelte';
	import HorizontalPageDivider from '$lib/components/PageDivider.svelte';
	import Article from '$lib/components/Article.svelte';

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
	<Article {article} />
	<HorizontalPageDivider>Siste nyheter fra Bergen Triathlon Events</HorizontalPageDivider>
	<News {articles} />
</main>
