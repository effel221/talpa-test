import {getBundleProducts} from "../queries/queries";
import type {BundleProductsInterface} from "../types_interfaces/interfaces";
import {deleteBundleProduct} from "../queries/mutations";
import type {BundleProduct} from "../types_interfaces/interfaces";

export const useModalStore = defineStore('modal', () => {
    const isModalVisible = ref(false)
    const onToggle = () => {
        isModalVisible.value = !isModalVisible.value
    }

    return {isModalVisible, onToggle}
})
