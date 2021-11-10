<script lang="ts">
	export let url: string;
	export let date: string;
	export let imageSrc: string;
	export let imageAltText: string;
	export let title: string;
	export let ingress: string;
</script>

<a class="p-2" href={url}>
	<div class="relative">
		<img src={imageSrc} alt={imageAltText} class="rounded-lg shadow-sm w-full h-52 object-cover" />
		<div
			class="absolute top-4 right-4 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white text-sm px-2 py-0.5"
		>
			{date}
		</div>
	</div>

	<div class="my-2 text-xl font-semibold">{title}</div>
	<div class="">{ingress}</div>
</a>
