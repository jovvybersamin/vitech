import React, { useEffect, useState } from "react";
import { connect } from "react-redux"
import { Row, Col, Input, Button, Divider } from 'antd';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { setPageName } from './../../redux/actions/page';
import DetailForm from "./DetailForm";
import Alert from "../../components/common/Alert";
import { clearAlert } from './../../redux/actions/alert';
import { getCustomer, clearCustomer, updateCustomer, storeCustomer } from './../../redux/actions/customer';

const Detail = ({ setPageName, getCustomer, clearCustomer, storeCustomer, updateCustomer, clearAlert, customer, match }) => {

    useEffect(() => {
        setPageName("customers.list");
    }, [])

    useEffect(() => {
        const { id } = match.params;

        clearAlert();
        clearCustomer();

        if (id) {
            getCustomer(id);
        }

        console.log('Customer:', customer);
    }, [])

    const handleSubmit = (formProps, { setSubmitting, resetForm }) => {
        console.log('Customer', customer);
        console.log('Form Props', formProps);

        if (customer.id) {
            updateCustomer(customer.id, formProps).then((response) => {
                setSubmitting(false);
            });
        } else {
            storeCustomer(formProps).then(response => {
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
                    <h1 className="text-3xl">{customer.id ? 'Customer Detail' : 'New Customer'}</h1>
                </Col>
                <Col span={12}>

                </Col>
            </Row>

            <Divider />

            <Alert />

            <Formik initialValues={customer}
                enableReinitialize={true}
                onSubmit={handleSubmit}>
                {(props) => (
                    <DetailForm {...props} />
                )}
            </Formik>
        </>
    )
}

const mapStateToProps = ({ customer }) => ({
    customer
})

export default connect(mapStateToProps, {
    setPageName,
    getCustomer,
    clearCustomer,
    updateCustomer,
    storeCustomer,
    clearAlert
})(Detail);
