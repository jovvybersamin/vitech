import React from "react";
import { Redirect } from 'react-router-dom';


const NoMatch = (props) => {
    return <Redirect to="/404" />
}

export default NoMatch;
