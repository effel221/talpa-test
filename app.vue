

<template>
  <header class="mb-10 bg-orange-100">
    <div class="flex">
      <div class="text-green-500 text-2xl m-4 font-bold">
        <a href="/">Travel Paradise Site</a>
      </div>
      <div class="ml-auto mt-4 mb-4 mr-4">
      <UserInfo/>
      </div>
    </div>

  </header>
  <main class="flex flex-col">
    <Recommendations/>
    <h2 class="m-4 text-3xl font-bold">Availible
      <button v-show="isAdmin"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none
      focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2.5 py-1.5
      text-center me-2 mb-2 dark:bg-blue-600
      dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >+</button>
    </h2>
    <div class="flex m-5"><ProductFilter/></div>
    <div class="flex flex-wrap justify-center">
        <Product v-for="item in result?.products" :key="item.id" :item="item" />
    </div>
  </main>
</template>


<script lang="ts" setup>
import {useProductsStore} from "./stores/productsStore"
import {useUserInfoStore} from "./stores/userStore";
const store = useProductsStore()
const { result } = storeToRefs(store)
const userInfoStore = useUserInfoStore()
const { isAdmin } = storeToRefs(userInfoStore)
</script>
