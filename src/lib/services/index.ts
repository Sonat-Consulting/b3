import type { Article, MenuItem, TopBanner, Video } from '$lib/types/viewmodels';
import type { VideoMetadata } from '$lib/types/servicemodels';

export interface IMenuService {
	getMenuItems(): Promise<MenuItem[]>;
}

export interface IArticleService {
	getArticles(): Promise<Article[]>;
	getArticleById(id: string): Promise<Article>;
}

export interface IHomePageService {
	getTopBanner(): Promise<TopBanner>;
}

export interface IVideoService {
	getFrontPageVideos(): Promise<Video[]>;
}

export interface IVideoMetadataService {
	getVideoMetadata(id: number): Promise<VideoMetadata>;
}

export { VideoService } from './VideoService';
