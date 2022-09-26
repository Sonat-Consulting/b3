import { gql } from 'graphql-request';
import graphQLClient, { isPreviewMode } from '$lib/contentful/client';

export const GET = async ({ params }): Promise<Response> => {
	const query = gql`
		query GetArticleBySlug {
			articleCollection(preview: ${isPreviewMode}, where: {slug: "${params.slug}"}, limit: 1) {
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
						entries {
							inline {
							sys {
								id
							}
							__typename
							... on Article {
								title
								slug
							}
							}
							block {
							sys {
								id
							}
							__typename
							... on IFrame {
								title
								url
								width
								height
							}
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
		return new Response(JSON.stringify({}));
	}

	return new Response(JSON.stringify(res.articleCollection.items[0]));
};
