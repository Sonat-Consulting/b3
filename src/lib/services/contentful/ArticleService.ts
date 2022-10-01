import type { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import type { IArticleService } from '$lib/types/b3.services';
import graphQLClient, { isPreviewMode } from '$lib/infrastructure/contentful/graphQLClient';
import type { Article } from '$lib/types/b3.pagedata';
import { ArticleMapper } from '$lib/services/contentful/mappers/ArticleMapper';

export class ArticleService implements IArticleService {
	constructor(
		private readonly _client: GraphQLClient = graphQLClient,
		private readonly _mapper: ArticleMapper = new ArticleMapper()
	) {}

	async getArticleById(id: string): Promise<Article> {
		const query = gql`
			query GetArticleBySlug {
				collection: articleCollection(preview: ${isPreviewMode}, where: {slug: "${id}"}, limit: 1) {
					items {
						slug
						title
						ingress
						body {
							json
							links {
							assets {
								block {
								sys {
									id
								}
								url
								title
								width
								height
								description
								}
							}
							entries {
								inline {
								sys {
									id
								}
								__typename
								... on Article {
									title
									slug
								}
								}
								block {
								sys {
									id
								}
								__typename
								... on IFrame {
									title
									url
									width
									height
								}
								}
							}
							}
						}
						date
						articleHeroImage {
							url
							title
						}
					}
				}
			}
		`;

		const response = await this._client.request(query);
		const contentfulArticle = response.collection.items[0];
		return this._mapper.mapContenfulArticleToInternal(contentfulArticle);
	}

	async getArticles(): Promise<Article[]> {
		const query = gql`
			query GetArticles {
				articles: articleCollection(
						preview: ${isPreviewMode},
						order: date_DESC,
						limit: 10,
						where: {
								title_exists: true,
								ingress_exists: true,
								articleHeroImage_exists: true
								}
							) {
					items {
						slug
						title
						ingress
						articleHeroImage {
							title
							url
						}
						date
					}
				}
			}
		`;

		const response = await this._client.request(query);
		const contentfulArticles = response.articles.items;
		return contentfulArticles.map(this._mapper.mapContenfulArticleToInternal);
	}
}
