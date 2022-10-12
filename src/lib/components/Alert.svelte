<script lang="ts">
	export let type: 'error' | 'warning' | 'info' = 'info';
	export let title: string;
</script>

<div
	class:border-red-500={type === 'error'}
	class:bg-red-100={type === 'error'}
	class:border-sky-300={type === 'info'}
	class:bg-[#d3f1ff]={type === 'info'}
	class="p-8 rounded-lg border-solid border-2 bg-opacity-50"
>
	{#if title}
		<h2 class="text-center text-2xl mb-6">{title}</h2>
	{/if}
	<p class="leading-relaxed text-center text-lg">
		<slot />
	</p>
</div>
