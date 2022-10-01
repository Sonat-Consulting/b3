type TopBanner = {
	title: string;
	subtitle: string;
	image: {
		url: string;
		title: string;
		description: string;
	};
	primaryLinkUrl: string;
	primaryLinkText: string;
	secondaryLinkUrl: string;
	secondaryLinkText: string;
};

type MenuItem = {
	url: string;
	text: string;
};

type Video = {
	id: number;
	title?: string;
	description?: string;
};

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
	topBanner: TopBanner;
	articles: Article[];
	menuItems: MenuItem[];
	videos: Video[];
};

type ArticlePageData = {
	article: Article;
	articles: Article[];
	menuItems: MenuItem[];
};
