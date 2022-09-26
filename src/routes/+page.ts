export async function load({ fetch }): Promise<any> {
	const [homePageRes, articlesRes, menuRes] = await Promise.all([
		fetch('/contentful/home'),
		fetch('/contentful/articles'),
		fetch('/contentful/menu')
	]);

	const [menuItems, homePage, articles] = await Promise.all([
		menuRes.json(),
		homePageRes.json(),
		articlesRes.json()
	]);

	return { menuItems, homePage, articles };
}

export const prerender = true;
