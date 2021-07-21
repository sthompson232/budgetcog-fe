const initialState = {
    firstName: '',
    lastName: '',
    imageUrl: '',
    email: '',
    isAuthenticated: false,
    color: '',
    background: 0,
    budget: 0.00,
    total_saved: 0.00,
}


const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                firstName: action.payload.profileObj.givenName,
                lastName: action.payload.profileObj.familyName,
                fullName: `${action.payload.profileObj.givenName} ${action.payload.profileObj.familyName}`,
                email: action.payload.profileObj.email,
                imageUrl: action.payload.profileObj.imageUrl,
                isAuthenticated: true,
                color: action.profile.color,
                background: action.profile.background,
                budget: action.profile.budget,
                total_saved: action.profile.total_saved
            };
        case 'LOGOUT':
            return {
                ...state,
                firstName: '',
                lastName: '',
                fullName: '',
                email: '',
                imageUrl: '',
                isAuthenticated: false,
                color: '',
                background: 0,
                budget: 0,
                total_saved: 0
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            }
        case 'SET_BACKGROUND':
            return {
                ...state,
                background: action.id
            }
        default:
            return state;
    }
}

export default userReducer