import type { Article, MenuItem } from '$lib/types/viewmodels';

export type ArticlePageData = {
	article: Article;
	articles: Article[];
	menuItems: MenuItem[];
};
