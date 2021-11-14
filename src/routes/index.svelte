<script context="module" lang="ts">
	import type { IHomePageContent } from '../interfaces/IHomePage';

	export async function load({ fetch }): Promise<any> {
		const res = await fetch('/contentful.json');
		if (res.ok) {
			const content: IHomePageContent = await res.json();
			return { props: { content } };
		}
	}
</script>

<script lang="ts">
	import Card from '$lib/card.svelte';
	import ArticleLink from '$lib/article/link.svelte';
	export let content: IHomePageContent;
</script>

<svelte:head>
	<title>B3</title>
</svelte:head>

<Card>
	<div>
		<h1 class="text-4xl font-bold mb-4">{content.topBannerTitle}</h1>
		<p class="font-light text-lg">
			{content.topBannerSubtitle}
		</p>
		<div class="card-actions">
			<a class="btn btn-primary" href="/volunteers">Jeg vil være med!</a>
			<button class="btn btn-ghost">Mer info</button>
		</div>
	</div>
	<img
		class="rounded-lg shadow-sm"
		alt={content.topBannerImage.description}
		src={content.topBannerImage.url}
	/>
</Card>

<div class="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
	<ArticleLink
		imageAltText="Beskrivelse av bilde"
		url="/"
		date="Jul 15, 22"
		imageSrc="https://akamai.vgc.no/v2/images/88ef682e-2407-4f21-a386-999dab0df0ac?fit=crop&h=1267&w=1900&s=99b26e158ae4acd38034ce517f8d5a68a0232c8e"
		title="Folkefest"
		ingress="Bli med og arranger årets folkefest. Vi trenger frivillige."
	/>

	<ArticleLink
		imageAltText="Beskrivelse av bilde"
		url="/"
		date="Jul 14, 22"
		imageSrc="https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_480_320_l_f/0000/berg/2018/12/6/17/BA73958.jpeg?chk=FA7818"
		title="Sykkel"
		ingress="Noen mener at sykling kan være gøy. Hva mener du?"
	/>

	<ArticleLink
		imageAltText="Beskrivelse av bilde"
		url="/"
		date="Jul 13, 22"
		imageSrc="https://media.snl.no/media/137414/standard_compressed_19UWjWe_p2g.jpg"
		title="Svømming"
		ingress="Andre mener svømming kan være gøy. Ihvertfall om man kan svømme."
	/>
</div>
