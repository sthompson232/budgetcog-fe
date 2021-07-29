export const login = (payload) => {
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

export const updateProfile = (profile) => {
    return {
        type: 'UPDATE_PROFILE',
        profile: profile
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
