<script lang="ts">
	import { BLOCKS, Document } from '@contentful/rich-text-types';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import type { ArticleLinks, EntryBlock, IFrameEntry } from '$lib/types/b3';

	export let richTextDocument: Document;
	export let articleLinks: ArticleLinks;

	let assetMap, entryMap: Map<any, any>;

	$: {
		assetMap = new Map();
		for (const asset of articleLinks?.assets.block) {
			assetMap.set(asset.sys.id, asset);
		}

		entryMap = new Map<string, EntryBlock>();
		for (const entry of articleLinks?.entries.block) {
			entryMap.set(entry.sys.id, entry);
		}
	}

	// https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
	const renderOptions = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, next) => `<p class="mb-6">${next(node.content)}</p>`,
			[BLOCKS.UL_LIST]: (node, next) => `<ul class="list-disc ml-14">${next(node.content)}</ul>`,
			[BLOCKS.OL_LIST]: (node, next) => `<ol class="list-decimal ml-14">${next(node.content)}</ol>`,
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
				const entry = entryMap.get(node.data.target.sys.id);
				if (entry.__typename === 'IFrame') {
					const iframeEntry = entry as IFrameEntry;
					return `
								<iframe
										src="${iframeEntry.url}"
										height="${iframeEntry.height}"
										width="${iframeEntry.width}"
										title="${iframeEntry.title}"
								></iframe>
						`;
				}
			}
		}
	};
</script>

<div class="leading-relaxed">
	{@html documentToHtmlString(richTextDocument, renderOptions)}
</div>
