import React, { useEffect, useState } from "react";
import { connect } from "react-redux"
import { Row, Col, Divider } from 'antd';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { setPageName } from './../../redux/actions/page';
import DetailForm from "./DetailForm";
import Alert from "../../components/common/Alert";
import { clearAlert } from './../../redux/actions/alert';
import { getEmployee, clearEmployee, updateEmployee, storeEmployee } from './../../redux/actions/employee';
import { getCustomers } from "./../../redux/actions/customer";

const Detail = ({ setPageName, getEmployee, clearEmployee, storeEmployee, updateEmployee, clearAlert, getCustomers, employee, customers, match }) => {



    useEffect(() => {
        setPageName("employees.list");
    }, [])

    useEffect(() => {
        const { id } = match.params;

        clearAlert();
        clearEmployee();

        getCustomers();

        if (id) {
            getEmployee(id);
        }

        console.log('Employee:', employee);
    }, [])

    const handleSubmit = (formProps, { setSubmitting, resetForm }) => {
        const { id } = match.params;
        const body = {
            id: id ? id : 0,
            first_name: formProps.first_name,
            last_name: formProps.last_name,
            middle_name: formProps.middle_name,
            date_hired: formProps.date_hired,
            customer_id: formProps.customer_id
        };

        if (employee.id) {
            updateEmployee(employee.id, body).then(response => {
                setSubmitting(false);
            });
        } else {
            storeEmployee(body).then(response => {
                if (response) {
                    resetForm();
                }
                setSubmitting(false);
            });
        }
    }

    return (
        <>
            <Row type="flex">
                <Col span={12}>
                    <h1 className="text-3xl">{employee.id ? 'Employee Detail' : 'New Employee'}</h1>
                </Col>
                <Col span={12}>

                </Col>
            </Row>

            <Divider />

            <Alert />

            <Formik initialValues={{ ...employee, customers }}
                enableReinitialize={true}
                onSubmit={handleSubmit}>
                {(props) => (
                    <DetailForm {...props} />
                )}
            </Formik>
        </>
    )
}

const mapStateToProps = ({ employee, customers }) => ({
    employee,
    customers
});

export default connect(mapStateToProps, {
    setPageName,
    getEmployee,
    clearEmployee,
    updateEmployee,
    storeEmployee,
    clearAlert,
    getCustomers
})(Detail);
