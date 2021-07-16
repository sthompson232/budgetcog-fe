const initialState = {
    token: localStorage.getItem('access_token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function(state = initialState, action: any) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            localStorage.setItem('access_token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        default:
            return state;
    }
}