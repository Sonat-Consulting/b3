import type { Article, MenuItem, TopBanner } from './b3';

interface IMenuService {
	getMenuItems(): Promise<MenuItem[]>;
}

interface IArticleService {
	getArticles(): Promise<Article[]>;
	getArticleById(id: string): Promise<Article>;
}

interface IHomePageService {
	getTopBanner(): Promise<TopBanner>;
}
