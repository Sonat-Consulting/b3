import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IMenuService } from '$lib/types/b3.services';
import client from '$lib/services/contentful/infrastructure/client';
import { MenuItemMapper } from '$lib/services/contentful/mappers/MenuItemMapper';
import { isPreviewMode } from '$lib/services/contentful/infrastructure/configuration';

export class MenuService implements IMenuService {
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

		const response = await this._client.request(query);
		const contentfulMenuItems = response.collection.items;
		return contentfulMenuItems.map(this._mapper.mapContenfulMenuItemToInternal);
	}
}
