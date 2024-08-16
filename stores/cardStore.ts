import {addToCard} from "../queries/mutations";
import {getCardInfo} from "../queries/queries";
import {useUserInfoStore} from "../stores/userStore";
import type {CardQuery} from "../types_interfaces/types";


export const useCardStore = defineStore('cardInfo', () => {
    const store = useUserInfoStore()
    const isAdminResult = computed(()=> store.isAdmin)
    const productCount = ref(0)
    const {result: cardUser, refetch: refetchCardUser } = useQuery<CardQuery>(getCardInfo, {
        filter: {user:"User"}
    })
    const {result: cardAdmin, refetch: refetchCardAdmin } = useQuery<CardQuery>(getCardInfo, {
        filter: {user:"Admin"}
    })
    watchEffect(async () => {
       const currentCount = store.isAdmin ? cardAdmin?.value?.get_card[0]?.productCount || 0 :
           cardUser?.value?.get_card[0]?.productCount || 0
       productCount.value = currentCount
    })
    const {mutate} = useMutation(addToCard)
    return {mutate, cardUser, cardAdmin, isAdminResult, refetchCardUser, refetchCardAdmin, productCount}
})
