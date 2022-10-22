<script lang="ts">
	import type { ArticlePageData } from '$lib/types/pagedata';
	import News from '$lib/components/News.svelte';
	import Header from '$lib/components/Header.svelte';
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

<main class="container flex flex-col mx-auto article my-10 md:my-16">
	<Article {article} />
	<section class="md:px-0 mt-16 lg:mt-32">
		<News {articles} />
	</section>
</main>
