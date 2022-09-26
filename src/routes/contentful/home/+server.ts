import { gql } from 'graphql-request';
import graphQLClient, { isPreviewMode } from '$lib/contentful/client';

export const GET = async () => {
	const query = gql`
		query GetHomePages {
			homePages: homePageCollection(
				preview: ${isPreviewMode},
				limit: 1,
				where: {
					topBannerTitle_exists: true,
					topBannerSubtitle_exists: true
				}
			) {
				items {
					topBannerTitle
					topBannerSubtitle
					topBannerImage {
						url
						title
						description
					}
					primaryLink
					primaryLinkText
					secondaryLink
					secondaryLinkText
				}
			}
		}
	`;

	const res = await graphQLClient.request(query);

	return new Response(JSON.stringify(res.homePages.items[0]));
};
