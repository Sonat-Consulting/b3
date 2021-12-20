<script context="module" lang="ts">
	export async function load({ page, fetch }): Promise<any> {
		const res = await fetch(`/contentful/articles/${page.params.slug}.json`);

		if (res.ok) {
			const article = await res.json();
			return { props: { article } };
		}
	}
</script>

<script lang="ts">
	import Card from '$lib/card.svelte';
	export let article;
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
