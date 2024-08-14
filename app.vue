

<template>
  <header class="mb-10 bg-orange-100">
    <div class="flex">
      <div class="text-green-500 text-2xl m-4 font-bold">
        <a href="/">Travel Paradise Site</a>
      </div>
      <div class="ml-auto mt-4 mb-4 mr-4">
      <UserInfo/>
      </div>
    </div>

  </header>
  <main class="flex flex-col">
    <Recommendations/>
    <h2 class="m-4 text-3xl font-bold">Availible products</h2>
    <div class="flex m-5"><ProductFilter/></div>
    <div class="flex flex-wrap justify-center">
        <Product v-for="item in result?.products" :key="item.id" :item="item" />
    </div>
  </main>
</template>


<script lang="ts" setup>
import {useProductsStore} from "./stores/productsStore"
const store = useProductsStore()
const { result } = storeToRefs(store)
</script>
