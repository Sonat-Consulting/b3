<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import News from '$lib/components/News.svelte';
	import HorizontalPageDivider from '$lib/components/PageDivider.svelte';
	import type { HomePageData } from '$lib/types/b3.pagedata';
	import TopBanner from '$lib/components/TopBanner.svelte';

	export let data: HomePageData;
	const { topBanner, menuItems, articles } = data;
</script>

<svelte:head>
	<title>Bergen Triathlon Events</title>
</svelte:head>

<Header {menuItems} />

<main class="container flex flex-col mx-auto mt-20 mb-40">
	<TopBanner {topBanner} />
	<HorizontalPageDivider>Siste nyheter fra Bergen Triathlon Events</HorizontalPageDivider>
	<News {articles} />
</main>
