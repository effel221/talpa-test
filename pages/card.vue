<script setup lang="ts">
import {useCardStore} from "../stores/cardStore";

const store = useCardStore()
const { cardUser, cardAdmin, isAdminResult } = storeToRefs(store)

</script>

<template>

   <h2 class="m-4 text-3xl font-bold">User's Orders</h2>
   <div class="flex flex-wrap">
     <Product v-for="cardProduct in cardUser?.get_card[0]?.products"
              :key="cardProduct.id" :item="cardProduct" :isOrderButtonVisible="false" />
   </div>
  <div v-show="isAdminResult">
    <h2 class="m-4 text-3xl font-bold">Admin's Orders</h2>
    <div class="flex">
      <Product v-for="cardProduct in cardAdmin?.get_card[0]?.products"
               :key="cardProduct.id" :item="cardProduct" :isOrderButtonVisible="false" />
    </div>
   </div>
</template>


