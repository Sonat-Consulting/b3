<script lang="ts">
	import type { Article } from '$lib/contentful/types/Article';
	import ArticleLink from '$lib/article/link.svelte';
	import { format, parseISO } from 'date-fns/index.js';
	import { nb } from 'date-fns/locale/index.js';
	export let articles: Article[];
</script>

<div class="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
	{#each articles as article}
		<ArticleLink
			imageAltText={article.articleHeroImage?.title}
			url={`/news/${article.slug}`}
			date={article.date ? format(parseISO(article.date), 'MMM d, yy', { locale: nb }) : ''}
			imageSrc={`${article.articleHeroImage?.url}?fm=webp&w=720&h=480`}
			title={article.title}
			ingress={article.ingress}
		/>
	{/each}
</div>
