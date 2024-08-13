

<template>
  <header class="mb-10">
    <div class="flex">
      <div class="grid-cols-1 text-green-500 text-2xl m-4 font-bold">
        <a href="/">Travel Paradise Site</a>
      </div>
    </div>

  </header>
  <main>
    <ProductFilter/>
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
