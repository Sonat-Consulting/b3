<script lang="ts">
	import type { HomePageData } from '$lib/types/pagedata';
	import Header from '$lib/components/Header.svelte';
	import News from '$lib/components/News.svelte';
	import TopBanner from '$lib/components/TopBanner.svelte';
	import Videos from '$lib/components/Videos.svelte';

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
		<section class="md:px-0 sm:mt-16 lg:mt-32">
			<Videos {videos} />
		</section>
	{/if}

	{#if articles?.length > 0}
		<section class="md:px-0 mt-16 lg:mt-32">
			<News {articles} />
		</section>
	{/if}
</main>
