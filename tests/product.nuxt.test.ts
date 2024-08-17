// @vitest-environment nuxt
import * as VueQuery from '@vue/apollo-composable'
import { it, expect, vi } from 'vitest'
import { Product } from '#components'
import {mountSuspended} from "@nuxt/test-utils/runtime"


vi.mock('@vue/apollo-composable');

it('can mount Product component', async () => {
    const result =  [{
        "mock": true
    }]
    VueQuery.useQuery = vi.fn().mockReturnValue({ result })
    VueQuery.useMutation = vi.fn().mockReturnValue({ result })
    const component = await mountSuspended(Product,{props: {item: {
                name: 'Name',
                isOderButtonVisible: true
            }},shallow: true})
    expect(component.html()).toContain('<h3 class="mb-2 mt-2 text-2xl font-bold tracking-tight">Name</h3>')
})
