import type { Document } from '@contentful/rich-text-types';

export type ContentfulArticle = {
	slug: string;
	title: string;
	ingress: string;
	body: {
		json: Document;
		links: ContentfulArticleLinks;
	};
	articleHeroImage: {
		title: string;
		url: string;
	} | null;
	author: {
		name: string;
	};
	date: string;
};

export type ContentfulArticleLinks = {
	assets: {
		block: ContentfulAsset[];
	};
	entries: {
		inline: any[];
		block: ContentfulEntry[];
	};
};

export type ContentfulAsset = {
	url: string;
	title: string;
	sys: {
		id: string;
	};
};

export type ContentfulEntry = {
	__typename: string;
	sys: {
		id: string;
	};
};

export type ContentfulIFrameEntry = ContentfulEntry & {
	title: string;
	url: string;
	width: string;
	height: string;
};
