import type { ContentfulVideo } from '$lib/types/b3.contentful';

export class VideoMapper {
	mapContenfulVideoToInternal(src: ContentfulVideo): Video {
		return {
			id: src.id,
			title: src.title,
			description: src.description
		};
	}
}
