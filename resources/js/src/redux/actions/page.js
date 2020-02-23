import { SET_PAGE_NAME } from "./types";


export const setPageName = (name) => dispatch => {
    dispatch({
        type: SET_PAGE_NAME,
        payload: name
    });
}
