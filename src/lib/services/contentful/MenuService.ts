import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import graphQLClient, { isPreviewMode } from '$lib/infrastructure/contentful/graphQLClient';
import type { IMenuService } from '$lib/types/b3.services';
import type { MenuItem } from '$lib/types/b3';

export class MenuService implements IMenuService {
	constructor(private readonly _client: GraphQLClient = graphQLClient) {}

	async getMenuItems(): Promise<MenuItem[]> {
		const query = gql`
			query GetMenuItems {
						menuItems: menuLinksCollection(preview: ${isPreviewMode}, limit: 10) {
							items {
								url
								text
							}
						}
					}
		`;

		const response = await this._client.request(query);

		return response.menuItems.items;
	}
}
