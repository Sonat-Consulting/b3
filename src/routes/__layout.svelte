<script>
	import '../app.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Header>
	<main class="b3-page-content">
		<slot />
	</main>

	<Footer /></Header
>
<slot />
