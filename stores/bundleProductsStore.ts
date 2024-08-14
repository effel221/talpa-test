import {getBundleProducts} from "../queries/queries";
import type {BundleProductsInterface} from "../types_interfaces/interfaces";
import {deleteBundleProduct} from "../queries/mutations";

export const useBundleProductsStore = defineStore('bundleProducts', () => {

    const { result, refetch } = useQuery<BundleProductsInterface>(getBundleProducts)
    const {mutate} = useMutation<BundleProductsInterface>(deleteBundleProduct)

    return {result, refetch, mutate}
})
