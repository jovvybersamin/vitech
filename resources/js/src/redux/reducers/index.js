import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import loading from './loading';
import page from './page';
import customer from './customer';
import customers from './customers';
import employee from './employee';

export default combineReducers({
    alert,
    auth,
    loading,
    page,
    customer,
    customers,
    employee
});


