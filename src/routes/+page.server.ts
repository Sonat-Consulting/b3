import type { HomePageData } from '$lib/types';
import {
	ContentfulHomePageService,
	ContentfulArticleService,
	ContentfulMenuService,
	ContentfulVideoService
} from '$lib/services/contentful';

const homePageService = new ContentfulHomePageService();
const articleService = new ContentfulArticleService();
const menuService = new ContentfulMenuService();
const videoService = new ContentfulVideoService();

export async function load(): Promise<HomePageData> {
	const [topBanner, articles, menuItems, videos] = await Promise.all([
		homePageService.getTopBanner(),
		articleService.getArticles(),
		menuService.getMenuItems(),
		videoService.getFrontPageVideos()
	]);

	return { menuItems, topBanner, articles, videos };
}

export const prerender = true;
