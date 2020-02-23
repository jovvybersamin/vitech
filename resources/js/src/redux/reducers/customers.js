import { GET_CUSTOMERS } from './../actions/types';



export default function customers(state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CUSTOMERS:
            return payload;
        default:
            return state;
    }
}
