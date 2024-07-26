import {
  defineNuxtModule,
  createResolver,
  addComponent,
  addServerScanDir,
} from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Stripe API key
   *
   * https://docs.stripe.com/keys
   *
   * Be sure to keep this in a secure place (like a .env file), not in source code
   */
  stripeKey: string
  /** The location of your app */
  host: string
  /** The path to redirect the user to after a succesful payment */
  successUrl: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'donate-a-bagel',
    configKey: 'bagel',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    stripeKey: '',
    host: '',
    successUrl: '',
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // App
    addComponent({ name: 'DonateABagel', filePath: resolver.resolve('./runtime/DonateABagel') })

    // Server
    addServerScanDir([resolver.resolve('./runtime/server')])

    // Runtime Config
    const runtimeConfig = nuxt.options.runtimeConfig
    runtimeConfig.bagel = defu(runtimeConfig.bagel, {
      stripeKey: process.env.NUXT_BAGEL_STRIPE_KEY || '',
      host: process.env.NUXT_BAGEL_HOST || '',
      successUrl: process.env.NUXT_BAGEL_SUCCESS_URL || '',
    })

    console.log('🥯 Bagel module setup complete!')
  },
})
