import type { ContentfulTopBanner } from '$lib/services/contentful/types';
import type { TopBanner } from '$lib/types';

export class TopBannerMapper {
	mapContenfulTopBannerToInternal(src: ContentfulTopBanner): TopBanner {
		return {
			title: src.topBannerTitle,
			subtitle: src.topBannerSubtitle,
			image: {
				title: src.topBannerImage.title,
				description: src.topBannerImage.description,
				url: `${src.topBannerImage.url}?fm=webp&w=720&h=480`
			},
			primaryLinkText: src.primaryLinkText,
			primaryLinkUrl: src.primaryLink,
			secondaryLinkText: src.secondaryLinkText,
			secondaryLinkUrl: src.secondaryLink
		};
	}
}
