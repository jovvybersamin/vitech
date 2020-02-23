import React from "react";
import { connect } from 'react-redux';
import { Alert } from 'antd';
import { PropTypes } from 'prop-types';

const GlobalAlert = ({ alerts }) => (
    alerts !== null && alerts.length > 0 && alerts.map(alert => (
        <Alert key={alert.id} message={alert.msg} type={alert.type} showIcon />
    ))
);

GlobalAlert.propTypes = {
    alerts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(GlobalAlert);
