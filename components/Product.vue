<script setup lang="ts">
import moment from "moment";
import type {ProductProps} from "../types_interfaces/interfaces"
import {ProductTypes} from "../lib/utils"
import {useProductsStore} from "../stores/productsStore";
import {useUserInfoStore} from "../stores/userStore";
const userInfoStore = useUserInfoStore()
const { isAdmin } = storeToRefs(userInfoStore)
const store = useProductsStore()
const props = defineProps<ProductProps>()
const isFlight = ref<boolean>(props?.item?.type === ProductTypes.first || false)
const isHotel = ref(props?.item?.type === ProductTypes.second)
const isCar = ref(props?.item?.type === ProductTypes.third)
const isOrderButtonVisible = props.isOrderButtonVisible
</script>

<template>
  <div
      class="relative w-72 m-1 px-6 pb-4 pt-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
     :class="{'pb-10': isOrderButtonVisible}">
    <span
      class="absolute	px-1 left-1 top-1 text-white rounded-lg text-sm"
      :class="{
        'bg-fuchsia-800': isFlight,
        'bg-orange-700': isCar,
        'bg-sky-700': isHotel}"
    >
      <span v-show="isFlight">Flight</span>
      <span v-show="isHotel">Hotel</span>
      <span v-show="isCar">Car</span>
    </span>
    <h3
        class="mb-2 mt-2 text-2xl font-bold tracking-tight"
        :class="{
        'text-fuchsia-800': isFlight,
        'text-orange-600': isCar,
        'text-sky-700': isHotel}">{{item.name}}</h3>
    <p v-show="isFlight"><strong>Flight date:</strong> {{moment(item.date).format("MMM Do YY")}}</p>
    <p><strong>City:</strong> {{item.city}}</p>
    <p>{{item.description}}</p>
    <button v-show="isOrderButtonVisible" class="absolute left-1 bottom-1 right-1 p-1.5 text-white bg-teal-700 hover:bg-teal-800 focus:outline-none
      focus:ring-4 focus:ring-blue-300 font-medium text-sm
      text-center dark:bg-teal-600
      dark:hover:bg-teal-700 dark:focus:ring-blue-800"
      @click="store.addToCard(item)"
    >Add to Card</button>
    <button v-show="isAdmin" class="absolute flex text-2xl font-bold	px-0 right-2 top-0 rounded-lg p-1"
      :class="{
        'text-fuchsia-800': isFlight,
        'text-orange-500': isCar,
        'text-sky-700': isHotel}"
      @click="store.onDeleteProduct(item)"
    >x</button>
  </div>
</template>


