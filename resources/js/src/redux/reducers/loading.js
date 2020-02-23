import { HIDE_LOADING, SHOW_LOADING } from './../actions/types';


export default function loading(state = true, action) {

    switch (action.type) {
        case HIDE_LOADING:
            return false;
        case SHOW_LOADING:
            return true;
        default:
            return false;
    }
}

