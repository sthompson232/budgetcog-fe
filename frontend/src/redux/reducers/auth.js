const initialState = {
    firstName: '',
    lastName: '',
    imageUrl: '',
    email: '',
    isAuthenticated: false,
    color: '',
    background: 0
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
                color: action.color
            };
        case 'LOGOUT':
            return {
                ...state,
                firstName: '',
                lastName: '',
                fullName: '',
                email: '',
                imageUrl: '',
                color: '',
                background: 0,
                isAuthenticated: false,
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