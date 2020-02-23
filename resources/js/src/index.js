import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


if (document.getElementById('app')) {
    ReactDOM.render(
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
        , document.getElementById('app'));
}
