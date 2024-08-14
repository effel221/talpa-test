<script setup lang="ts">
import {useBundleProductsStore} from "../stores/bundleProductsStore";

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
  <h2 class="m-4 text-3xl font-bold">Our recommendations</h2>
  <Splide
      :options="{ perPage: 5, perMove: 1, gap: '2px', padding: '10px', pagination: true }"
      aria-labelledby="Our products bundle recommendations"
      class="relative mb-8 pb-8"
  >
    <SplideSlide v-for="item in result?.bundle_products" :key="item.id" class="bg-slate-200 border border-gray-200 rounded-lg">
      <h3 class="m-2 font-bold">Recommended product bundle</h3>
      <Product v-for="product in item?.products" :key="product.id" :item="product" />
      <button>Order bundle</button>
      <button class="absolute text-2xl font-bold	px-1 right-2 top-0 rounded-lg"
        @click="onBundleDeleteProduct(item.id)"
      >x</button>
    </SplideSlide>
  </Splide>
</template>


