import {fragmentProduct} from "../queries/queries";

export const deleteProduct = gql`
    mutation deleteProduct($id: ID!) {
        delete_product(id: $id) {
            ...Product
        }
    }
    ${fragmentProduct}
`
