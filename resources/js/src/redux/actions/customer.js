import { GET_CUSTOMER, GET_CUSTOMERS, CLEAR_CUSTOMER, STORE_CUSTOMER, UPDATE_CUSTOMER } from './types';
import setAuthToken from './../../utils/setAuthToken';
import { showLoading, hideLoading } from './loading';
import { setAlert, clearAlert } from './alert';
import { validationErrors } from './common/validationErrors';


export const getCustomer = (id) => async dispatch => {

    const { token } = localStorage;

    if (token) {
        setAuthToken(token);
    }

    try {

        const response = await axios.get(`/api/customers/${id}`);
        const { data } = response.data;
        dispatch({
            type: GET_CUSTOMER,
            payload: data
        });
    } catch (err) {
        console.error(`Error fetching: /api/customers/${id}`, err);
        // dispatch
    }
}


export const getCustomers = () => async dispatch => {

    const { token } = localStorage;

    if (token) {
        setAuthToken(token);
    }

    try {
        const response = await axios.get(`/api/customers/all`);
        const { data } = response.data;
        const keyValuePairs = data.map((record) => {
            return {
                id: record.id,
                label: record.name
            }
        });
        dispatch({
            type: GET_CUSTOMERS,
            payload: keyValuePairs
        });

    } catch (err) {
        console.error(`Error fetching: /api/customers/all`, err);
        // dispatch
    }
}

export const storeCustomer = (customer) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const { token } = localStorage;

    if (token) {
        setAuthToken(token);
    }
    const body = JSON.stringify({ name: customer.name, email: customer.email });
    try {
        const response = await axios.post(`/api/customers`, body, config);
        const { data } = response.data;

        dispatch({
            type: STORE_CUSTOMER,
            payload: {}
        });

        dispatch(clearCustomer());
        dispatch(setAlert('Customer successfully created', 'success', 20000, true));

        return data.id;

    } catch (err) {
        if (!err.response) return;
        // dispatch
        const errors = err.response.data.errors;
        validationErrors(errors, dispatch);
        return null;
    }
}

export const updateCustomer = (id, customer) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const { token } = localStorage;

    if (token) {
        setAuthToken(token);
    }

    const body = JSON.stringify({ name: customer.name, email: customer.email, _method: 'PUT' });

    try {
        const response = await axios.post(`/api/customers/${id}`, body, config);
        console.log('Customer Update:', response.data);

        dispatch({
            type: UPDATE_CUSTOMER,
            payload: customer
        });

        dispatch(setAlert('Customer successfully updated', 'success', 20000, true));
    } catch (err) {
        if (!err.response) return;
        // dispatch
        const errors = err.response.data.errors;
        validationErrors(errors, dispatch);
        return null;
    }
}



export const clearCustomer = () => dispatch => {
    dispatch({
        type: CLEAR_CUSTOMER,
        payload: null
    });
}


