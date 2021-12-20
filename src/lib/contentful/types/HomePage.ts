import type { ArticleCollectionItem } from './ArticleCollection';

export type HomePageContent = {
	topBannerTitle: string;
	topBannerSubtitle: string;
	topBannerImage: {
		url: string;
		title: string;
		description: string;
	};
};

export type HomePage = {
	content: HomePageContent;
	articleCollection: { items: ArticleCollectionItem[] };
};
