export type Article = {
	slug: string;
	title: string;
	ingress: string;
	body: string;
	image: {
		url: string;
		title: string;
	};
	author: string;
	date: string;
};
