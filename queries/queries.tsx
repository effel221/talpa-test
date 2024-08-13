const fragmentProduct = gql`
    fragment Product on Product {
        date
        city
        name
        type
        description
    }
`

export const getProducts = gql`
    query getProducts {
        products {
            ...Product
        }
    }
    ${fragmentProduct}
`
