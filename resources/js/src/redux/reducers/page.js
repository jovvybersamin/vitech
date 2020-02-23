import { SET_PAGE_NAME } from "./../actions/types";

export default function page(state = 'dashboard', action) {

    switch (action.type) {
        case SET_PAGE_NAME:
            return action.payload;
        default:
            return state;
    }
}

