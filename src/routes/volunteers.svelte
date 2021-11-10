<script context="module">
	import Card from '$lib/card.svelte';
	import Input from '$lib/form/input.svelte';
</script>

<svelte:head>
	<title>B3 | Frivillige</title>
</svelte:head>

<Card>
	<form class="w-full max-w-lg" name="volunteers" method="POST" data-netlify="true">
		<input type="hidden" name="form-name" value="volunteers" />
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				<Input name="firstname" label="Fornavn" placeholder="Ola" type="text" />
			</div>
			<div class="w-full md:w-1/2 px-3">
				<Input name="lastname" label="Etternavn" placeholder="Nordmann" type="text" />
			</div>
		</div>
		<div class="w-full px-3">
			<div class="flex flex-wrap -mx-3 mb-6">
				<Input name="email" label="Email (ny)" placeholder="Din epost" type="email" />
			</div>
		</div>
		<div class="w-full px-3">
			<div class="flex flex-wrap -mx-3 mb-6">
				<Input name="phone" label="Telefon (ny)" placeholder="Ditt telefonnummer" type="tel" />
			</div>
		</div>
		<div class="card-actions">
			<button type="submit" class="btn btn-primary">Send inn</button>
		</div>
	</form>
</Card>
