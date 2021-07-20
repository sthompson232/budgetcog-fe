export const login = (payload, color) => {
    return {
        type: 'LOGIN',
        payload: payload,
        color: color
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}

export const setColor = (color) => {
    return {
        type: 'SET_COLOR',
        color: color
    }
}