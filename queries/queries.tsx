export const fragmentProduct = gql`
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

export const getBundleProducts = gql`
    query getBundleProducts {
        bundle_products {
            id
            productids
            products {
              ...Product
            }
       }
    }
    ${fragmentProduct}
`

export const getCardInfo = gql`
    query getCardInfo($filter: CardFilter) {
        get_card(filter: $filter) {
            id
            user
            products {
                ...Product
            }
        }
    }
    ${fragmentProduct}
`
