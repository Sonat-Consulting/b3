<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/contentful.json');

		if (res.ok) {
			const { homePage } = await res.json();
			return {
				props: { homePage }
			};
		}
	}
</script>

<script>
	export let homePage;
</script>

<svelte:head>
	<title>B3</title>
</svelte:head>

<section class="bg-pink-50 dark:bg-gray-900">
	<div
		class="container max-w-screen-lg mx-auto px-6 py-12 grid md:grid-cols-2 gap-4 lg:gap-16 items-center"
	>
		<div>
			<h1 class="text-4xl font-bold mb-4">{homePage.topBannerTitle}</h1>
			<p class="font-light text-lg">
				{homePage.topBannerSubtitle}
			</p>
			<div class="card-actions">
				<button class="btn btn-primary">Jeg vil være med!</button>
				<button class="btn btn-ghost">Mer info</button>
			</div>
		</div>
		<img
			class="rounded-lg shadow-sm"
			alt={homePage.topBannerImage.description}
			src={homePage.topBannerImage.url}
		/>
	</div>
</section>

<div class="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
	<a class="p-2" href="#">
		<div class="relative">
			<img
				src="https://akamai.vgc.no/v2/images/88ef682e-2407-4f21-a386-999dab0df0ac?fit=crop&h=1267&w=1900&s=99b26e158ae4acd38034ce517f8d5a68a0232c8e"
				alt="Emoji Support"
				class="rounded-lg shadow-sm w-full h-52 object-cover"
			/>
			<div
				class="absolute top-4 right-4 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white text-sm px-2 py-0.5"
			>
				Jul 15, 22
			</div>
		</div>

		<div class="my-2 text-xl font-semibold">Folkefest</div>
		<div class="">Dette blir moro</div>
	</a>
	<a class="p-2" href="#">
		<div class="relative">
			<img
				src="https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_480_320_l_f/0000/berg/2018/12/6/17/BA73958.jpeg?chk=FA7818"
				alt="Math Typesetting"
				class="rounded-lg shadow-sm w-full h-52 object-cover"
			/>
			<div
				class="absolute top-4 right-4 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white text-sm px-2 py-0.5"
			>
				Jul 14, 22
			</div>
		</div>

		<div class="my-2 text-xl font-semibold">Sykkel</div>
		<div class="">Sykling kan være gøy</div>
	</a>
	<a class="p-2" href="#">
		<div class="relative">
			<img
				src="https://media.snl.no/media/137414/standard_compressed_19UWjWe_p2g.jpg"
				alt="Markdown Syntax Guide"
				class="rounded-lg shadow-sm w-full h-52 object-cover"
			/>
			<div
				class="absolute top-4 right-4 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white text-sm px-2 py-0.5"
			>
				Jul 14, 22
			</div>
		</div>

		<div class="my-2 text-xl font-semibold">Svømming</div>
		<div class="">Her er noe beskrivende tekst om svømming</div>
	</a>
</div>
