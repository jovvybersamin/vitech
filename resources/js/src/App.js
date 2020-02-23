import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// utils

import Loading from "./components/Loading"
import LoadUser from "./components/LoadUser/LoadUser";
import PrivateRoute from './components/routing/PrivateRoute/PrivateRoute';

// Redux
import { Provider } from "react-redux"
import store from "./redux/stores";

// Common components.
const loading = () => <Loading />;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));


export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <LoadUser store={store} />
                <Router>
                    <React.Suspense fallback={<Loading />}>
                        <Switch>
                            <Route path='/login' name="Login Page" render={props => <Login {...props} />} />
                            <PrivateRoute path='/' name="Home" component={DefaultLayout} />
                        </Switch>
                    </React.Suspense>
                </Router>
            </Provider>
        );
    }
}


