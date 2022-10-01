<script lang="ts">
	import News from '$lib/components/News.svelte';
	import Header from '$lib/components/Header.svelte';
	import HorizontalPageDivider from '$lib/components/PageDivider.svelte';
	import Article from '$lib/components/Article.svelte';

	export let data: ArticlePageData;

	$: article = data?.article;
	$: articles = data?.articles.filter(({ slug }) => slug !== article.slug);
	$: menuItems = data?.menuItems;
</script>

<svelte:head>
	<title>Bergen Triathlon Events | {article.title}</title>
	<meta name="description" content={article.ingress} />
	<meta property="og:title" content={article.title} />
	<meta property="og:description" content={article.ingress} />
	<meta property="og:image" content={article.image.url} />
</svelte:head>

<Header {menuItems} />

<main class="container flex flex-col mx-auto article mt-20 mb-40">
	<Article {article} />
	<HorizontalPageDivider>Siste nyheter fra Bergen Triathlon Events</HorizontalPageDivider>
	<News {articles} />
</main>
