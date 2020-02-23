import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT, SET_SINGLE_ALERT, CLEAR_ALERT } from "./types";

// type:
// info
// warning
// error
// success
export const setAlert = (msg, type, timeout = 5000, isSingle = false) => dispatch => {
    const id = uuid.v4();

    dispatch({
        type: isSingle ? SET_SINGLE_ALERT : SET_ALERT,
        payload: {
            id,
            msg,
            type
        }
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}

export const clearAlert = () => dispatch => {
    dispatch({
        type: CLEAR_ALERT
    })
}
