import type { EndpointOutput } from '@sveltejs/kit/types/endpoint';
import { gql } from 'graphql-request';
import type { HomePage } from '$lib/contentful/types/HomePage';
import graphQLClient from '$lib/contentful/client';

export const get = async (): Promise<EndpointOutput<HomePage>> => {
	const query = gql`
		query GetHomePage {
			content: homePage(id: "3FOzAwqY6CSeWlfm1Ef7WT") {
				topBannerTitle
				topBannerSubtitle
				topBannerImage {
					url
					title
					description
				}
			}
		}
	`;

	const homePage = await graphQLClient.request<HomePage>(query);

	return {
		status: 200,
		body: homePage
	};
};
