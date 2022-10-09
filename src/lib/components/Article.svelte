<script lang="ts">
	import type { Article } from '$lib/types';

	export let article: Article;
</script>

<div class="container max-w-screen-md mx-auto px-6 flex flex-col">
	<h1 class="text-4xl mb-8 text-center leading-normal">{article.title}</h1>
	<p class="mb-8 leading-relaxed">{article.ingress}</p>
	<img class="rounded-lg mb-8 w-full" alt={article.image.title} src={article.image.url} />
	<div class="leading-relaxed">{@html article.body}</div>
</div>
