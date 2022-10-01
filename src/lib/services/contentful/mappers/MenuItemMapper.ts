import type { MenuItem } from '$lib/types/b3.pagedata';
import type { ContentfulMenuItem } from '$lib/types/b3.contentful';

export class MenuItemMapper {
	mapContenfulMenuItemToInternal(src: ContentfulMenuItem): MenuItem {
		return {
			url: src.url,
			text: src.text
		};
	}
}
