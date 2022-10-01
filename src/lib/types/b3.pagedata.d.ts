import type { ContentfulMenuItem, ContentfulTopBanner } from '$lib/types/b3.contentful';

type Article = {
	slug: string;
	title: string;
	ingress: string;
	body: string;
	image: {
		url: string;
		title: string;
	};
	author: string;
	date: string;
};

type HomePageData = {
	topBanner: ContentfulTopBanner;
	articles: Article[];
	menuItems: ContentfulMenuItem[];
	videos: Video[];
};

type ArticlePageData = {
	article: Article;
	articles: Article[];
	menuItems: ContentfulMenuItem[];
};
