<script setup lang="ts">
import {ProductTypes} from "../lib/utils"
import {useProductsStore} from "../stores/productsStore"
const store = useProductsStore()
const { visibleProductsTypes, refetch } = storeToRefs(store)

const checkedProducts = ref([])
const valueFlights = ref(ProductTypes.first)
const valueHotels = ref(ProductTypes.second)
const valueCars = ref(ProductTypes.third)

watch(checkedProducts, ()=> {

  store.setVisibleProductsTypes([...checkedProducts.value])
  const variables = {
    filter: [...visibleProductsTypes.value]
  }
  console.log(variables)
  store.refetch(variables)
})
</script>

<template>
  <div class="flex m-5">
    <div class="flex items-center me-4">
      <input id="flights-checkbox" type="checkbox" :value="valueFlights" v-model="checkedProducts" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      <label for="flights-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Flights</label>
    </div>
    <div class="flex items-center me-4">
      <input id="hotels-checkbox" type="checkbox" :value="valueHotels" v-model="checkedProducts" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      <label for="hotels-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hotels</label>
    </div>
    <div class="flex items-center me-4">
      <input id="inline-checked-checkbox" type="checkbox" :value="valueCars" v-model="checkedProducts" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      <label for="inline-checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Car Rentals</label>
    </div>
  </div>
</template>


