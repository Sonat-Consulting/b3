import { Article, MenuItem, TopBanner } from './b3';

type HomePageData = {
	topBanner: TopBanner;
	articles: Article[];
	menuItems: MenuItem[];
};

type ArticlePageData = {
	article: Article;
	articles: Article[];
	menuItems: MenuItem[];
};
