import {fragmentProduct} from "../queries/queries";

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
