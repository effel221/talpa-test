

<template>
  <header class="bg-orange-100 shadow fixed rigth-0 left-0 z-10 top-0 w-full">
    <div class="flex">
      <div class="text-teal-800 text-2xl m-4 font-bold">
        <a href="/">Travel Paradise Site</a>
      </div>
      <div class="ml-auto mt-4 mb-4 mr-4">
      <UserInfo/>
      </div>
    </div>
  </header>
  <main class="flex flex-col pt-28">
    <NuxtLayout dir="routing/pages" :nav="nav" current-route>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </main>
  <Modal> ak;ldkaldks</Modal>
</template>


<script lang="ts" setup>
useHead({
  title: 'Travel Paradise',
  meta: [
    { name: 'description', content: 'My amazing Travel Paradise site.' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
const router = useRouter()

const nav = [
  { label: 'Home', to: '/' },
  { label: 'Card', to: '/card' },
]
</script>
