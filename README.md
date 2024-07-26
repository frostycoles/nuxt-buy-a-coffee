# Nuxt Donate a Bagel

Add a `Donate a Bagel` button to your app!

Let's be honest. Sometimes you don't need more coffee. You just want a perfectly toasted bagel, spread with beautifully creamy cheese, and maybe some smoked salmon, capers, and a pickle slice.

That's where we come in. This is a Nuxt module for those who care about their bagel dreams. This module gives you a button that you can use in your Nuxt app so other people know that you care too.

It's simple:
1. You put this button on your website
2. People click this button and send money directly to your Stripe account
3. You buy bagels

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
      stripeKey: 'your_stripe_key', // Be sure to keep this in a secure place (like a .env file), NOT in source code
      host: 'https://your_website.com'
      successUrl: '' // Url to redirect to after payment, e.g. https://your_website.com/thankyou
    }
  }
})
```

They can also be set using environment variables:

- `NUXT_BAGEL_STRIPE_KEY`
- `NUXT_BAGEL_HOST`
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
