import { SET_ALERT, REMOVE_ALERT, SET_SINGLE_ALERT } from "../actions/types";
import { CLEAR_ALERT } from './../actions/types';

const initialState = [];


export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return [...state, payload];
        case SET_SINGLE_ALERT:
            return [payload];
        case REMOVE_ALERT:
            console.log(payload);
            return state.filter(alert => alert.id !== payload);
        case CLEAR_ALERT:
            return [];
        default:
            return state;
    }
}
