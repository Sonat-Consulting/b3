import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IHomePageService } from '$lib/types/b3.services';
import type { TopBanner } from '$lib/types/b3.contentful';
import graphQLClient, { isPreviewMode } from '$lib/infrastructure/contentful/graphQLClient';

export class HomePageService implements IHomePageService {
	constructor(private readonly _client: GraphQLClient = graphQLClient) {}

	async getTopBanner(): Promise<TopBanner> {
		const query = gql`
			query GetHomePages {
				collection: homePageCollection(
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

		const response = await this._client.request(query);

		return response.collection.items[0];
	}
}
