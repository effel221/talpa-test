<script setup lang="ts">
import type {Product} from "../types_interfaces/interfaces"

interface Props  {
  item: Product
}
const props = defineProps<Props>()

</script>

<template>

  {{item.name}}



</template>


