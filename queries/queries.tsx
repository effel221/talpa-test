const fragmentProduct = gql`
    fragment Product on Product {
        id
        date
        city
        name
        type
        description
    }
`

export const getProducts = gql`
    query getProducts($filter: [String]) {
        products(filter: $filter) {
            ...Product
        }
    }
    ${fragmentProduct}
`
