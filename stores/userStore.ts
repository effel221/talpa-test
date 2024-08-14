

export const useUserInfoStore = defineStore('userInfo', () => {
    const isAdmin = ref(false)

    const setIsAdmin = (val: boolean) => isAdmin.value = val

    return {isAdmin, setIsAdmin}
})
