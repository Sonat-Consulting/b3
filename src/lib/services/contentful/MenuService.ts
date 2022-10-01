import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IMenuService } from '$lib/types/b3.services';
import type { ContentfulMenuItem } from '$lib/types/b3.contentful';
import graphQLClient, { isPreviewMode } from '$lib/infrastructure/contentful/graphQLClient';

export class MenuService implements IMenuService {
	constructor(private readonly _client: GraphQLClient = graphQLClient) {}

	async getMenuItems(): Promise<ContentfulMenuItem[]> {
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

		return response.collection.items;
	}
}
