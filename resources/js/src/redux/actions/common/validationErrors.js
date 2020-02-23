import { setAlert } from './../alert';



export const validationErrors = (errors, dispatch) => {
    const keys = Object.keys(errors);
    keys.forEach(key => {
        const err = errors[key];
        if (err.length > 0) {
            err.forEach(msg => {
                dispatch(setAlert(msg, 'error', 20000, true));
            });
        }
    });
}
