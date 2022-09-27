import { Document } from '@contentful/rich-text-types';

type MenuItem = {
	url: string;
	text: string;
};

type Article = {
	slug: string;
	title: string;
	ingress: string;
	body: {
		json: Document;
		links: ArticleLinks;
	};
	articleHeroImage?: {
		title: string;
		url: string;
	} | null;
	author: {
		name: string;
	};
	date: string;
};

type ArticleLinks = {
	assets: {
		block: any[];
	};
	entries: {
		inline: any[];
		block: EntryBlock[];
	};
};

type EntryBlock =
	| IFrameEntry
	| {
			sys: {
				id: string;
			};
			__typename: string;
			[key: string]: any;
	  };

type IFrameEntry = {
	sys: {
		id: string;
	};
	__typename: 'IFrame';
	title: string;
	url: string;
	width: string;
	height: string;
};

type TopBanner = {
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
