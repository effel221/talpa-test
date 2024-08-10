

<template>
  <div>


    <input v-model="text">
    <button>Button</button>
  </div>
</template>


<script lang="ts" setup>





const query = gql`
  query getBooks {
    cities {
      date
      city
    }
  }
`


type CitiesResult = {
  cities: {
    date: Date;
    city: string;
  }[]
}

const { data } = useLazyAsyncQuery(query)

if (data) {
  // log response
  console.log(data)
}
const { result } = useQuery(query)
</script>
