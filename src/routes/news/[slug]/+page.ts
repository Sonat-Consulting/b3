import { ArticleService } from '$lib/services/contentful/ArticleService';
import { MenuService } from '$lib/services/contentful/MenuService';
import type { ArticlePageData } from '$lib/types/b3.pagedata';

export async function load({ params }): Promise<ArticlePageData> {
	const articleService = new ArticleService();
	const menuService = new MenuService();

	const [article, articles, menuItems] = await Promise.all([
		articleService.getArticleById(params.slug),
		articleService.getArticles(),
		menuService.getMenuItems()
	]);

	return { menuItems, article, articles };
}
