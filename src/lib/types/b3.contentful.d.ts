import { Document } from '@contentful/rich-text-types';

type Asset = {
	url: string;
	title: string;
	sys: {
		id: string;
	};
};

type Entry = {
	__typename: string;
	sys: {
		id: string;
	};
};

type Article = {
	slug: string;
	title: string;
	ingress: string;
	body: {
		json: Document;
		links: ArticleLinks;
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

type ArticleLinks = {
	assets: {
		block: Asset[];
	};
	entries: {
		inline: any[];
		block: Entry[];
	};
};

type IFrameEntry = Entry & {
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

type MenuItem = {
	url: string;
	text: string;
};
