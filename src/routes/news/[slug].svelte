<script context="module" lang="ts">
	export async function load({ page, fetch }): Promise<any> {
		const [articleRes, articlesRes] = await Promise.all([
			fetch(`/contentful/articles/${page.params.slug}.json`),
			fetch(`/contentful/articles.json`)
		]);

		if (articlesRes.ok) {
			const [article, articles] = await Promise.all([articleRes.json(), articlesRes.json()]);
			return { props: { article, articles } };
		}
	}
</script>

<script lang="ts">
	import Card from '$lib/card.svelte';
	import News from '$lib/news.svelte';
	export let article;
	export let articles;
</script>

<svelte:head>
	<title>B3</title>
</svelte:head>

<Card>
	<div>
		<h1 class="text-4xl font-bold mb-4">{article.title}</h1>
		<p class="font-light text-lg">
			{article.ingress}
		</p>
	</div>
	<img
		class="rounded-lg shadow-sm"
		alt={article.articleHeroImage.title}
		src={article.articleHeroImage.url}
	/>
</Card>

<News {articles} />
