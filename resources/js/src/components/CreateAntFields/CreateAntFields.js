import React from "react";
import { DatePicker, Form, Input, TimePicker, Select } from "antd";
import { useFormikContext } from "formik";

const FormItem = Form.Item;
const { Option } = Select;

const CreateAntField = AntComponent => ({
        field,
        form,
        hasFeedback,
        label,
        selectOptions,
        submitCount,
        type,
        isFocus,
        handleChange,
        ...props
    }) => {

    const {
        values,
        setFieldValue
    } = useFormikContext();

    const touched = form.touched[field.name];
    const submitted = submitCount > 0;
    const hasError = form.errors[field.name];
    const submittedError = hasError && submitted;
    const touchedError = hasError && touched;
    const onInputChange = ({ target: { value } }) =>
        form.setFieldValue(field.name, value);
    const onChange = value => {
        form.setFieldValue(field.name, value);
        handleChange(setFieldValue, value, touched);
    };

    const onBlur = () => form.setFieldTouched(field.name, true);
    const fieldRef = React.useRef(null);

    // adding the password type.
    props = {...props, ...(type === 'password' ? {type} : {})};



    React.useEffect(() => {
        if(isFocus) {
            fieldRef.current.focus();
        }
        console.log(values);
    },[isFocus])



    return (
        <div className="field-container">
            <FormItem
                label={label}
                hasFeedback={
                    (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
                }
                help={submittedError || touchedError ? hasError : false}
                validateStatus={submittedError || touchedError ? "error" : "success"}
            >
                <AntComponent
                    {...field}
                    {...props}
                    onBlur={onBlur}
                    onChange={type ? onInputChange : onChange}
                    ref={fieldRef}

                >
                    {selectOptions &&
                    selectOptions.map(name => <Option key={name}>{name}</Option>)}
                </AntComponent>
            </FormItem>
        </div>
    );
};

export const AntSelect = CreateAntField(Select);
export const AntDatePicker = CreateAntField(DatePicker);
export const AntInput = CreateAntField(Input);
export const AntPassword = CreateAntField(Input);
export const AntTimePicker = CreateAntField(TimePicker);
