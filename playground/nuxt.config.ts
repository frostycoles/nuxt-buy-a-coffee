export default defineNuxtConfig({
  compatibilityDate: '2024-07-25',
  devServer: {
    host: '127.0.0.1',
  },
  modules: ['../src/module.ts', '@nuxt/ui'],
  devtools: { enabled: true },
  imports: {
    autoImport: true,
  },
})
