import type { GraphQLClient } from 'graphql-request';
import type { IHomePageService, TopBanner } from '../../../b3';
import { gql } from 'graphql-request';
import graphQLClient, { isPreviewMode } from '$lib/contentful/client';

export class HomePageService implements IHomePageService {
	constructor(private readonly client: GraphQLClient) {}

	async getTopBanner(): Promise<TopBanner> {
		const query = gql`
			query GetHomePages {
				topBanners: homePageCollection(
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

		const response = await graphQLClient.request(query);

		return response.topBanners.items[0];
	}
}
