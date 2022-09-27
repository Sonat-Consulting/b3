<script lang="ts">
	import ArticleLink from '$lib/components/ArticleLink.svelte';
	import { format, parseISO } from 'date-fns/index.js';
	import { nb } from 'date-fns/locale/index.js';
	import type { Article } from '$lib/types/b3';
	export let articles: Article[];
</script>

<div class="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0">
	{#each articles as article (article.slug)}
		<ArticleLink
			imageAltText={article.articleHeroImage?.title}
			url={`/news/${article.slug}`}
			date={article.date ? format(parseISO(article.date), 'd. MMMM yyyy', { locale: nb }) : ''}
			imageSrc={`${article.articleHeroImage?.url}?fm=webp&w=720&h=480`}
			title={article.title}
			ingress={article.ingress}
		/>
	{/each}
</div>
