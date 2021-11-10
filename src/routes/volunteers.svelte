<script context="module">
	import Input from '$lib/form/input.svelte';
</script>

<svelte:head>
	<title>B3 | Frivillige</title>
</svelte:head>

<section class="bg-red-50">
	<div
		class="container max-w-screen-lg mx-auto px-6 py-12 grid md:grid-cols-2 gap-4 lg:gap-16 items-center"
	>
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
		<img
			class="rounded-lg shadow-sm"
			alt="Bilder av frivillige til B3"
			src="https://images.ctfassets.net/wi3d49ltoppx/2UM5tta9rejSkQ4gKx328f/a10997854daccf6c5e00a59491e351e8/a1751f32-9923-4454-b8d6-5acb6f9b098f"
		/>
	</div>
</section>
