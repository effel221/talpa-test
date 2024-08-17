import { it, expect, describe, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useBundleProductsStore } from '../stores/bundleProductsStore'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import {useProductsStore} from "../stores/productsStore";
import {useCardStore} from "../stores/cardStore";


mockNuxtImport('useQuery', () => {
    return () => {
        return { value: 'mocked storage' }
    }
})

export const productMock = {
    id: 1,
    date: new Date(),
    city: 'Minsk',
    name: 'Name',
    type: 'flight',
    description: 'text',
    __typename: 'Product'
}


describe('BundleProducts Store', () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        // so it's automatically picked up by any useStore() call
        // without having to pass it to it: `useStore(pinia)`
        setActivePinia(createPinia())
        mockNuxtImport('useMutation', () => {
            return () => {
                return { mutate: () => 'mocked storage' }
            }
        })
    })

    it('on addBundleToCard productStore addToCard will be called', () => {
        const productStore = useProductsStore()
        const cardStore = useCardStore()
        const addToCardSpy = vi.spyOn(productStore, 'addToCard')
        const refetchCardUser = vi.spyOn(cardStore, 'refetchCardUser')
        const refetchCardAdmin = vi.spyOn(cardStore, 'refetchCardAdmin')
        const store = useBundleProductsStore()
        store.addBundleToCard({
            id: 1,
            productids: [1,2,3],
            products: [{...productMock}]
        })
        expect(addToCardSpy).toHaveBeenCalled()
    })

})
