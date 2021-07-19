const initialState = {
    firstName: '',
    lastName: '',
    imageUrl: '',
    email: '',
    isAuthenticated: false,
    color: '#0BC5EA',
    background: '1'
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
            }
        default:
            return state;
    }
}

export default userReducer