import type { ContentfulVideo } from '$lib/services/contentful/types';

export class VideoMapper {
	mapContenfulVideoToInternal(src: ContentfulVideo): Video {
		return {
			id: src.id,
			title: src.title,
			description: src.description
		};
	}
}
