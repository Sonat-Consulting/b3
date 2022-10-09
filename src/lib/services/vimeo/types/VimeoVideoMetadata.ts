export type VimeoVideoMetadata = {
	pictures: VimeoVideoPictures;
	files: VimeoVideoFile[];
};

type VimeoVideoFile = {
	type: string;
	width: number;
	height: number;
	quality: VimeoVideoFileQuality;
	link: string;
};

type VimeoVideoFileQuality = 'sd' | 'uhd' | 'hd' | 'hls';

type VimeoVideoPictures = {
	active: boolean;
	sizes: VimeoVideoPictureSize[];
};

type VimeoVideoPictureSize = {
	width: number;
	height: number;
	link: string;
	link_with_play_button: string;
};
