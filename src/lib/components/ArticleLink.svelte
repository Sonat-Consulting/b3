<script lang="ts">
	import { format, parseISO } from 'date-fns/index.js';
	import { nb } from 'date-fns/locale/index.js';
	import type { Article } from '$lib/types/viewmodels';

	export let article: Article;

	$: date = article?.date ? format(parseISO(article.date), 'd. MMMM yyyy', { locale: nb }) : '';
</script>

<a href={`/news/${article.slug}`}>
	<div class="relative">
		<img src={article.image.url} alt={article.image.title} class="shadow-sm w-full object-cover" />
		<div
			class="absolute bottom-4 right-4 font-semibold shadow bg-white/70 text-gray-900 text-sm px-2 py-1"
		>
			{date}
		</div>
	</div>

	<div class="p-4">
		<div class="mb-4 text-xl font-semibold">{article.title}</div>
		<div class="leading-relaxed font-base">{article.ingress}</div>
	</div>
</a>
