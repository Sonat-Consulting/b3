import type {EndpointOutput} from '@sveltejs/kit/types/endpoint';
import {gql} from 'graphql-request';
import type {HomePage} from '$lib/contentful/types/HomePage';
import graphQLClient, {isPreviewMode} from '$lib/contentful/client';

export const get = async (): Promise<EndpointOutput<HomePage>> => {
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

    return {
        status: 200,
        body: res.homePages.items[0]
    };
};
