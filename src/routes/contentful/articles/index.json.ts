import type {EndpointOutput} from '@sveltejs/kit/types/endpoint';
import {gql} from 'graphql-request';
import graphQLClient, {isPreviewMode} from '$lib/contentful/client';

export const get = async (): Promise<EndpointOutput<any>> => {
    const query = gql`
		query GetArticles {
			articles: articleCollection(
			    preview: ${isPreviewMode},
			    order: date_DESC,
			    limit: 10,
			    where: {
			        title_exists: true,
			        ingress_exists: true,
			        articleHeroImage_exists: true
			        }
            ) {
				items {
					slug
					title
					ingress
					articleHeroImage {
						title
						url
					}
					date
				}
			}
		}
	`;

    const res = await graphQLClient.request(query);

    return {
        status: 200,
        body: res.articles.items
    };
};
