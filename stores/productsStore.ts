import type {ProductsInterface} from "../types_interfaces/interfaces";
import {getProducts} from "../queries/queries";
import {ProductTypes} from "../lib/utils";

export const useProductsStore = defineStore('products', () => {
    const visibleProductsTypes = ref([ProductTypes.first, ProductTypes.second, ProductTypes.third])
    const currentPage= ref(0)
    function setVisibleProductsTypes(val:string[]) {
        visibleProductsTypes.value=val
    }
    const variables = {
        filter: visibleProductsTypes.value
    }

    const { result, refetch } = useQuery<ProductsInterface>(getProducts, variables)

    return {visibleProductsTypes, currentPage, result, refetch, setVisibleProductsTypes}
})
