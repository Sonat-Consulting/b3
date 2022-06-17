# Bergen Triathlon website
Official website for the Bergen Triathlon.

Frontend is written in Svelte with content being served from a ContentFul backend, currently at https://app.contentful.com/spaces/wi3d49ltoppx

The content is being fetched using the Contentful [GraphQL Content API](https://www.contentful.com/developers/docs/references/graphql/)

## Developing

- [Node.js LTS](https://nodejs.org/en/)

1. Add a file with name `.env` to add contentful tokens. Find the access token under `Settings` -> `API Keys` in contentful dashboard.
```
VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN=Fetch-Token-From-Contentful-backend
VITE_CONTENTFUL_SPACE_ID=wi3d49ltoppx
```

2. Run `npm install`
3. Run `npm run dev` to run the development server


## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
