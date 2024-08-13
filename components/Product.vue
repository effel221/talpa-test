<script setup lang="ts">
import type {Product} from "../types_interfaces/interfaces"
interface Props  {
  item: Product
}
const props = defineProps<Props>()

const isFlight = ref(props.item.type === "flight")
const isHotel = ref(props.item.type === "hotel")
const isCar = ref(props.item.type === "car_rentals")
</script>

<template>
  <div class="w-72 m-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5
        class="mb-2 text-2xl font-bold tracking-tight"
        :class="{
        'text-fuchsia-800': isFlight,
        'text-orange-500': isCar,
        'text-sky-700': isHotel}">{{item.name}}</h5>
    <p class="font-bold text-cyan-950">{{item.city}}</p>
  </div>
</template>


