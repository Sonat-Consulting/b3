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
				Vi ser etter deg som har lyst å bidra til at dette blir årets happening i 2021. Bli med da
				vel! Vi trenger alle frivillige vi kan få.
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
