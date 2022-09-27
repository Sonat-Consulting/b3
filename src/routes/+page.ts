import type { HomePageData } from '$lib/types/b3.pagedata';
import { HomePageService } from '$lib/services/contentful/HomePageService';
import client from '$lib/infrastructure/contentful/graphQLClient';
import { ArticleService } from '$lib/services/contentful/ArticleService';
import { MenuService } from '$lib/services/contentful/MenuService';

export async function load(): Promise<HomePageData> {
	const homePageService = new HomePageService(client);
	const articleService = new ArticleService(client);
	const menuService = new MenuService(client);

	const [topBanner, articles, menuItems] = await Promise.all([
		homePageService.getTopBanner(),
		articleService.getArticles(),
		menuService.getMenuItems()
	]);

	return { menuItems, topBanner, articles };
}

export const prerender = true;
