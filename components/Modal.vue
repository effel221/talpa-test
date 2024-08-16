<script setup lang="ts">
  import {useModalStore} from "../stores/modalStore";
  const store = useModalStore()
  const {isModalVisible} = storeToRefs(store)
</script>

<template>
  <transition name="fade">
    <div v-if="isModalVisible">
      <div
          @click="store.onToggle"
          class="fixed bg-black opacity-70 inset-0 left-0 right-0 top-0 bottom-0 z-10"
      ></div>
      <div
          class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-3 rounded-xl shadow-lg bg-white z-10"
      >
        <slot></slot>
        <button @click="store.onToggle" class="absolute text-2xl font-bold	px-1 right-2 top-0 rounded-lg">x</button>
      </div>
    </div>
  </transition>
</template>


