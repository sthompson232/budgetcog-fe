export const login = (payload: any) => {
    return {
        type: 'LOGIN',
        payload: payload
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}