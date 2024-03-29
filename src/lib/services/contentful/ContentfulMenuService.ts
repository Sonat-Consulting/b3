import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IMenuService } from '$lib/services';
import client from '$lib/services/contentful/infrastructure/client';
import { MenuItemMapper } from '$lib/services/contentful/mappers/MenuItemMapper';
import { isPreviewMode } from '$lib/services/contentful/infrastructure/configuration';
import type { MenuItem } from '$lib/types/viewmodels';

export class ContentfulMenuService implements IMenuService {
	constructor(
		private readonly _client: GraphQLClient = client,
		private readonly _mapper: MenuItemMapper = new MenuItemMapper()
	) {}

	async getMenuItems(): Promise<MenuItem[]> {
		const query = gql`
			query GetMenuItems {
					collection: menuLinksCollection(preview: ${isPreviewMode}, limit: 10) {
						items {
							url
							text
						}
					}
				}
		`;

		try {
			const response = await this._client.request(query);
			const contentfulMenuItems = response.collection.items;
			return contentfulMenuItems.map(this._mapper.mapContenfulMenuItemToInternal);
		} catch (e) {
			console.error('failed to get menu items from cms - returning empty');
			return;
		}
	}
}
