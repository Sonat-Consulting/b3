<script context="module" lang="ts">
	export async function load({ page, fetch }): Promise<any> {
		const [articleRes, articlesRes] = await Promise.all([
			fetch(`/contentful/articles/${page.params.slug}.json`),
			fetch(`/contentful/articles.json`)
		]);

		if (articlesRes.ok) {
			const [article, articles] = await Promise.all([articleRes.json(), articlesRes.json()]);
			return { props: { article, articles } };
		}
	}
</script>

<script lang="ts">
	import { BLOCKS } from '@contentful/rich-text-types';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import News from '$lib/news.svelte';
	export let article;
	export let articles;

	const richTextParserOpts = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, next) => `<p class="mb-6">${next(node.content)}</p>`
		}
	};
</script>

<svelte:head>
	<title>B3</title>
</svelte:head>

<div class="container flex flex-col mx-auto article">
	<div
		class="container max-w-screen-md mx-auto pt-6 md:pt-12 pb-6 px-6 mb-3 flex items-center flex-col"
	>
		<h1 class="text-4xl mb-6">{article.title}</h1>

		<p class="mb-6">{article.ingress}</p>

		<img
			class="rounded-xl mb-6 w-full"
			alt={article.articleHeroImage.title}
			src={article.articleHeroImage.url}
		/>

		{@html documentToHtmlString(article.body.json, richTextParserOpts)}
	</div>

	<News {articles} />
</div>
