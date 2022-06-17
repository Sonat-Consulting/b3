import type { Document } from "@contentful/rich-text-types";

export type Article = {
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

export type ArticleLinks = {
	assets: {
		block: any[];
	};
	entries: {
		inline: any[];
		block: EntryBlock[];
	}
}

export type EntryBlock = IFrameEntry | {
	sys: {
		id: string;
	};
	__typename: string;
	[key: string]: any;
};

export type IFrameEntry = {
	sys: {
		id: string;
	};
	__typename: "IFrame";
	title: string;
	url: string;
	width: string;
	height: string;
}