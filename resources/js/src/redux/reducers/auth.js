import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT, LOGOUT_SUCCESS } from './../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: false,
    isLoading: true
};

export default function auth(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                isLoading: false
            }
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                isLoading: false
            }
        case USER_LOADED: {
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: payload
            }
        }

        default:
            return state;
    }
}
