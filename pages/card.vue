<script setup lang="ts">
import {useCardStore} from "../stores/cardStore";

const store = useCardStore()
const { cardUser, cardAdmin } = storeToRefs(store)
console.log(cardUser, cardAdmin)
</script>

<template>
 <div v-show="cardUser">
   User
 </div>
  <div  v-show="cardAdmin">
     Admin
   </div>
</template>


