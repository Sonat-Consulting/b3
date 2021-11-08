<script context="module">
    export async function load({fetch}) {
        const res = await fetch('/contentful.json')

        if (res.ok) {
            const {homePage} = await res.json()
            return {
                props: {homePage}
            }
        }
    }
</script>

<script>
    export let homePage
</script>

<div class="banner">
    <h1>{homePage.topBannerTitle}</h1>
    <img alt={homePage.topBannerImage.description} src={homePage.topBannerImage.url}/>
</div>
