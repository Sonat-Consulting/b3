export async function load({ params, fetch }): Promise<any> {
	const [articleRes, articlesRes, menuRes] = await Promise.all([
		fetch(`/contentful/articles/${params.slug}`),
		fetch(`/contentful/articles`),
		fetch('/contentful/menu')
	]);

	const [article, articles, menuItems] = await Promise.all([
		articleRes.json(),
		articlesRes.json(),
		menuRes.json()
	]);

	return { menuItems, article, articles };
}
