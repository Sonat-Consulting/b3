<script lang="ts">
	import type { Article } from '$lib/types/b3.contentful';
	import ContentfulHtml from '$lib/components/ContentfulHtml.svelte';

	export let article: Article;

	$: body = article?.body.json;
	$: assets = article?.body.links?.assets.block;
	$: entries = article?.body.links?.entries.block;
</script>

<div class="container max-w-screen-md mx-auto px-6 flex flex-col">
	<h1 class="text-4xl mb-8 text-center leading-normal">{article.title}</h1>

	<p class="mb-8 leading-relaxed">{article.ingress}</p>

	<img
		class="rounded-xl mb-8 w-full"
		alt={article.articleHeroImage?.title}
		src={`${article.articleHeroImage?.url}?fm=webp&w=720&h=480`}
	/>

	<div class="leading-relaxed">
		<ContentfulHtml richTextDocument={body} {assets} {entries} />
	</div>
</div>
