import type { EndpointOutput } from '@sveltejs/kit/types/endpoint';
import { gql } from 'graphql-request';
import type { HomePage } from '$lib/contentful/types/HomePage';
import graphQLClient from '$lib/contentful/client';

export const get = async ({ params }): Promise<EndpointOutput<HomePage>> => {
	const query = gql`
		query GetArticleById {
			article(id: "${params.slug}") {
				title
				ingress
				date
				articleHeroImage {
				  url
				  title
				}
			}
		}
	`;

	const res = await graphQLClient.request(query);

	return {
		status: 200,
		body: res.article
	};
};
