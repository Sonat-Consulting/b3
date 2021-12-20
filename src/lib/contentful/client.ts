import { GraphQLClient } from 'graphql-request';

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

export default graphQLClient;
