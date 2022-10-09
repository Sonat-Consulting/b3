import type { Options } from '@contentful/rich-text-html-renderer';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import type { ContentfulArticle, ContentfulIFrameEntry } from '$lib/services/contentful/types';
import type { Article } from '$lib/types';

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

const {
	PARAGRAPH,
	UL_LIST,
	OL_LIST,
	LIST_ITEM,
	HEADING_1,
	HEADING_2,
	HEADING_3,
	HEADING_4,
	EMBEDDED_ASSET,
	EMBEDDED_ENTRY
} = BLOCKS;

const parseRichTextOptions = ({
	body: {
		links: { assets, entries }
	}
}: ContentfulArticle): Partial<Options> => ({
	renderNode: {
		[PARAGRAPH]: ({ content }, next) => `<p>${next(content)}</p>`,
		[UL_LIST]: ({ content }, next) => `<ul class="list-disc ml-14">${next(content)}</ul>`,
		[OL_LIST]: ({ content }, next) => `<ol class="list-decimal ml-14">${next(content)}</ol>`,
		[LIST_ITEM]: ({ content }, next) => `<li>${next(content)}</li>`,
		[HEADING_1]: ({ content }, next) => `<h1 class="text-4xl">${next(content)}</h1>`,
		[HEADING_2]: ({ content }, next) => `<h2 class="text-3xl">${next(content)}</h2>`,
		[HEADING_3]: ({ content }, next) => `<h3 class="text-2xl">${next(content)}</h3>`,
		[HEADING_4]: ({ content }, next) => `<h4 class="text-xl">${next(content)}</h4>`,
		[EMBEDDED_ASSET]: ({ data }) => {
			const asset = assets?.block?.find((asset) => asset.sys.id === data.target.sys.id);
			if (asset) {
				return `<img src=${asset.url} alt="${asset.title}" />`;
			}
		},
		[EMBEDDED_ENTRY]: ({ data }) => {
			const entry = entries?.block?.find((entry) => entry.sys.id === data.target.sys.id);
			if (entry?.__typename === 'IFrame') {
				const iframe = entry as ContentfulIFrameEntry;
				return `<iframe src="${iframe.url}" height="${iframe.height}" width="${iframe.width}" title="${iframe.title}"></iframe>`;
			}
		}
	}
});
