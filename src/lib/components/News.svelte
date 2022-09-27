<script lang="ts">
	import type { Article } from '$lib/types/b3.contentful';
	import ArticleLink from '$lib/components/ArticleLink.svelte';
	export let articles: Article[];
</script>

<div class="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0">
	{#each articles as article (article.slug)}
		<ArticleLink {article} />
	{/each}
</div>
