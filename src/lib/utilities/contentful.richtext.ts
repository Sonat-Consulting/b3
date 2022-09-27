import { BLOCKS } from '@contentful/rich-text-types';
import type { Options } from '@contentful/rich-text-html-renderer';
import type { Asset, Entry, IFrameEntry } from '$lib/types/b3.contentful';

/**
 * Create options for Contentful Rich Text renderer
 * https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
 * @param assets
 * @param entries
 */
const contentfulRichTextOptions = (assets: Asset[], entries: Entry[]): Partial<Options> => ({
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
		[BLOCKS.UL_LIST]: (node, next) => `<ul class="list-disc ml-14">${next(node.content)}</ul>`,
		[BLOCKS.OL_LIST]: (node, next) => `<ol class="list-decimal ml-14">${next(node.content)}</ol>`,
		[BLOCKS.LIST_ITEM]: (node, next) => `<li>${next(node.content)}</li>`,
		[BLOCKS.HEADING_1]: (node, next) => `<h1 class="text-4xl">${next(node.content)}</h1>`,
		[BLOCKS.HEADING_2]: (node, next) => `<h2 class="text-3xl">${next(node.content)}</h2>`,
		[BLOCKS.HEADING_3]: (node, next) => `<h3 class="text-2xl">${next(node.content)}</h3>`,
		[BLOCKS.HEADING_4]: (node, next) => `<h4 class="text-xl">${next(node.content)}</h4>`,
		[BLOCKS.EMBEDDED_ASSET]: (node, next) => {
			const asset = assets?.find((asset) => asset.sys.id === node.data.target.sys.id);
			if (asset) {
				return `<img src=${asset.url} alt="${asset.title}" />`;
			}
		},
		[BLOCKS.EMBEDDED_ENTRY]: (node, next) => {
			const entry = entries?.find((entry) => entry.sys.id === node.data.target.sys.id);
			if (entry?.__typename === 'IFrame') {
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
});

export default contentfulRichTextOptions;
