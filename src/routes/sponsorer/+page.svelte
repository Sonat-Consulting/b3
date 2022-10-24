<script lang="ts">
	import type { SponsorsPageData } from '$lib/types/pagedata/SponsorsPageData';
	import Header from '$lib/components/Header.svelte';

	export let data: SponsorsPageData;
	const { menuItems } = data;
</script>

<svelte:head>
	<title>Bergen Triathlon Events | Bli sponsor</title>
</svelte:head>

<Header {menuItems} />

<section
	class="hero relative"
	style="background-image: url(https://images.ctfassets.net/wi3d49ltoppx/vAi6L2w3h8kelHusRstzD/5d05daf5cdbdbf7099bec47f6bf49231/_d4h0152_52332189946_o.jpg?fm=webp&w=1200&h=800);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-white">
		<div class="max-w-xl py-12 md:py-32">
			<h1 class="text-4xl md:text-5xl font-bold leading-relaxed">Sponsorer</h1>
		</div>
	</div>
</section>

<section class="px-8 py-16 container max-w-screen-md mx-auto">
	<h2 class="text-center mb-8 text-xl">Bli sponsor</h2>

	<p class="text-leading mb-8">
		Sponsorstrukturen vår gir bedrifter muligheten til å bli hovedsponsor, partner, mediepartner
		eller leverandør, avhengig av bedriftens muligheter, behov og formål. Våre sponsorer er viktige
		brikker i gjennomføringen og utviklingen av arrangementene våre. BTE samarbeider tett med sine
		partnere for i felleskap å utvikle og skape merverdi og forretningsnytte for partnere. Som
		forretningspartner til triatlonfestivalen i Bergen har du mulighet til å kommunisere og
		aktivisere deg med BTE – internt og eksternt, året rundt!
	</p>

	<div class="flex justify-center mb-32">
		<a class="btn btn-primary normal-case" href="https://bte.ticketco.events/no/nb"
			>Kjøp annonseplassering langs løypen</a
		>
	</div>

	<h2 class="text-center mb-8 text-xl">Hvorfor bli sponsor?</h2>

	<p class="text-leading mb-8">
		Tusenvis av bergensere skaper alltid en unik ramme på Bryggen og i sentrum av Bergen. Det å
		stille opp, med entusiasme, er en del av identiteten til bergensere. Etableringen av det største
		årlige internasjonale arrangementet på Vestlandet Bergen er krevende.
	</p>

	<p class="text-leading mb-8">
		De frivillige er stammen i arbeidet vårt. Det offentlige med Bergen kommune, Vestland fylke og
		Staten bidrar sammen med våre sponsorer til å gjøre arrangementet mulig økonomisk. Bergen
		Triathlon Events, heleid av de to klubbene Åsane Cykle Klubb og Bergen Triathlon Club, har vist
		at vi kan skape et godt arrangement for alle.
	</p>

	<p class="text-leading mb-8">
		Det er ingen velfylt konto eller stor avkastning, men akkurat nok til at vi kan fortsette med
		noe som byen, innbyggerne og idrettsutøverne våre fortjener. Derfor er alle bidrag viktige; fra
		alle som har mulighet til å bidra personlig eller som selskap. Vi har en unik synlighet for
		markedsføring eller bare som markering av støtte til barn, voksne og funksjonshemmede. Og ikke
		minst – et arrangement der de som kanskje er Bergens beste idrettsutøvere gjennom historien kan
		ta med seg verdenseliten hjem til fest.
	</p>
</section>
