import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IMenuService, MenuItem } from '../../../b3';
import graphQLClient, { isPreviewMode } from '$lib/contentful/client';

export class MenuService implements IMenuService {
	constructor(private readonly client: GraphQLClient) {}

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

		const response = await graphQLClient.request(query);

		return response.menuItems.items;
	}
}
