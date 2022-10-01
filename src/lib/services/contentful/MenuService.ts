import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IMenuService } from '$lib/types/b3.services';
import type { MenuItem } from '$lib/types/b3.pagedata';
import graphQLClient, { isPreviewMode } from '$lib/infrastructure/contentful/graphQLClient';
import { MenuItemMapper } from '$lib/services/contentful/mappers/MenuItemMapper';

export class MenuService implements IMenuService {
	constructor(
		private readonly _client: GraphQLClient = graphQLClient,
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
