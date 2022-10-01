import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IHomePageService } from '$lib/types/b3.services';
import type { TopBanner } from '$lib/types/b3.pagedata';
import graphQLClient, { isPreviewMode } from '$lib/infrastructure/contentful/graphQLClient';
import { TopBannerMapper } from '$lib/services/contentful/mappers/TopBannerMapper';
import type { ContentfulTopBanner } from '$lib/types/b3.contentful';

export class HomePageService implements IHomePageService {
	constructor(
		private readonly _client: GraphQLClient = graphQLClient,
		private readonly _mapper: TopBannerMapper = new TopBannerMapper()
	) {}

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
		const contentfulTopBanner = response.collection.items[0];
		return this._mapper.mapContenfulTopBannerToInternal(contentfulTopBanner);
	}
}
