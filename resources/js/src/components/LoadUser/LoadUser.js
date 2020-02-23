import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { loadUser } from "../../redux/actions/auth";
import Loading from './../Loading/index';


const LoadUser = ({ loading, dispatch }) => {

    useEffect(() => {
        console.log('load user component')
        dispatch(loadUser());
    }, [])

    if (loading) {
        return <Loading />;
    }

    return null;
}

const mapStateToProps = (state) => ({
    loading: state.loading
});

export default connect(mapStateToProps)(LoadUser);
