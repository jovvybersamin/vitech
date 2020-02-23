import React from "react";
import { Form, Field, useFormikContext } from "formik";
import { Button, Icon, Row, Col } from "antd";
import { Link } from 'react-router-dom';
import {
    AntDatePicker,
    AntInput,
    AntSelect,
    AntTimePicker
} from "../../components/CreateAntFields/CreateAntFields";
import {
    validateEmail,
    isRequired
} from "../../components/ValidateFields/ValidateFields";

export default ({ handleSubmit, values, submitCount, isValid, isSubmitting }) => {

    return (
        <Row>
            <Col span={12}>
                <Form className="form-container" onSubmit={handleSubmit}>
                    <Field
                        component={AntInput}
                        name="name"
                        type="text"
                        label="Name"
                        validate={isRequired}
                        submitCount={submitCount}
                        hasFeedback
                        isFocus={true}
                    />

                    <Field
                        component={AntInput}
                        name="email"
                        type="email"
                        label="Email"
                        validate={validateEmail}
                        submitCount={submitCount}
                        hasFeedback
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
