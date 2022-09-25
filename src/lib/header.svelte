<script lang="ts">
    import type {MenuItem} from "$lib/contentful/types/MenuItemCollectionResponse";

    let isOpen = false;
    export let menuItems: MenuItem[] = [];
</script>

<header class="bg-gray-100 border-b-2 border-gray-200">
    <div class="max-w-screen-2xl m-auto">
        <div class="py-4 px-8 flex items-center justify-between">
            <div class="flex items-center">
                <a href="/" class="flex flex-row items-center">
                    <div class="flex flex-col text-right uppercase font-semibold">
                        <span>World</span>
                        <span>Triathlon</span>
                        <span>Cup Bergen</span>
                    </div>
                </a>
            </div>

            {#if menuItems?.length > 0}

                <div class="hidden lg:block">
                    {#each menuItems as menuItem}
                        <a class="text-lg mr-12 last:mr-0 font-semibold rounded hover:underline"
                           target="_blank"
                           href="{menuItem.url}">{menuItem.text}</a>
                    {/each}
                </div>

                <div class="block lg:hidden">
                    <button type="button" on:click="{() => isOpen = !isOpen}" class="block hover:text-gray-500">
                        <svg class:hidden="{isOpen}" class="h-7 fill-current" viewBox="0 0 122.88 95.95">
                            <g>
                                <path class="st0"
                                      d="M8.94,0h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,17.88,0,13.86,0,8.94l0,0 C0,4.02,4.02,0,8.94,0L8.94,0z M8.94,78.07h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105 C4.02,95.95,0,91.93,0,87.01l0,0C0,82.09,4.02,78.07,8.94,78.07L8.94,78.07z M8.94,39.03h105c4.92,0,8.94,4.02,8.94,8.94l0,0 c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,56.91,0,52.89,0,47.97l0,0C0,43.06,4.02,39.03,8.94,39.03L8.94,39.03z"/>
                            </g>
                        </svg>
                        <svg class:hidden="{!isOpen}" class="h-7 fill-current" viewBox="0 0 122.878 122.88">
                            <g>
                                <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"/>
                            </g>
                        </svg>
                    </button>
                </div>
            {/if}

        </div>

        <div class="pt-2 pr-5 pb-5 flex flex-col items-end lg:hidden" class:hidden="{!isOpen}">
            {#each menuItems as menuItem}
                <a class="block text-lg mb-5 font-semibold rounded hover:underline"
                   target="_blank"
                   href="{menuItem.url}">{menuItem.text}</a>
            {/each}
        </div>

    </div>
</header>