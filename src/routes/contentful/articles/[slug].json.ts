import type { EndpointOutput } from '@sveltejs/kit/types/endpoint';
import { gql } from 'graphql-request';
import graphQLClient from '$lib/contentful/client';

export const get = async ({ params }): Promise<EndpointOutput<any>> => {
	const query = gql`
		query GetArticleBySlug {
			articleCollection(where: {slug: "${params.slug}"}, limit: 1){
				items {
					title
					ingress
					body {
						json
						links {
							assets {
								block {
									sys {
										id
									}
									url
									title
									width
									height
									description
								}
							}
						}
						
					}
					date
					articleHeroImage {
					  url
					  title
					}
  				} 
			}
		}
	`;

	const res = await graphQLClient.request(query);

	if (res.articleCollection.items <= 0) {
		return {
			status: 404
		};
	}

	return {
		status: 200,
		body: res.articleCollection.items[0]
	};
};
