import type { GraphQLClient } from 'graphql-request';
import type { IVideoService } from '$lib/types/b3.services';
import type { Video } from '$lib/types/b3.contentful';
import graphQLClient, { isPreviewMode } from '$lib/infrastructure/contentful/graphQLClient';
import { gql } from 'graphql-request';

export class VideoService implements IVideoService {
	constructor(private readonly _client: GraphQLClient = graphQLClient) {}

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
		return response.videoListCollection?.items[0]?.videosCollection.items;
	}
}
