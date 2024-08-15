import {addToCard} from "../queries/mutations";
import {getCardInfo} from "../queries/queries";
import {useUserInfoStore} from "../stores/userStore";


export const useCardStore = defineStore('cardInfo', () => {
    const store = useUserInfoStore()
    const isAdminResult = computed(()=> store.isAdmin)

    const {result: cardUser } = useQuery(getCardInfo, {
        filter: {user:"User"}
    })
    const {result: cardAdmin } = useQuery(getCardInfo, {
        filter: {user:"Admin"}
    }, {enabled: isAdminResult})
    const {mutate} = useMutation(addToCard)

    return {mutate, cardUser, cardAdmin, isAdminResult}
})
