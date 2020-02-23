import { GET_CUSTOMER, CLEAR_CUSTOMER, UPDATE_CUSTOMER, STORE_CUSTOMER } from './../actions/types';



export default function customer(state = {}, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CUSTOMER:
        case STORE_CUSTOMER:
            return payload;
        case CLEAR_CUSTOMER:
            return {};
        case UPDATE_CUSTOMER:
            return { ...state, ...payload };
        default:
            return state;
    }
}
