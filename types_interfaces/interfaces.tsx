export interface Product {
    id: number;
    date?: Date;
    city: string;
    name: string;
    type: string;
    description: string;
}

export interface ProductsInterface {
    products: Product[]
}

export interface ProductsQueryInterface {
    filter: string[]
}

export interface BundleProductsInterface {
    id: number;
    productids: number[];
    products: Product[];
}
