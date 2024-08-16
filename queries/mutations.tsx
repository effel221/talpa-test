import {fragmentProduct} from "../queries/queries";

export const addToCard = gql`
    mutation addToCard($card: CardInput) {
        add_to_card(card: $card) {
            id
            user
            products {
                ...Product
            }
        }
    }
    ${fragmentProduct}
`

export const deleteProduct = gql`
    mutation deleteProduct($id: ID!) {
        delete_product(id: $id) {
            ...Product
        }
    }
    ${fragmentProduct}
`

export const deleteBundleProduct = gql`
    mutation deleteBundleProduct($id: ID!) {
        delete_bundle_product(id: $id) {
            id
            productids
            products {
                ...Product
            }
        }
    }
    ${fragmentProduct}
`
