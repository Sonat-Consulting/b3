import client from '$lib/contentful/client';
import { ArticleService } from '$lib/services/contentful/ArticleService';
import { MenuService } from '$lib/services/contentful/MenuService';
import type { IArticleService, IMenuService } from '../../../b3';
import type { ArticlePageData } from '../../../b3.pageData';

export async function load({ params }): Promise<ArticlePageData> {
	const articleService: IArticleService = new ArticleService(client);
	const menuService: IMenuService = new MenuService(client);

	const [article, articles, menuItems] = await Promise.all([
		articleService.getArticleById(params.slug),
		articleService.getArticles(),
		menuService.getMenuItems()
	]);

	return { menuItems, article, articles };
}
