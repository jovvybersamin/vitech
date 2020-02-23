import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => {
    return (
        <>
            <Route {...rest} render={props => !isAuthenticated && !loading
                ? <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location },
                }} />
                : (<Component {...props} />)}
            />
        </>
    )
}



const mapStateToProps = ({ auth }) => ({
    auth: auth,
});


export default connect(mapStateToProps)(PrivateRoute);
