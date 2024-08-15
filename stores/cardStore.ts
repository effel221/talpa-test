import {addToCard} from "../queries/mutations";


export const useCardStore = defineStore('cardInfo', () => {
    const {mutate} = useMutation(addToCard)

    return {mutate}
})
