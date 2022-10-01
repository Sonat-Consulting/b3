import type {
	ContentfulMenuItem,
	ContentfulTopBanner,
	ContentfulVideo
} from '$lib/types/b3.contentful';

import type { Article } from '$lib/types/b3.pagedata';

interface IMenuService {
	getMenuItems(): Promise<ContentfulMenuItem[]>;
}

interface IArticleService {
	getArticles(): Promise<Article[]>;
	getArticleById(id: string): Promise<Article>;
}

interface IHomePageService {
	getTopBanner(): Promise<ContentfulTopBanner>;
}

interface IVideoService {
	getFrontPageVideos(): Promise<ContentfulVideo[]>;
}
