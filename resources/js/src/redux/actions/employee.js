import { GET_EMPLOYEE, CLEAR_EMPLOYEE, STORE_EMPLOYEE, UPDATE_EMPLOYEE } from './types';
import setAuthToken from './../../utils/setAuthToken';
import { showLoading, hideLoading } from './loading';
import { setAlert, clearAlert } from './alert';
import { validationErrors } from './common/validationErrors';
import moment from "moment";


export const getEmployee = (id) => async dispatch => {

    const { token } = localStorage;

    if (token) {
        setAuthToken(token);
    }

    try {

        const response = await axios.get(`/api/employees/${id}`);
        const { data } = response.data;
        data.date_hired = moment(data.date_hired);

        dispatch({
            type: GET_EMPLOYEE,
            payload: data
        });
    } catch (err) {
        console.error(`Error fetching: /api/employees/${id}`, err);
        // dispatch
    }
}

export const storeEmployee = (employee) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const { token } = localStorage;

    if (token) {
        setAuthToken(token);
    }
    const body = JSON.stringify({
        first_name: employee.first_name,
        last_name: employee.last_name,
        middle_name: employee.middle_name,
        date_hired: employee.date_hired,
        customer_id: employee.customer_id
    });

    try {
        const response = await axios.post(`/api/employees`, body, config);
        const { data } = response.data;

        dispatch({
            type: STORE_EMPLOYEE,
            payload: {}
        });

        dispatch(clearEmployee());
        dispatch(setAlert('Employee successfully created', 'success', 20000, true));

        return data.id;

    } catch (err) {
        if (!err.response) return;
        const data = err.response.data;
        if (data.message) {
            dispatch(setAlert(data.message, 'error', 20000));
            return;
        }

        // dispatch
        const errors = err.response.data.errors;
        validationErrors(errors, dispatch);
        return null;
    }
}

export const updateEmployee = (id, employee) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const { token } = localStorage;
    if (token) {
        setAuthToken(token);
    }

    const body = JSON.stringify({
        first_name: employee.first_name,
        last_name: employee.last_name,
        middle_name: employee.middle_name,
        date_hired: employee.date_hired.format('YYYY-MM-DD'),
        customer_id: employee.customer_id,
        _method: 'PUT'
    });

    try {
        const response = await axios.post(`/api/employees/${id}`, body, config);
        console.log('Employee Update:', response.data);

        dispatch({
            type: UPDATE_EMPLOYEE,
            payload: employee
        });

        dispatch(setAlert('Employee successfully updated', 'success', 20000, true));

    } catch (err) {
        if (!err.response) return;
        const data = err.response.data;
        if (data.message) {
            dispatch(setAlert(data.message, 'error', 20000));
            return;
        }

        console.log('Error:', err.response);

        // dispatch
        const errors = err.response.data.errors;
        validationErrors(errors, dispatch);
        return;
    }
}



export const clearEmployee = () => dispatch => {
    dispatch({
        type: CLEAR_EMPLOYEE,
        payload: null
    });
}


