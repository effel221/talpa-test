import {getBundleProducts} from "../queries/queries";
import type {BundleProductsInterface} from "../types_interfaces/interfaces";
import {deleteBundleProduct} from "../queries/mutations";
import type {BundleProduct} from "../types_interfaces/interfaces";

export const useBundleProductsStore = defineStore('bundleProducts', () => {

    const { result, refetch } = useQuery<BundleProductsInterface>(getBundleProducts)
    const {mutate} = useMutation<BundleProduct>(deleteBundleProduct)

    return {result, refetch, mutate}
})
