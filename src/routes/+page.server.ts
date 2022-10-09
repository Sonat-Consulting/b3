import type { HomePageData } from '$lib/types/pagedata';
import { VideoService } from '$lib/services';
import {
	ContentfulHomePageService,
	ContentfulArticleService,
	ContentfulMenuService
} from '$lib/services/contentful';

const homePageService = new ContentfulHomePageService();
const articleService = new ContentfulArticleService();
const menuService = new ContentfulMenuService();
const videoService = new VideoService();

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
