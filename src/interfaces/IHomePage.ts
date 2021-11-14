export interface IHomePageContent {
	topBannerTitle: string;
	topBannerSubtitle: string;
	topBannerImage: {
		url: string;
		title: string;
		description: string;
	};
}

export interface IHomePage {
	content: IHomePageContent;
}
