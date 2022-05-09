export type MenuItem = {
	url: string;
	text: string;
};

export type MenuItemCollectionResponse = {
	menuLinksCollection: {
		items: MenuItem[];
	}
};
