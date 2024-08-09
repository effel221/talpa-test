

<template>
  <div>

    <p>There are {{ data?.books[0]?.author.name || "ee1e" }}.</p>
  </div>
</template>


<script lang="ts" setup>

const query = gql`
  query getBooks {
    books {
      title
      author {
        name
      }
    }
  }
`
const variables = { limit: 5 }
const { data } = await useAsyncQuery({query, cache: false})

</script>
