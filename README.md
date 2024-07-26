# Nuxt Auth Utils

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Add a `Donate a Bagel` button to your app!

- [Release Notes](/CHANGELOG.md)

## Quick Setup

1. Add `nuxt-donate-a-bagel` in your Nuxt project

```bash
npx nuxi@latest module add nuxt-donate-a-bagel
```

2. Add a the config settings in the `runtimeConfig` in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    bagel: {
      stripeKey: 'your_stripe_key',
      host: 'https://your_website.com'
      successUrl: '' // Url to redirect to after payment, e.g. https://your_website.com/thankyou
    }
  }
})
```

They can also be set using environment variables:

- `NUXT_BAGEL_STRIPE_KEY`
- `NUXT_BAGEL_SUCCESS_URL`

3. That's it! You can now add the `<DonateABagel>` component to your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```
