<script context="module">
	import Card from '$lib/card.svelte';
</script>

<svelte:head>
	<title>B3 | Samarbeidspartnere</title>
</svelte:head>

<Card>
	<form class="w-full max-w-lg" name="volunteers" method="POST" data-netlify="true">
		<div>
			<h1 class="text-4xl font-bold mb-4">Bli en samarbeidspartner</h1>
			<p class="font-light text-lg">
				Vi ønsker flere samarbeidspartnere. Ta kontakt med oss dersom det er interessant.
			</p>
		</div>
	</form>
	<img
		class="rounded-lg shadow-sm"
		alt="Bilder av frivillige til B3"
		src="https://images.ctfassets.net/wi3d49ltoppx/2UM5tta9rejSkQ4gKx328f/a10997854daccf6c5e00a59491e351e8/a1751f32-9923-4454-b8d6-5acb6f9b098f"
	/>
</Card>
