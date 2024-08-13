

<template>
  <header>
    <div class="flex">
      <div class="grid-cols-1 text-green-500 text-2xl m-4">Logo</div>
      <div class="grid-cols-5">Hello world!</div>
    </div>
  </header>
  <main>
    <ul id="example-1">
      <li v-for="item in result?.car_rentals" :key="item.id">
        <Product :item="item" />
      </li>
    </ul>
  </main>
</template>


<script lang="ts" setup>
import {getCarRentalsProducts} from "./queries/queries";
import type {CarRentalsInteface} from "./types_interfaces/interfaces";



const { result } = useQuery<CarRentalsInteface>(getCarRentalsProducts)


</script>
