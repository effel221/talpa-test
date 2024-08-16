import type {ProductsInterface, Product} from "../types_interfaces/interfaces";
import {getProducts} from "../queries/queries";
import {ProductTypes} from "../lib/utils";
import {deleteProduct} from "../queries/mutations";
import {useUserInfoStore} from "../stores/userStore";
import {useCardStore} from "../stores/cardStore";

export const useProductsStore = defineStore('products', () => {
    const userInfoStore = useUserInfoStore()
    const cardStore = useCardStore()
    const visibleProductsTypes = ref([ProductTypes.first, ProductTypes.second, ProductTypes.third])
    const currentPage= ref(0)
    function setVisibleProductsTypes(val:string[]) {
        visibleProductsTypes.value=val
    }
    const variables = {
        filter: visibleProductsTypes.value
    }

    const { result, refetch } = useQuery<ProductsInterface>(getProducts, variables)
    const {mutate} = useMutation<ProductsInterface>(deleteProduct)

    const addToCard = async (item: Product) => {
        const removedProp = '__typename'
        const { [removedProp]: removedProperty, ...remainingObject } = item
        const variables = {
            card: {
                user: userInfoStore.getUser(),
                products: [remainingObject]
            }
        }
        await cardStore.mutate(variables)
        await cardStore.refetchCardUser()
        await cardStore.refetchCardAdmin()
    }

    const onDeleteProduct = async (item: Product) => {
        const variables = {
            id: item.id
        }
        await mutate(variables)
        await refetch()
        await cardStore.refetchCardUser()
        await cardStore.refetchCardAdmin()
    }

    return {visibleProductsTypes, currentPage, setVisibleProductsTypes, result, refetch, mutate, addToCard, onDeleteProduct}
})
