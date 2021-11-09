<svelte:head>
	<title>B3 | Frivillige</title>
</svelte:head>

<section class="bg-red-50 dark:bg-gray-900">
	<div
		class="container max-w-screen-lg mx-auto px-6 py-12 grid md:grid-cols-2 gap-4 lg:gap-16 items-center"
	>
		<form class="w-full max-w-lg" name="volunteers" method="POST" data-netlify="true">
			<input type="hidden" name="form-name" value="volunteers" />
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						First Name
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Jane"
						name="firstname"
					/>
				</div>
				<div class="w-full md:w-1/2 px-3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-last-name"
					>
						Last Name
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-last-name"
						type="text"
						placeholder="Doe"
						name="lastname"
					/>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-email"
					>
						Email
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-email"
						type="email"
						placeholder="Din epost"
						name="email"
					/>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-phone"
					>
						Telefon
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-phone"
						type="tel"
						placeholder="Ditt telefonnummer"
						name="phone"
					/>
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
