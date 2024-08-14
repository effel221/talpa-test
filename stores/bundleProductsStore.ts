import {getBundleProducts} from "../queries/queries";
import type {BundleProductsInterface} from "../types_interfaces/interfaces";

export const useBundleProductsStore = defineStore('bundleProducts', () => {

    const { result, refetch } = useQuery<BundleProductsInterface>(getBundleProducts)
    if (result?.bundle_products) {
        console.log(result?.bundle_products)
    }
    return {result, refetch}
})
