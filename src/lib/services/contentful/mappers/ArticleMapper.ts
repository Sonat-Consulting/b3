import type { ContentfulArticle } from '$lib/services/contentful/types/b3.contentful';
import type { ContentfulIFrameEntry } from '$lib/services/contentful/types/b3.contentful';
import type { Options } from '@contentful/rich-text-html-renderer';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export class ArticleMapper {
	mapContenfulArticleToInternal(src: ContentfulArticle): Article {
		return {
			title: src.title,
			ingress: src.ingress,
			author: src.author?.name,
			date: src.date,
			slug: src.slug,
			image: {
				url: `${src.articleHeroImage?.url}?fm=webp&w=720&h=480`,
				title: src.articleHeroImage.title
			},
			body: src.body?.json ? documentToHtmlString(src.body?.json, parseRichTextOptions(src)) : ''
		};
	}
}

const parseRichTextOptions = ({
	body: {
		links: { assets, entries }
	}
}: ContentfulArticle): Partial<Options> => {
	return {
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
				const asset = assets?.block?.find((asset) => asset.sys.id === node.data.target.sys.id);
				if (asset) {
					return `<img src=${asset.url} alt="${asset.title}" />`;
				}
			},
			[BLOCKS.EMBEDDED_ENTRY]: (node, next) => {
				const entry = entries?.block?.find((entry) => entry.sys.id === node.data.target.sys.id);
				if (entry?.__typename === 'IFrame') {
					const iframeEntry = entry as ContentfulIFrameEntry;
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
};
