import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IVideoService } from '$lib/services';
import client from '$lib/services/contentful/infrastructure/client';
import { VideoMapper } from '$lib/services/contentful/mappers/VideoMapper';
import { isPreviewMode } from '$lib/services/contentful/infrastructure/configuration';
import type { Video } from '$lib/types/viewmodels';

export class ContentfulVideoService implements IVideoService {
	constructor(
		private readonly _client: GraphQLClient = client,
		private readonly _mapper: VideoMapper = new VideoMapper()
	) {}

	async getFrontPageVideos(): Promise<Video[]> {
		const query = gql`
			query GetVideoList {
				videoListCollection: videoListCollection(
					preview: ${isPreviewMode}
					limit: 1
					where: { frontpage: true }
				) {
					items {
						videosCollection {
							items {
								id
								title
								description
							}
						}
					}
				}
			}
		`;

		try {
			const response = await this._client.request(query);
			const contentfulVideos = response.videoListCollection?.items[0]?.videosCollection.items;
			return contentfulVideos.map(this._mapper.mapContenfulVideoToInternal);
		} catch (e) {
			console.error('failed to get front page videos from cms - returning empty');
			return;
		}
	}
}
