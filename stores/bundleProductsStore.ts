import {getBundleProducts} from "../queries/queries";
import type {BundleProductsInterface} from "../types_interfaces/interfaces";
import {deleteBundleProduct} from "../queries/mutations";
import type {BundleProduct} from "../types_interfaces/interfaces";
import {useProductsStore} from "../stores/productsStore";

export const useBundleProductsStore = defineStore('bundleProducts', () => {
    const productStore = useProductsStore()
    const { result, refetch } = useQuery<BundleProductsInterface>(getBundleProducts)
    const {mutate} = useMutation<BundleProduct>(deleteBundleProduct)

    const addBundleToCard = (item: BundleProduct) => {
        item.products.forEach(async (product)=>{
            await productStore.addToCard(product)
        })
    }

    return {result, refetch, mutate, addBundleToCard}
})
