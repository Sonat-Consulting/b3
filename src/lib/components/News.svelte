<script lang="ts">
	import type { Article } from '$lib/types/viewmodels';
	import ArticleLink from '$lib/components/ArticleLink.svelte';
	export let articles: Article[];
</script>

<section class="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
	{#each articles as article (article.slug)}
		<ArticleLink {article} />
	{/each}
</section>
