// https://nuxt.com/docs/api/configuration/nuxt-config
const defineNuxtConfig = ({
  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: 'http://localhost:3000/api/graphql'
      }
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "nuxt-graphql-server",
    "@nuxtjs/apollo",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
     "nuxt-splide"],
  build: {
    postcss: {
      plugins: {
        "postcss-import": {},
        "postcss-url": {},
        "autoprefixer": {}
      }
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ]
});

export default defineNuxtConfig
