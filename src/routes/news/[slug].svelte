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

	function renderOptions(links) {
		const assetMap = new Map();
		for (const asset of links.assets.block) {
			assetMap.set(asset.sys.id, asset);
		}

		return {
			renderNode: {
				[BLOCKS.PARAGRAPH]: (node, next) => `<p class="mb-6">${next(node.content)}</p>`,
				[BLOCKS.UL_LIST]: (node, next) => `<ul class="list-disc">${next(node.content)}</ul>`,
				[BLOCKS.OL_LIST]: (node, next) => `<ol class="list-decimal">${next(node.content)}</ol>`,
				[BLOCKS.LIST_ITEM]: (node, next) => `<li>${next(node.content)}</li>`,
				[BLOCKS.HEADING_1]: (node, next) => `<h1 class="text-4xl">${next(node.content)}</h1>`,
				[BLOCKS.HEADING_2]: (node, next) => `<h2 class="text-3xl">${next(node.content)}</h2>`,
				[BLOCKS.HEADING_3]: (node, next) => `<h3 class="text-2xl">${next(node.content)}</h3>`,
				[BLOCKS.HEADING_4]: (node, next) => `<h4 class="text-xl">${next(node.content)}</h4>`,
				[BLOCKS.EMBEDDED_ASSET]: (node, next) => {
					const asset = assetMap.get(node.data.target.sys.id);
					return `<img src=${asset.url} alt="${asset.title}" />`;
				}
			}
		};
	}

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

		{@html documentToHtmlString(article.body.json, renderOptions(article.body.links))}
	</div>

	<News {articles} />
</div>
