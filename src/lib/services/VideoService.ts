import type { IVideoService } from '$lib/services/index';
import type { Video } from '$lib/types/viewmodels';
import { ContentfulVideoService } from '$lib/services/contentful';

export class VideoService implements IVideoService {
	private readonly contentfulVideoService: ContentfulVideoService;

	constructor() {
		this.contentfulVideoService = new ContentfulVideoService();
	}

	async getFrontPageVideos(): Promise<Video[]> {
		return await this.contentfulVideoService.getFrontPageVideos();
	}
}
