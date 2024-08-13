import type {ProductsInteface} from "#build/types_interfaces/interfaces";
import {getProducts} from "../queries/queries";
import {ProductTypes} from "../lib/utils";

export const useProductsStore = defineStore('products', () => {
    const visibleProductsTypes = ref([ProductTypes.first, ProductTypes.second, ProductTypes.third])
    const currentPage= ref(0)
    function setVisibleProductsTypes(val:string[]) {
        visibleProductsTypes.value=val
    }

    const { result, refetch } = useQuery<ProductsInteface>(getProducts)

    return {visibleProductsTypes, currentPage, result, refetch, setVisibleProductsTypes}
})
