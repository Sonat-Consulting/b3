import type { EndpointOutput } from '@sveltejs/kit/types/endpoint';
import { gql } from 'graphql-request';
import graphQLClient, { isPreviewMode } from '$lib/contentful/client';
import type {
	MenuItem,
	MenuItemCollectionResponse
} from '$lib/contentful/types/MenuItemCollectionResponse';

export const get = async (): Promise<EndpointOutput<MenuItem[]>> => {
	const query = gql`
		query GetMenuItems {
          menuLinksCollection(preview: ${isPreviewMode}, limit: 10) {
            items {
              url
              text
            }
          }
        }
	`;

	const response = await graphQLClient.request<MenuItemCollectionResponse>(query);

	return {
		status: 200,
		body: response.menuLinksCollection.items
	};
};
