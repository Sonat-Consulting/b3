import type { ContentfulMenuItem } from '$lib/services/contentful/types/b3.contentful';

export class MenuItemMapper {
	mapContenfulMenuItemToInternal(src: ContentfulMenuItem): MenuItem {
		return {
			url: src.url,
			text: src.text
		};
	}
}
