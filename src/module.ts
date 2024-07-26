import {
  defineNuxtModule,
  createResolver,
  addComponent,
} from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'donate-a-bagel',
    configKey: 'bagel',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // App
    addComponent({ name: 'DonateABagel', filePath: resolver.resolve('./runtime/DonateABagel') })

    // Server

    // Runtime Config
    const runtimeConfig = nuxt.options.runtimeConfig
    runtimeConfig.bagel = defu(runtimeConfig.bagel, {
      key: process.env.NUXT_SESSION_PASSWORD || '',
    })
  },
})
