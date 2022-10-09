import type { IVideoMetadataService } from '$lib/services';
import type { VideoMetadata } from '$lib/types/servicemodels';
import type { IVimeoClient } from '$lib/services/vimeo/infrastructure/client';
import { VimeoClient } from '$lib/services/vimeo/infrastructure/client';
import type { VimeoVideoMetadata } from '$lib/services/vimeo/types';

export class VimeoVideoService implements IVideoMetadataService {
	private readonly client: IVimeoClient;

	constructor() {
		this.client = new VimeoClient();
	}

	async getVideoMetadata(id: number): Promise<VideoMetadata> {
		const { pictures, play } = await this.client.get<VimeoVideoMetadata>(`/videos/${id}`);
		return {
			id,
			poster: pictures?.sizes.find(({ width }) => width === 640)?.link,
			sources: play?.progressive.map(({ link, type }) => ({ uri: link, type: type }))
		};
	}
}
