export type VimeoVideoMetadata = {
	pictures: VimeoVideoPictures;
	play: VimeoVideoPlay;
};

type VimeoVideoPlay = {
	progressive: VimeoVideoFile[];
};

type VimeoVideoFile = {
	type: string;
	width: number;
	height: number;
	link: string;
};

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
