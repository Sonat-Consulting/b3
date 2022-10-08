import type { ContentfulMenuItem } from '$lib/services/contentful/types';

export class MenuItemMapper {
	mapContenfulMenuItemToInternal(src: ContentfulMenuItem): MenuItem {
		return {
			url: src.url,
			text: src.text
		};
	}
}
