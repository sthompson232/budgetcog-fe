export const login = (payload, profile) => {
    return {
        type: 'LOGIN',
        payload: payload,
        profile: profile
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

export const setBackground = (id) => {
    return {
        type: 'SET_BACKGROUND',
        id: id
    }
}

export const updateBudget = (value) => {
    return {
        type: 'UPDATE_BUDGET',
        payload: value
    }
}

export const updateGoal =(value) => {
    return {
        type: 'UPDATE_GOAL',
        payload: value
    }
}