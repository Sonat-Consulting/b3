<script lang="ts">
	import type { TopBanner } from '$lib/types/viewmodels';
	import TopBannerContent from '$lib/components/TopBannerContent.svelte';

	export let topBanner: TopBanner;
</script>

<div
	class="max-w-screen-2xl m-auto grid grid-cols-12 grid-rows-6 h-64 md:h-104 bg-cover bg-center"
	style={`background-image: url(${topBanner.image.url})`}
>
	<div
		class="bg-[#467FD4]/80 col-span-12 row-start-4 row-span-3 md:row-span-6 md:col-start-8 md:col-span-5 lg:col-span-4 lg:col-start-9 text-white flex-col justify-center p-8 hidden md:flex"
	>
		<TopBannerContent {topBanner} />
	</div>
</div>
<div class="md:hidden p-8 bg-[#467FD4] text-white">
	<TopBannerContent {topBanner} />
</div>
