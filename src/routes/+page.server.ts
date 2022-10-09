import { HomePageService } from '$lib/services/contentful/HomePageService';
import { ArticleService } from '$lib/services/contentful/ArticleService';
import { MenuService } from '$lib/services/contentful/MenuService';
import { VideoService } from '$lib/services/contentful/VideoService';
import type { HomePageData } from '$lib/types';

const homePageService = new HomePageService();
const articleService = new ArticleService();
const menuService = new MenuService();
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
