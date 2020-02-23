import { GET_EMPLOYEE, CLEAR_EMPLOYEE, UPDATE_EMPLOYEE, STORE_EMPLOYEE } from './../actions/types';
import moment from 'moment';

const defaultState = {
    date_hired: moment(Date.now())
}

export default function employee(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_EMPLOYEE:
        case STORE_EMPLOYEE:
            return payload;
        case CLEAR_EMPLOYEE:
            return defaultState;
        case UPDATE_EMPLOYEE:
            return { ...state, ...payload };
        default:
            return state;
    }
}
