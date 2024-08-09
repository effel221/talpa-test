// https://nuxt.com/docs/api/configuration/nuxt-config
const defineNuxtConfig = ({
  graphqlServer: {
    url: '/api/graphql',
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: '/api/graphql'
      }
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["nuxt-graphql-server", "@nuxtjs/apollo"]
});

export default defineNuxtConfig
