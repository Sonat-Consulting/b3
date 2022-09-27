import client from '$lib/infrastructure/contentful/graphQLClient';
import { ArticleService } from '$lib/services/contentful/ArticleService';
import { MenuService } from '$lib/services/contentful/MenuService';
import type { IArticleService, IMenuService } from '$lib/types/b3';
import type { ArticlePageData } from '$lib/types/b3.pagedata';

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
