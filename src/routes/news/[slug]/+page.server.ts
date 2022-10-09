import { ContentfulArticleService, ContentfulMenuService } from '$lib/services/contentful';
import type { ArticlePageData } from '$lib/types';

const articleService = new ContentfulArticleService();
const menuService = new ContentfulMenuService();

export async function load({ params }): Promise<ArticlePageData> {
	const [article, articles, menuItems] = await Promise.all([
		articleService.getArticleById(params.slug),
		articleService.getArticles(),
		menuService.getMenuItems()
	]);

	return { menuItems, article, articles };
}
