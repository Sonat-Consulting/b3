import type { Article, MenuItem } from '$lib/types';

export type ArticlePageData = {
	article: Article;
	articles: Article[];
	menuItems: MenuItem[];
};
