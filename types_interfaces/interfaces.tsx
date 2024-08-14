export interface Product {
    id: number;
    date?: Date;
    city: string;
    name: string;
    type: string;
    description: string;
}

export interface BundleProduct {
    id: number;
    productids: number[];
    products: Product[];
}

export interface ProductsInterface {
    products: Product[]
}

export interface ProductsQueryInterface {
    filter: string[]
}

export interface IdParamMutationInteface {
    id: string
}

export interface BundleProductsInterface {
    bundle_products: BundleProduct[]
}

export interface ProductProps  {
    item: Product
}
