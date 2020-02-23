import React from "react";
import { Spin } from 'antd';

function Loading(props) {

    return (
        <div className={`flex flex-col justify-center h-screen w-full `}>
            <Spin size="large" />
        </div>
    )
}


export default Loading;
