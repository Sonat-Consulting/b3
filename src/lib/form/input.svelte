<script lang="ts">
	export let required: boolean;
	export let name: string;
	export let type: string;
	export let label: string;
	export let placeholder: string;
</script>

<label
	class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
	for={`input-${name}`}
>
	{label}
</label>
<input
	class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
	id={`input-${name}`}
	{required}
	{type}
	{placeholder}
	{name}
/>
