export type Article = {
	slug: string;
	title: string;
	ingress: string;
	body?: {
		json: any;
	};
	articleHeroImage: {
		title: string;
		url: string;
	};
	author: {
		name: string;
	};
	date: string;
};
