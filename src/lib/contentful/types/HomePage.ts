export type HomePageContent = {
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

export type HomePage = {
	content: HomePageContent;
};
