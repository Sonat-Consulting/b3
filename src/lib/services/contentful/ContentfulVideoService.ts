import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IVideoEntryService } from '$lib/services';
import client from '$lib/services/contentful/infrastructure/client';
import { isPreviewMode } from '$lib/services/contentful/infrastructure/configuration';
import type { VideoEntry } from '$lib/types/servicemodels';

export class ContentfulVideoService implements IVideoEntryService {
	constructor(private readonly _client: GraphQLClient = client) {}

	async getVideoEntries(): Promise<VideoEntry[]> {
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
			return response.videoListCollection?.items[0]?.videosCollection.items;
		} catch (e) {
			console.error('failed to get front page videos from cms - returning empty');
			return;
		}
	}
}
