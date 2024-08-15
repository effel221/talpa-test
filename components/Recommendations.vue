<script setup lang="ts">
import {useBundleProductsStore} from "../stores/bundleProductsStore";
import {useUserInfoStore} from "../stores/userStore";

const userInfoStore = useUserInfoStore()
const { isAdmin } = storeToRefs(userInfoStore)
const store = useBundleProductsStore()
const { result } = storeToRefs(store)
const onBundleDeleteProduct = async (id: number) => {
  const variables = {
    id
  }
  await store.mutate(variables)
  await store.refetch()
}

</script>

<template>
  <h2 class="m-4 text-3xl font-bold">Our recommendations
    <button v-show="isAdmin"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none
      focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2.5 py-1.5
      text-center me-2 mb-2 dark:bg-blue-600
      dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >+</button>
  </h2>
  <Splide
      :options="{ perPage: 5, perMove: 1, gap: '2px', padding: '10px', pagination: true }"
      aria-labelledby="Our products bundle recommendations"
      class="relative mb-8 pb-8"
  >
    <SplideSlide v-for="item in result?.bundle_products" :key="item.id" class="bg-slate-200 border border-gray-200 rounded-lg">
      <h3 class="m-2 font-bold">Recommended product bundle</h3>
      <Product v-for="product in item?.products" :key="product.id" :item="product" />
      <button class="w-full mt-1.5 mb-1.5 ml-auto p-1.5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none
      focus:ring-4 focus:ring-blue-300 font-medium text-sm
      text-center dark:bg-blue-600
      dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Add to Card</button>
      <button v-show="isAdmin" class="absolute text-2xl font-bold	px-1 right-2 top-0 rounded-lg"
        @click="onBundleDeleteProduct(item.id)"
      >x</button>
    </SplideSlide>
  </Splide>
</template>


