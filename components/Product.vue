<script setup lang="ts">
import moment from "moment";
import type {Product} from "../types_interfaces/interfaces"
import {ProductTypes} from "../lib/utils"
interface Props  {
  item: Product
}
const props = defineProps<Props>()

const isFlight = ref(props.item.type === ProductTypes.first)
const isHotel = ref(props.item.type === ProductTypes.second)
const isCar = ref(props.item.type === ProductTypes.third)
</script>

<template>
  <div class="relative w-72 m-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <span
      class="absolute	px-1 right-1 top-1 text-white rounded-lg text-sm"
      :class="{
        'bg-fuchsia-800': isFlight,
        'bg-orange-500': isCar,
        'bg-sky-700': isHotel}"
    >
      <span v-show="isFlight">Flight</span>
      <span v-show="isHotel">Hotel</span>
      <span v-show="isCar">Car</span>
    </span>
    <h5
        class="mb-2 text-2xl font-bold tracking-tight"
        :class="{
        'text-fuchsia-800': isFlight,
        'text-orange-500': isCar,
        'text-sky-700': isHotel}">{{item.name}}</h5>
    <p v-show="isFlight"><strong>Flight date:</strong> {{moment(item.date).format("MMM Do YY")}}</p>
    <p class="text-cyan-950"><strong>City:</strong> {{item.city}}</p>
  </div>
</template>


