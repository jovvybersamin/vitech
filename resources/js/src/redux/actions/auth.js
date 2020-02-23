
import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL } from './types';
import { setAlert } from './alert';
import setAuthToken from './../../utils/setAuthToken';
import { showLoading, hideLoading } from './loading';

/**
 * Login the user
 *
 * @param {*} email
 * @param {*} password
 */
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth/login', body, config);
        const { access_token: token } = res.data.original;

        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                token
            }
        });

        dispatch(loadUser(false));

    } catch (err) {
        const error = err.response.data.error;

        dispatch({
            type: LOGIN_FAIL,
            payload: null
        });

        dispatch(setAlert('Invalid Credentials', "error", 20000));

    }
}


export const loadUser = (loading = true) => async dispatch => {
    const { token } = localStorage;

    if (token) {
        setAuthToken(token);
    }

    try {
        if (loading) {
            dispatch(showLoading());
        }

        const res = await axios.get('/api/auth/me');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });

        if (loading) {
            dispatch(hideLoading());
        }

    } catch (err) {

        dispatch({
            type: AUTH_ERROR,
            payload: null
        })

        dispatch(hideLoading());
    }

}


export const logout = () => async dispatch => {
    dispatch({ type: LOGOUT });

    const { token } = localStorage;

    if (token) {
        setAuthToken(token);
    }

    try {
        const res = await axios.post('/api/auth/logout');

        dispatch({
            type: LOGOUT_SUCCESS
        });

    } catch (err) {
        console.log(err);
        dispatch({
            type: LOGOUT_FAIL
        });
    }

}
