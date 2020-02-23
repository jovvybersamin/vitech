import React from "react";
import { Form, Field, useFormikContext } from "formik";
import { Button, Icon, Row, Col } from "antd";

import {
    AntDatePicker,
    AntInput,
    AntSelect,
    AntTimePicker
} from "../../../components/CreateAntFields/CreateAntFields";
import {
    validateEmail,
    isRequired
} from "../../../components/ValidateFields/ValidateFields";

export default ({ handleSubmit, values, submitCount, isValid, isSubmitting }) => {

    return (
        <Form className="form-container" onSubmit={handleSubmit}>
            <Field
                component={AntInput}
                name="email"
                type="email"
                label="Email"
                validate={validateEmail}
                submitCount={submitCount}
                hasFeedback
                isFocus={true}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />

            <Field
                component={AntInput}
                name="password"
                type="password"
                label="Password"
                validate={isRequired}
                submitCount={submitCount}
                hasFeedback
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />


            <div className="submit-container">
                <Button type="primary"
                    htmlType="submit"
                    className="login-form-button w-full"
                    size="large"
                    disabled={isValid === false}
                    loading={isSubmitting}>
                    Log in
                </Button>
            </div>
        </Form>
    )
}

/**

 <Field
 component={AntSelect}
 name="bookingClient"
 label="Client"
 defaultValue={values.bookingClient}
 selectOptions={values.selectOptions}
 validate={isRequired}
 submitCount={submitCount}
 tokenSeparators={[","]}
 style={{ width: 200 }}
 hasFeedback
 handleChange={(setFieldValue, value) => {
                    setFieldValue('selectOptionsTwo',['yes','yses','show']);
                }}
 />

 <Field
 component={AntSelect}
 name="bookingClientTwo"
 label="Client"
 defaultValue={values.bookingClientTwo}
 selectOptions={values.selectOptionsTwo}
 validate={isRequired}
 submitCount={submitCount}
 tokenSeparators={[","]}
 style={{ width: 200 }}
 hasFeedback
 handleChange={(setFieldValue, value) => {
                    setFieldValue('email',value);
                }}
 />

 **/
