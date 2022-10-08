export type VimeoVideoMetadata = {
	files: VimeoVideoFile[];
};

type VimeoVideoFile = {
	type: string;
	quality: string;
	link: string;
};
