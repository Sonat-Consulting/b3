import { GraphQLClient } from 'graphql-request';
import { accessToken, spaceId } from '$lib/services/contentful/infrastructure/configuration';

const client = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${spaceId}`, {
	headers: {
		Authorization: `Bearer ${accessToken}`
	}
});

export default client;
