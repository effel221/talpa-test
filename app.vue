

<template>
  <header>
    <div class="flex">
      <div class="grid-cols-1 text-green-500 text-2xl m-4">Logo</div>
      <div class="grid-cols-5">Hello world!</div>
    </div>

  </header>
  <main>
    <Splide
        :options="{ perPage: 5, perMove: 1, type: 'loop', gap: '1em', height: '15rem' }"
        aria-labelledby="My Favorite Images"
    >
      <SplideSlide v-for="item in result?.car_rentals" :key="item.id">
        <Product :item="item" />
      </SplideSlide>
    </Splide>
  </main>
</template>


<script lang="ts" setup>
import {getCarRentalsProducts} from "./queries/queries";
import type {CarRentalsInteface} from "./types_interfaces/interfaces";



const { result } = useQuery<CarRentalsInteface>(getCarRentalsProducts)


</script>
