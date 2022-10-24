export type Video = {
	id: number;
	title: string;
	description: string;
	poster: string;
	sources: { uri: string; type: string }[];
	slug: string;
};
