

<template>
  <header class="mb-10">
    <div class="flex">
      <div class="grid-cols-1 text-green-500 text-2xl m-4 font-bold">Travel Paradise Site</div>
    </div>

  </header>
  <main>
    <div class="flex flex-wrap justify-center">
        <Product v-for="item in products?.products" :key="item.id" :item="item" />
    </div>
  </main>
</template>


<script lang="ts" setup>
import {getProducts} from "./queries/queries";
import type {ProductsInteface} from "./types_interfaces/interfaces";



const { result: products } = useQuery<ProductsInteface>(getProducts)
if ( products) {
  console.log(products)
}

</script>
