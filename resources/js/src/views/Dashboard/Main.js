import React, { useEffect } from "react";
import { connect } from "react-redux"
import { setPageName } from './../../redux/actions/page';

const Main = ({ setPageName }) => {

    useEffect(() => {
        setPageName("dashboard");
    }, [])

    return (
        <h1>Dashboard</h1>
    )
}


export default connect(null, {
    setPageName
})(Main);



