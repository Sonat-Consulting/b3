import type { Video, MenuItem, TopBanner, Article } from '$lib/types';

export type HomePageData = {
	topBanner: TopBanner;
	articles: Article[];
	menuItems: MenuItem[];
	videos: Video[];
};
