<script lang="ts">
    let isOpen = false
</script>

<header class="bg-white">
    <div class="px-4 py-3 flex items-center justify-between border-b-2 border-gray-200">
        <div class="flex items-center">
            <a href="/" class="flex flex-row items-center">
                <div class="whitespace-pre uppercase text-right">
                    World<br/>Triathlon<br/>Cup Bergen
                </div>
                <div class="px-2 ml-4 h-full">
                    <img alt="World triathlon cup Bergen 2022" src="/2022.svg"/>
                </div>
            </a>
        </div>

        <div>
            <button type="button" on:click="{() => isOpen = !isOpen}" class="block hover:text-gray-500">
                <svg class="h-7 fill-current" viewBox="0 0 18 12">
                    <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"/>
                </svg>
            </button>
        </div>
    </div>

    <div class="pr-2 py-3 flex flex-col items-end" class:hidden="{!isOpen}">
        <a class="block text-lg px-2 mb-1 font-semibold rounded hover:bg-sky-300" href="#">Go to this</a>
        <a class="block text-lg px-2 mb-1 font-semibold rounded hover:bg-sky-300" href="#">Go to that</a>
        <a class="block text-lg px-2 mb-1 font-semibold rounded hover:bg-sky-300" href="#">Trips</a>
        <a class="block text-lg px-2 font-semibold rounded hover:bg-sky-300" href="#">Athletes</a>
    </div>

</header>