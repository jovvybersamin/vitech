import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import LoginForm from "./LoginForm";

// Redux imports
import { connect } from "react-redux";
import { login } from "../../../redux/actions";

// assets
import loginBGImage from "./BG.png";
import Alert from "../../../components/common/Alert";



function Login({ login, isAuthenticated, loading, location }) {
    const [state, setState] = React.useState({});

    React.useEffect(() => {
        setState({
            email: 'jovvy@gmail.com',
            password: 'passwprd'
        });
    }, [])

    const handleSubmit = (formProps, action) => {
        login(formProps.email, formProps.password).then(() => {
            action.setSubmitting(false);
        });
    }

    if (isAuthenticated) {
        if (location.state) {
            return <Redirect to={location.state.from} />
        }
        return <Redirect to="/dashboard" />
    }

    if (loading) {
        return null;
    }

    return (
        <div className="bg-gray-40000 flex h-screen">
            <div className="bg-blue-400 flex-1 layout-login-left">
                <img className="login-background" src={loginBGImage} />
            </div>
            <div className="py-6 px-6 lg:w-1/3 md:w-1/2 sm:w-full w-full flex flex-col justify-center">
                <div className="text-4xl text-gray-900">
                    <span>Login</span>
                </div>
                <div>
                    <span>Enter your System Credentials</span>
                </div>
                <div className="mt-2">
                    <Alert />
                    <Formik initialValues={state}
                        enableReinitialize={true}
                        onSubmit={handleSubmit}>
                        {(props) => (
                            <LoginForm {...props} />
                        )}
                    </Formik>
                </div>

            </div>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
};


const mapStateToProps = ({ auth, loading }) => ({
    isAuthenticated: auth.isAuthenticated,
    loading
});

export default connect(mapStateToProps, { login })(Login);


/**
 <form className="bg-white" >
 <Form.Item>
 <Input
 ref={usernameRef}
 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
 placeholder="Username"
 />
 </Form.Item>
 <Form.Item>
 <Input
 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
 type="password"
 placeholder="Password"
 />

 </Form.Item>
 <Form.Item>
 <Button type="primary" htmlType="submit" className="login-form-button w-full" size="large">
 Log in
 </Button>
 </Form.Item>
 </form>
 **/
