

export const useUserInfoStore = defineStore('userInfo', () => {
    const isAdmin = ref(false)
    const getUser = () => (isAdmin.value ? "Admin" : "User")

    const setIsAdmin = (val: boolean) => isAdmin.value = val

    return {getUser, isAdmin, setIsAdmin}
})
