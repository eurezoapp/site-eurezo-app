// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-01-16"
})
export default defineNuxtConfig({
  ssr: false, // Desativa o SSR, habilitando SPA
  router: {
    base: '/',
  },
})
