import { Document } from '@contentful/rich-text-types';

type ContentfulAsset = {
	url: string;
	title: string;
	sys: {
		id: string;
	};
};

type ContentfulEntry = {
	__typename: string;
	sys: {
		id: string;
	};
};

type ContentfulArticle = {
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

type ContentfulArticleLinks = {
	assets: {
		block: ContentfulAsset[];
	};
	entries: {
		inline: any[];
		block: ContentfulEntry[];
	};
};

type ContentfulIFrameEntry = ContentfulEntry & {
	title: string;
	url: string;
	width: string;
	height: string;
};

type ContentfulTopBanner = {
	topBannerTitle: string;
	topBannerSubtitle: string;
	topBannerImage: {
		url: string;
		title: string;
		description: string;
	};
	primaryLink: string | null;
	primaryLinkText: string | null;
	secondaryLink: string | null;
	secondaryLinkText: string | null;
};

type ContentfulMenuItem = {
	url: string;
	text: string;
};

type ContentfulVideo = {
	id: number;
	title?: string;
	description?: string;
};
