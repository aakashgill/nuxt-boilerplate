// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  devtools: { enabled: true },
  css: ["@/assets/css/main.scss"],

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
    },
  },
  nitro: {
    prerender: {
      // Workaround for "Error: [404] Page not found: /manifest.json"
      failOnError: false,
    },
  },

  modules: ["@nuxt/content", "@nuxthq/studio"]
});