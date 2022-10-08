interface IVimeoClient {
	get<T>(path: string): Promise<T>;
}

interface IVimeoVideoMetadataService {
	getVideoMetadata(id: number): Promise<VimeoVideoMetadata>;
}

type VimeoVideoMetadata = {
	files: VimeoVideoFile[];
};

type VimeoVideoFile = {
	type: string;
	quality: string;
	link: string;
};
