import type { IVideoService } from '$lib/services/index';
import type { Video } from '$lib/types/viewmodels';
import { ContentfulVideoService } from '$lib/services/contentful';
import { VimeoVideoService } from '$lib/services/vimeo/VimeoVideoService';

export class VideoService implements IVideoService {
	private readonly contentfulVideoService: ContentfulVideoService;
	private readonly vimeoVideoService: VimeoVideoService;

	constructor() {
		this.contentfulVideoService = new ContentfulVideoService();
		this.vimeoVideoService = new VimeoVideoService();
	}

	async getFrontPageVideos(): Promise<Video[]> {
		const videoEntries = await this.contentfulVideoService.getVideoEntries();
		const promises = videoEntries?.map(async ({ id, title, description }) => {
			const { sources, poster } = await this.vimeoVideoService.getVideoMetadata(id);
			return { id, title, description, poster, sources };
		});

		try {
			return await Promise.all(promises);
		} catch (e) {
			console.error(e.toString());
			return [];
		}
	}
}
