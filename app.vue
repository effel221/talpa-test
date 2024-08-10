

<template>
  <div>
    <p>There are {{ result?.books[0]?.title || "ee1e" }}.</p>
    <ul id="example-1">
      <li v-for="item in result?.books" :key="item.title">
        {{ item.title }}
      </li>
    </ul>
    <input v-model="text">
    <button @click="addTodo(text)">Button</button>
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

const mutation = gql`
  mutation postBook($title: String!) {
    post(title: $title) {
      title
    }
  }
`

type BooksResult = {
  books: {
    title: string;
    author?: any;
  }[]
}

const { result, refetch } = useQuery(query)
const ttt = ref('')

const addTodo = (arg) => {
  ttt.value= arg;
}

watch(ttt, ()=>{
  const variables = {
    title: ttt.value
  }
  const { mutate } = useMutation(mutation, { variables })
  mutate()
  refetch()
})
</script>
