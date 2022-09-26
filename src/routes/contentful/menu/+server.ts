import { gql } from 'graphql-request';
import graphQLClient, { isPreviewMode } from '$lib/contentful/client';
import type { MenuItemCollectionResponse } from '$lib/contentful/types/MenuItemCollectionResponse';

export const GET = async (): Promise<Response> => {
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

	return new Response(JSON.stringify(response.menuLinksCollection.items));
};
