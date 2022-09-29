<script>
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Bergen Triathlon Events | Bli sponsor</title>
</svelte:head>

<section
	class="hero min-h-screen relative"
	style="background-image: url(https://images.ctfassets.net/wi3d49ltoppx/vAi6L2w3h8kelHusRstzD/5d05daf5cdbdbf7099bec47f6bf49231/_d4h0152_52332189946_o.jpg?fm=webp&w=1200&h=800);"
>
	<a href="/" class="absolute top-8 left-8 	flex flex-row items-center">
		<div class="flex flex-col text-right uppercase font-bold text-white">
			<span>World</span>
			<span>Triathlon</span>
			<span>Cup Bergen</span>
		</div>
	</a>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-white">
		<div class="max-w-xl">
			<h1 class="mb-8 text-4xl md:text-5xl font-bold leading-relaxed">
				Bli sponsor ved neste løp!
			</h1>
			<p class="mb-8 text-xl md:text-2xl leading-relaxed">
				Vi gir dere nå muligheten til å sette preg på vårt neste løp. Kjøp reklameplass langs løypen
				og få en unik sjanse til å vise deg frem i en kulisse av noen av verdens fremste utøvere.
			</p>
			<a
				href="https://bergentriathlon.demo.ticketco.events/no/nb"
				target="_blank"
				class="btn btn-primary"
			>
				<span class="font-bold text-white">Dette blir jeg med på!</span>
			</a>
		</div>
	</div>
</section>
