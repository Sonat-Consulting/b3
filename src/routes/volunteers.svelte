<script context="module">
	import Input from '$lib/form/input.svelte';
</script>

<svelte:head>
	<title>B3 | Frivillige</title>
</svelte:head>

<form class="max-w-lg p-10" name="volunteers" method="POST" data-netlify="true">
	<input type="hidden" name="form-name" value="volunteers" />

	<div class="flex flex-wrap -mx-3 mb-12">
		<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
			<Input name="firstname" label="Fornavn" placeholder="Ola" type="text" required />
		</div>
		<div class="w-full md:w-1/2 px-3">
			<Input name="lastname" label="Etternavn" placeholder="Nordmann" type="text" required />
		</div>
	</div>

	<div class="w-full px-3 mb-12">
		<div class="flex flex-wrap -mx-3 mb-6">
			<Input name="email" label="Email" placeholder="Din epost" type="email" required />
		</div>
	</div>

	<div class="w-full px-3 mb-12">
		<div class="flex flex-wrap -mx-3 mb-6">
			<Input name="phone" label="Telefon" placeholder="Ditt telefonnummer" type="tel" required />
		</div>
	</div>

	<div class="w-full px-3 mb-12">
		<div class="flex flex-wrap -mx-3 mb-6">
			<Input name="age" label="Alder" placeholder="Din alder" type="number" />
		</div>
	</div>

	<div class="w-full px-3 mb-12">
		<fieldset class="flex flex-wrap -mx-3 mb-6">
			<legend class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
				Hva kunne du tenke deg å jobbe med?
			</legend>

			<div class="mt-4 space-y-4">
				<label class="flex items-center">
					<input name="jobs" value="Løypevakt for svømming" type="checkbox" class="checkbox mr-3" />
					Løypevakt for svømming
				</label>

				<label class="flex items-center">
					<input name="jobs" value="Løypevakt for sykling" type="checkbox" class="checkbox mr-3" />
					Løypevakt for sykling
				</label>

				<label class="flex items-center">
					<input name="jobs" value="Løypevakt for løping" type="checkbox" class="checkbox mr-3" />
					Løypevakt for løping
				</label>

				<label class="flex items-center">
					<input name="jobs" value="Drikkestasjon" type="checkbox" class="checkbox mr-3" />
					Drikkestasjon
				</label>

				<label class="flex items-center">
					<input name="jobs" value="Sjåfør" type="checkbox" class="checkbox mr-3" />
					Sjåfør
				</label>
			</div>
		</fieldset>
	</div>

	<div class="card-actions">
		<button type="submit" class="btn btn-primary">Send inn</button>
	</div>
</form>

<style>
	form {
		margin: 5rem auto 0;
	}
</style>
