<script setup lang="ts">
import {useUserInfoStore} from "../stores/userStore";
import {useCardStore} from "../stores/cardStore";

const store = useUserInfoStore()
const { isAdmin } = storeToRefs(store)
const cardStore = useCardStore()
const {productCount} = storeToRefs(cardStore)
</script>

<template>
  <div class="ml-auto ">
     <NuxtLink to="/card" class="text-white bg-sky-700 hover:bg-sky-800 focus:outline-none
       focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5
       text-center me-2 mb-2 dark:bg-sky-600
       dark:hover:bg-sky-700 dark:focus:ring-blue-800"
             @click="store.setIsAdmin(true)"
     > {{productCount}}  Go to Card</NuxtLink>
     <button v-show="!isAdmin"
         class="text-white bg-teal-700 hover:bg-teal-800 focus:outline-none
      focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5
      text-center me-2 mb-2 dark:bg-teal-600
      dark:hover:bg-teal-700 dark:focus:ring-blue-800"
     @click="store.setIsAdmin(true)"
     >Log in as Admin</button>
    <button v-show="isAdmin" class="text-white bg-teal-700 hover:bg-teal-800 focus:outline-none
      focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5
      text-center me-2 mb-2 dark:bg-teal-600
      dark:hover:bg-teal-700 dark:focus:ring-blue-800"
    @click="store.setIsAdmin(false)"
    >Log in as User</button>
    <span>You logged as <strong v-show="isAdmin">Admin</strong><strong v-show="!isAdmin">User</strong></span>
  </div>
</template>


