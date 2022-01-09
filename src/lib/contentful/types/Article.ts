export type Article = {
	slug: string;
	title: string;
	ingress: string;
	articleHeroImage: {
		title: string;
		url: string;
	};
	author: {
		name: string;
	};
	date: string;
};
