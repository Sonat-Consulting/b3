<script>
	import '../app.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Header />

<main class="pb-12">
	<slot />
</main>

<Footer />
