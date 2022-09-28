<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import News from '$lib/components/News.svelte';
	import type { HomePageData } from '$lib/types/b3.pagedata';
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

<main class="container flex flex-col mx-auto mt-20 mb-40">
	<TopBanner {topBanner} />

	{#if videos?.length > 0}
		<PageDivider>Siste videoene fra Bergen Triathlon Events</PageDivider>
		<Videos {videos} />
	{/if}

	{#if articles?.length > 0}
		<PageDivider>Siste nyheter fra Bergen Triathlon Events</PageDivider>
		<News {articles} />
	{/if}
</main>
