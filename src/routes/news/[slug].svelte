<script context="module" lang="ts">
	export async function load({ page, fetch }): Promise<any> {
		const [articleRes, articlesRes, menuRes] = await Promise.all([
			fetch(`/contentful/articles/${page.params.slug}.json`),
			fetch(`/contentful/articles.json`),
			fetch('/contentful/menu.json')
		]);

		if (articlesRes.ok) {
			const [article, articles, menuItems] = await Promise.all([
				articleRes.json(),
				articlesRes.json(),
				menuRes.json()
			]);
			return { props: { menuItems, article, articles } };
		}
	}
</script>

<script lang="ts">
	import { BLOCKS } from '@contentful/rich-text-types';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import News from '$lib/news.svelte';
	import Header from '$lib/header.svelte';
	import HorizontalPageDivider from '$lib/horizontalPageDivider.svelte';
	import type { MenuItem } from '$lib/contentful/types/MenuItemCollectionResponse';
	import type {
		Article,
		ArticleLinks,
		EntryBlock,
		IFrameEntry
	} from '$lib/contentful/types/Article';

	export let article: Article;
	export let articles: Article[];
	export let menuItems: MenuItem[] = [];

	function renderOptions(links: ArticleLinks) {
		const assetMap = new Map();
		for (const asset of links.assets.block) {
			assetMap.set(asset.sys.id, asset);
		}

		const entryMap = new Map<string, EntryBlock>();
		for (const entry of links.entries.block) {
			entryMap.set(entry.sys.id, entry);
		}

		return {
			renderNode: {
				[BLOCKS.PARAGRAPH]: (node, next) => `<p class="mb-6">${next(node.content)}</p>`,
				[BLOCKS.UL_LIST]: (node, next) => `<ul class="list-disc ml-14">${next(node.content)}</ul>`,
				[BLOCKS.OL_LIST]: (node, next) =>
					`<ol class="list-decimal ml-14">${next(node.content)}</ol>`,
				[BLOCKS.LIST_ITEM]: (node, next) => `<li>${next(node.content)}</li>`,
				[BLOCKS.HEADING_1]: (node, next) => `<h1 class="text-4xl">${next(node.content)}</h1>`,
				[BLOCKS.HEADING_2]: (node, next) => `<h2 class="text-3xl">${next(node.content)}</h2>`,
				[BLOCKS.HEADING_3]: (node, next) => `<h3 class="text-2xl">${next(node.content)}</h3>`,
				[BLOCKS.HEADING_4]: (node, next) => `<h4 class="text-xl">${next(node.content)}</h4>`,
				[BLOCKS.EMBEDDED_ASSET]: (node, next) => {
					const asset = assetMap.get(node.data.target.sys.id);
					return `<img src=${asset.url} alt="${asset.title}" />`;
				},
				[BLOCKS.EMBEDDED_ENTRY]: (node, next) => {
					// https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
					const entry = entryMap.get(node.data.target.sys.id);

					if (entry.__typename === 'IFrame') {
						const iframeEntry = entry as IFrameEntry;
						const iframeElementString = `
                            <iframe
                                src="${iframeEntry.url}"
                                height="${iframeEntry.height}"
                                width="${iframeEntry.width}"
                                frameBorder="0"
                                scrolling="no"
                                title="${iframeEntry.title}"
                            ></iframe>
                        `;
						return iframeElementString;
					}
				}
			}
		};
	}
</script>

<svelte:head>
	<title>Bergen Triathlon Events</title>
</svelte:head>

<Header {menuItems} />

<main class="container flex flex-col mx-auto article mt-20 mb-40">
	<div class="container max-w-screen-md mx-auto px-6 flex flex-col">
		<h1 class="text-4xl mb-6">{article.title}</h1>

		<p class="mb-6">{article.ingress}</p>

		<img
			class="rounded-xl mb-6 w-full"
			v-if="article.articleHeroImage"
			alt={article.articleHeroImage?.title}
			src={article.articleHeroImage?.url}
		/>

		{@html documentToHtmlString(article.body.json, renderOptions(article.body.links))}
	</div>

	<HorizontalPageDivider>Siste nyheter fra Bergen Triathlon Events</HorizontalPageDivider>

	<News {articles} />
</main>
