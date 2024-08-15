import {addToCard} from "../queries/mutations";
import {getCardInfo} from "../queries/queries";
import {useUserInfoStore} from "../stores/userStore";


export const useCardStore = defineStore('cardInfo', () => {
    const store = useUserInfoStore()
    const isAdminResult = computed(()=> store.isAdmin)
    const productCount = ref(0)
    const {result: cardUser, refetch: refetchCardUser } = useQuery(getCardInfo, {
        filter: {user:"User"}
    })
    const {result: cardAdmin, refetch: refetchCardAdmin } = useQuery(getCardInfo, {
        filter: {user:"Admin"}
    })
    watchEffect(async () => {
       const currentCount = store.isAdmin ? cardAdmin?.value?.get_card[0]?.productCount ?? 0 :
           cardUser?.value?.get_card[0]?.productCount ?? 0
       productCount.value = currentCount
    })
    const {mutate} = useMutation(addToCard)
    return {mutate, cardUser, cardAdmin, isAdminResult, refetchCardUser, refetchCardAdmin, productCount}
})
