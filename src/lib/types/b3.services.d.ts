import type { Video, Article, MenuItem, TopBanner } from '$lib/types/b3.contentful';

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

interface IVideoService {
	getFrontPageVideos(): Promise<Video[]>;
}
