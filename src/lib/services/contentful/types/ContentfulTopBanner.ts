export type ContentfulTopBanner = {
	topBannerTitle: string;
	topBannerSubtitle: string;
	topBannerImage: {
		url: string;
		title: string;
		description: string;
	};
	primaryLink: string | null;
	primaryLinkText: string | null;
	secondaryLink: string | null;
	secondaryLinkText: string | null;
};
