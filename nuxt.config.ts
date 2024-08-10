// https://nuxt.com/docs/api/configuration/nuxt-config
const defineNuxtConfig = ({
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:3000/api/graphql',
      }
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["nuxt-graphql-server", "@nuxtjs/apollo"],
});

export default defineNuxtConfig
