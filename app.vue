

<template>
  <div>
     akd;lakd;lamamds.,ams
  </div>
</template>


<script lang="ts" setup>

const query = gql`
  query books {
    books {
      title
    }
  }
`
const variables = { limit: 5 }
const { data } = await useAsyncQuery(query)
console.log(data ? data : null)
</script>
