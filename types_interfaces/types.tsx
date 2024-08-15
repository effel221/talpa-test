import type {Product} from "../types_interfaces/interfaces";

export type ProductsQueryType = {
    filter: string[]
}

export type IdParamMutationType = {
    id: string
}

export type GetCardType = {
    filter: {
      id: string,
      user: string
    }
}

export type CardType = {
    id: number
    user: string
    card_products: {
        product: Product[]
    }
    productCount: number
}

export type CardQuery = {
    get_card: {
        productCount: number
        card_products: {
            product: Product
        }[]
    }[]
}

export type CardArgsType = {
    card: {
        user: string
        products: Product[]
    }
}
