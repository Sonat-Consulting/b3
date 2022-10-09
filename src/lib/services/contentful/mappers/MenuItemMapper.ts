import type { ContentfulMenuItem } from '$lib/services/contentful/types';
import type { MenuItem } from '$lib/types/viewmodels';

export class MenuItemMapper {
	mapContenfulMenuItemToInternal(src: ContentfulMenuItem): MenuItem {
		return {
			url: src.url,
			text: src.text
		};
	}
}
