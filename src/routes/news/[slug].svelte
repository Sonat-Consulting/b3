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
	import News from '$lib/news.svelte';
	export let article;
	export let articles;
</script>

<svelte:head>
	<title>B3</title>
</svelte:head>

<div
	class="container max-w-screen-sm mx-auto pt-6 md:pt-12 pb-6 px-6 mb-3 flex items-center flex-col"
>
	<h1 class="text-4xl mb-6">{article.title}</h1>

	<p class="mb-6">{article.ingress}</p>

	<img
		class="rounded-xl mb-6"
		alt={article.articleHeroImage.title}
		src={article.articleHeroImage.url}
	/>

	<p>
		Norway’s Kristian Blummenfelt underlined his status as the greatest triathlete on the planet
		right now with a consummate performance in Edmonton on Saturday afternoon to take both the gold
		and the 2021 world title, the first man to do so in the same year as winning the Olympic Games.
		Marten Van Riel (BEL) had piled on the pressure thanks to a great three-way break on the bike
		along with 2020 champion Vincent Luis and Hungary’s Mark Devay, but Blummenfelt had driven on
		the large chasing train for much of the 40km ride to ensure he was still well in touch out onto
		the 10km run. With his main challenger for the title Alex Yee a good 90 seconds back off the
		bike, the Norwegian stayed patient for 8km then timed his surge to perfection, just as he had in
		Tokyo, Van Riel and Leo Bergere (FRA) ensuring a grandstand finish as the three summoned an
		almighty sprint for the line, Blummenfelt roaring in celebration, the Belgian taking silver by a
		whisker. That also meant the Series silver for Van Riel, while Yee was able to run his way into
		11th in the race and overall bronze.
	</p>
</div>

<News {articles} />
