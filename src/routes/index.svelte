<script context="module" lang="ts">
    import {HomePage} from '$lib/contentful/types/HomePage';

    export async function load({fetch}): Promise<any> {
        const [homePageRes, articlesRes, menuRes] = await Promise.all([
            fetch('/contentful/home.json'),
            fetch('/contentful/articles.json'),
            fetch('/contentful/menu.json')
        ]);

        if (homePageRes.ok) {
            const homePage: HomePage = await homePageRes.json();
            const articles = await articlesRes.json();
            const menuItems = await menuRes.json();
            return {props: {menuItems, homePage, articles}};
        }
    }
</script>

<script lang="ts">
    import Header from '$lib/header.svelte';
    import Hero from '$lib/hero.svelte';
    import Card from '$lib/card.svelte';
    import News from '$lib/news.svelte';
    import type {Article} from '$lib/contentful/types/Article';
    import type {MenuItem} from "$lib/contentful/types/MenuItemCollectionResponse";

    export let menuItems: MenuItem[] = [];
    export let homePage: HomePage;
    export let articles: Article[];
</script>

<svelte:head>
    <title>B3 </title>
</svelte:head>

<Header menuItems={menuItems}/>

<Hero/>

<div class="container flex flex-col mx-auto">
    <Card>
        <div>
            <h1 class="text-4xl font-bold mb-4">{homePage.content.topBannerTitle}</h1>
            <p class="font-light text-lg mb-8">
                {homePage.content.topBannerSubtitle}
            </p>
            <div class="card-actions">
                <a class="btn-primary mb-8 mr-8" href="https://bte.mobilise.no/Applicant.aspx?arr=9082758">Meld deg som
                    frivillig</a>
                <a class="btn-secondary mb-8 mr-8" href="/news/frivillig">Mer informasjon</a>
            </div>
        </div>
        <img
                class="rounded-lg shadow-sm col-span-2"
                alt={homePage.content.topBannerImage.description}
                src={homePage.content.topBannerImage.url}
        />
    </Card>

    <News {articles}/>
</div>
