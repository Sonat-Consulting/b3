<script lang="ts">
	import type { HomePageData } from '$lib/types/pagedata';
	import Header from '$lib/components/Header.svelte';
	import News from '$lib/components/News.svelte';
	import TopBanner from '$lib/components/TopBanner.svelte';
	import Videos from '$lib/components/Videos.svelte';
	import PageDivider from '$lib/components/PageDivider.svelte';

	export let data: HomePageData;
	const { topBanner, menuItems, articles, videos } = data;
</script>

<svelte:head>
	<title>Bergen Triathlon Events</title>
</svelte:head>

<Header {menuItems} />

{#if topBanner}
	<TopBanner {topBanner} />
{/if}

<main class="container flex flex-col mx-auto mb-10">
	{#if videos?.length > 0}
		<PageDivider />
		<Videos {videos} />
	{/if}

	{#if articles?.length > 0}
		<PageDivider />
		<News {articles} />
	{/if}
</main>
