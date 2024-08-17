// @vitest-environment nuxt
import { it, expect } from 'vitest'
import { Product } from '#components'
import {mountSuspended, mockNuxtImport} from "@nuxt/test-utils/runtime"
import {productMock} from "../tests/bundleProductsStore.nuxt.test";

mockNuxtImport('useQuery', () => {
    return () => {
        return { value: 'mocked storage' }
    }
})

it('can mount Product component', async () => {
    const component = await mountSuspended(Product, {
        props: {
            item: {...productMock}, isOrderButtonVisible: true
        }, shallow: true
    })
    expect(component.text()).toContain('FlightHotelCarNameFlight date: Aug 17th 24City: MinsktextAdd to Cardx')
})
