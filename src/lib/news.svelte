<script lang="ts">
	import type { Article } from '$lib/contentful/types/Article';
	import ArticleLink from '$lib/article/link.svelte';
	import { format, parseISO } from 'date-fns/index.js';
	import { nb } from 'date-fns/locale/index';
	export let articles: Article[];
</script>

<div class="relative text-center mb-3">
	<div class="absolute mt-6 border-t-2 border-sky-300 w-full z-0" />
	<div
		class="font-medium border-2 border-sky-300 inline-block rounded-xl text-center px-8 py-2.5 h-full bg-white relative z-10"
	>
		Siste nyheter fra Bergen Triathlon Events
	</div>
</div>

<div class="p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
	{#each articles as article}
		<ArticleLink
			imageAltText={article.articleHeroImage.title}
			url={`/news/${article.slug}`}
			date={format(parseISO(article.date), 'MMM d, yy', { locale: nb })}
			imageSrc={article.articleHeroImage.url}
			title={article.title}
			ingress={article.ingress}
		/>
	{/each}
</div>
