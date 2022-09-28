import type { Article, MenuItem, TopBanner } from '$lib/types/b3.contentful';

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
