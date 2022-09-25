# Bergen Triathlon website

Official website for the Bergen Triathlon.

Frontend is written in Svelte with content being served from a ContentFul backend, currently at https://app.contentful.com/spaces/{space-id}

The content is being fetched using the Contentful [GraphQL Content API](https://www.contentful.com/developers/docs/references/graphql/)

## Developing

- [Node.js LTS](https://nodejs.org/en/)

1. Add a file with name `.env` to add contentful tokens. Find the access token under `Settings` -> `API Keys` in contentful dashboard.

```
VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN=Fetch-Token-From-Contentful-backend
VITE_CONTENTFUL_SPACE_ID={space-id}
```

2. Run `npm install`
3. Run `npm run dev` to run the development server

## GraphQL Explorer
Visit https://graphql.contentful.com/content/v1/spaces/{SPACE}/explore?access_token={CDA_TOKEN} to test queries agains Contentful graph api.

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## Preview Contentful draft content

Contentful can serve two kinds of content:
- published
- draft

Both published and draft content is returned from the Contentful Graph API,
but to retrieve draft content **a different API key is required**.

Env variables required to build application with Contentful draft content:
- `VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN={contentful_preview_token}`
- `VITE_CONTENTFUL_PREVIEW=enabled`

For pull requests, Netlify will create a `preview-deploy`. These deployments
are configured with these environment variables to allow pull requests to demo
new functionality on unpublished CMS content.