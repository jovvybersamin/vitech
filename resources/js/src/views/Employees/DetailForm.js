import React from "react";
import { Form, Field } from "formik";
import { Button, Row, Col } from "antd";
import { Link } from 'react-router-dom';
import {
    AntDatePicker,
    AntInput,
    AntSelect,
    AntTimePicker
} from "../../components/CreateAntFields/CreateAntFields";
import {
    isRequired,
    validateDate
} from "../../components/ValidateFields/ValidateFields";

export default ({ handleSubmit, values, submitCount, isValid, isSubmitting }) => {

    return (
        <Row>
            <Col span={12}>
                <Form className="form-container" onSubmit={handleSubmit}>
                    <Field
                        component={AntInput}
                        name="first_name"
                        type="text"
                        label="First name"
                        validate={isRequired}
                        submitCount={submitCount}
                        hasFeedback
                        isFocus={true}
                    />

                    <Field
                        component={AntInput}
                        name="last_name"
                        type="text"
                        label="Last name"
                        validate={isRequired}
                        submitCount={submitCount}
                        hasFeedback
                        isFocus={true}
                    />

                    <Field
                        component={AntInput}
                        name="middle_name"
                        type="text"
                        label="Middle name"
                        submitCount={submitCount}
                    />

                    <Field
                        component={AntDatePicker}
                        name="date_hired"
                        label="Date hired"
                        defaultValue={values.bookingDate}
                        format={'MMM DD, YYYY'}
                        submitCount={submitCount}
                        style={{ width: 200 }}
                        hasFeedback
                        isFocus={true}
                    />

                    <Field
                        component={AntSelect}
                        name="customer_id"
                        label="Customer"
                        defaultValue={values.customer_id}
                        submitCount={submitCount}
                        validate={isRequired}
                        style={{ width: 200 }}
                        selectOptions={values.customers}
                        isKeyValuePair={true}
                        hasFeedback
                        isFocus={true}
                    />

                    <div className="submit-container">
                        <Button type="primary"
                            htmlType="submit"
                            size="large"
                            disabled={isValid === false}
                            loading={isSubmitting}>
                            Save
                        </Button>
                        <Link to="/customers" style={{ marginLeft: '15px' }} className="ant-btn ant-btn-default ant-btn-lg">
                            Cancel
                        </Link>
                    </div>
                </Form>
            </Col>
        </Row>
    )
}
