import {addToCard} from "../queries/mutations";
import {getCardInfo} from "../queries/queries";


export const useCardStore = defineStore('cardInfo', () => {
    const {result: card } = useQuery(getCardInfo, {
        filter: {user:"User"}
    })
    const {mutate} = useMutation(addToCard)

    return {mutate, card}
})
