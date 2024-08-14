<script setup lang="ts">
import {useUserInfoStore} from "../stores/userStore";

const store = useUserInfoStore()
const { isAdmin } = storeToRefs(store)

</script>

<template>
  <div class="ml-auto ">
     <button v-show="!isAdmin"
         class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none
      focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5
      text-center me-2 mb-2 dark:bg-blue-600
      dark:hover:bg-blue-700 dark:focus:ring-blue-800"
     @click="store.setIsAdmin(true)"
     >Log in as Admin</button>
    <button v-show="isAdmin" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none
      focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5
      text-center me-2 mb-2 dark:bg-blue-600
      dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    @click="store.setIsAdmin(false)"
    >Log in as User</button>
    <span>You logged as <strong v-show="isAdmin">Admin</strong><strong v-show="!isAdmin">User</strong></span>
  </div>
</template>


