<script setup lang="ts">
import {useProductsStore} from "../stores/productsStore"
import {useUserInfoStore} from "../stores/userStore";
import {useCardStore} from "../stores/cardStore";
const store = useProductsStore()
const { result } = storeToRefs(store)
const userInfoStore = useUserInfoStore()
const { isAdmin } = storeToRefs(userInfoStore)
const cardStore = useCardStore()
const { productIndicator } = storeToRefs(cardStore)


</script>

<template>
  {{productIndicator}}}
  <Recommendations/>
  <h2 class="m-4 text-3xl font-bold">Available products
    <button v-show="isAdmin"
            class="text-white bg-teal-700 hover:bg-teal-800 focus:outline-none
    focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2.5 py-1.5
    text-center me-2 mb-2 dark:bg-teal-600
    dark:hover:bg-teal-700 dark:focus:ring-blue-800"
    >+</button>
  </h2>
  <div class="flex m-5"><ProductFilter/></div>
  <div class="flex flex-wrap justify-center">
    <Product v-for="item in result?.products" :key="item.id" :item="item" :isOderButtonVisible="true" />
  </div>
</template>


