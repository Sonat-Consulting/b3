import type { EndpointOutput } from '@sveltejs/kit/types/endpoint';
import { gql, GraphQLClient } from 'graphql-request';

const accessToken = import.meta.env.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN;
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;

const graphQLClient = new GraphQLClient(
	`https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
	{
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	}
);

export const get = async (): Promise<EndpointOutput> => {
	const query = gql`
		query GetHomePage {
			homePage(id: "3FOzAwqY6CSeWlfm1Ef7WT") {
				topBannerTitle
				topBannerImage {
					url
					title
					description
				}
			}
		}
	`;

	const { homePage } = await graphQLClient.request(query);

	return {
		status: 200,
		body: { homePage }
	};
};
