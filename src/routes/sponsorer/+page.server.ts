import { ContentfulMenuService } from '$lib/services/contentful';
import type { SponsorsPageData } from '$lib/types/pagedata/SponsorsPageData';

const menuService = new ContentfulMenuService();

export async function load(): Promise<SponsorsPageData> {
	const [menuItems] = await Promise.all([menuService.getMenuItems()]);

	return { menuItems };
}
