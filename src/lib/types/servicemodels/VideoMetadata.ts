export type VideoMetadata = {
	id: number;
	poster: string;
	sources: { uri: string; type: string }[];
};
