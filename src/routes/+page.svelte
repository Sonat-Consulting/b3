<script lang="ts">
	import type { HomePageData } from '$lib/types/pagedata';
	import Header from '$lib/components/Header.svelte';
	import News from '$lib/components/News.svelte';
	import TopBanner from '$lib/components/TopBanner.svelte';
	import Videos from '$lib/components/Videos.svelte';
	import PageDivider from '$lib/components/PageDivider.svelte';
	import Alert from '$lib/components/Alert.svelte';

	export let data: HomePageData;
	const { topBanner, menuItems, articles, videos } = data;
</script>

<svelte:head>
	<title>Bergen Triathlon Events</title>
</svelte:head>

<Header {menuItems} />

<main class="container flex flex-col mx-auto my-10 md:my-16">
	{#if topBanner}
		<TopBanner {topBanner} />
	{/if}

	{#if videos?.length > 0}
		<PageDivider>Siste videoene fra Bergen Triathlon Events</PageDivider>
		<Videos {videos} />
	{/if}

	{#if articles?.length > 0}
		<PageDivider>Siste nyheter fra Bergen Triathlon Events</PageDivider>
		<News {articles} />
	{/if}

	<section class="px-8 md:px-0 mt-16 md:mt-20">
		<Alert type="info" title="Hjelp oss å komme i mål">
			Etableringen av det største årlige internasjonale arrangementet i Bergen på TV og nett er
			krevende. De frivillige er stammen i arbeidet vårt. Det offentlige med Bergen kommune,
			Vestland fylke og Staten bidrar sammen med våre sponsorer til å gjøre arrangementet mulig
			økonomisk. Bergen Triathlon Events, heleid av de to klubbene Åsane Cykle Klubb og Bergen
			Triathlon Club, har vist at vi kan skape et godt arrangement for alle. Slik at vi sammen lar
			Bergen fremstå på beste måte med tusenvis av entusiastiske publikummere rundt løypen. Det er
			ingen velfylt konto eller stor avkastning, men akkurat nok til at vi kan fortsette med noe som
			byen, innbyggerne og idrettsutøverne våre fortjener. Derfor er alle bidrag viktige; fra alle
			som har mulighet til å bidra personlig eller som selskap. Vi har en unik synlighet for
			markedsføring eller markering av støtte til barn, voksne og funksjonshemmede. Og ikke minst –
			et arrangement der de som kanskje er Bergens beste idrettsutøvere gjennom historien kan ta med
			seg verdenseliten hjem til fest.

			<div>
				<a
					href="https://bte.ticketco.events/no/nb"
					target="_blank"
					class="btn border-0 bg-sky-300 text-gray-800 focus:outline-0 focus:bg-sky-400 hover:bg-sky-400 mt-8 mx-auto font-bold normal-case text-base"
					>Jeg vil gjerne bidra</a
				>
			</div>
		</Alert>
	</section>
</main>
