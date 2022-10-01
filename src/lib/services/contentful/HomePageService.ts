import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IHomePageService } from '$lib/types/b3.services';
import client from '$lib/services/contentful/infrastructure/client';
import { TopBannerMapper } from '$lib/services/contentful/mappers/TopBannerMapper';
import { isPreviewMode } from '$lib/services/contentful/infrastructure/configuration';

export class HomePageService implements IHomePageService {
	constructor(
		private readonly _client: GraphQLClient = client,
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
