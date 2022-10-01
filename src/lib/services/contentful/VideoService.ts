import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IVideoService } from '$lib/types/b3.services';
import graphQLClient, { isPreviewMode } from '$lib/infrastructure/contentful/graphQLClient';
import { VideoMapper } from '$lib/services/contentful/mappers/VideoMapper';

export class VideoService implements IVideoService {
	constructor(
		private readonly _client: GraphQLClient = graphQLClient,
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

		const response = await this._client.request(query);
		const contentfulVideos = response.videoListCollection?.items[0]?.videosCollection.items;
		return contentfulVideos.map(this._mapper.mapContenfulVideoToInternal);
	}
}
